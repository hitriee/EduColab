<template>
  <div class="baseStyle">
    <h4>{{ getTitle }}</h4>

    <div class="q-gutter-lg row">
      <span class="q-py-md text-size" style="width:70px; text-align:center">분류 </span>
      <div style="width: 300px">
        <div class="q-gutter-md">
          <q-select class="text-size" outlined v-model="credentials.classification" label="classification" :options="options" required/>
        </div>
      </div>
    </div>

    <hr>

    <div class="row">
      <span class="q-py-md q-mr-lg text-size" style="width:70px; text-align:center">제목</span>
      <q-input class="text-size" outlined v-model="credentials.title" label="title" style="width: 700px;" required/>
    </div>

    <hr>

    <div class="row">
      <span class="q-py-md q-mr-lg text-size" style="width:70px; text-align:center">내용</span>
      <div style="width:700px">
        <q-editor
          class="text-size"
          style="min-height:500px; max-height:100%;"
          v-model="credentials.content"
          label="content"
          :definitions="{
            bold: {label: 'Bold', icon: null, tip: 'My bold tooltip'}
          }"
          paragraph-tag
          required/>
      </div>
    </div>

    <hr>

    <div class="row items-center">
      <span class="q-py-md q-ml-sm q-mr-lg text-size" style="width: 70px; text-align:center">첨부파일</span>
      <q-file outlined v-model="credentials.files" style="width: 700px;" multiple use-chips
      label="첨부파일"></q-file>
    </div>
    <hr>

    <div class="row justify-center q-mt-xl q-gutter-md">
        <q-btn @click="goNotice" class="text-size q-px-xl q-py-md" color="grey-8">취소</q-btn>
        <q-btn @click="noticePk? updateNotice(credentials) : createNotice(credentials)" class="text-size q-px-xl q-py-md" 
        color="blue-6">
        <p>{{ noticePk? '수정' : '등록'}}</p>
        </q-btn>  
    </div>
    
  <router-view />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { useRoute } from 'vue-router'
import { reactive } from '@vue/reactivity'
import { ref } from 'vue'

export default {
  name: 'NoticeCreateView',
  computed : {
    ...mapGetters(['noticeDetail', 'isLoggedIn', 'currentUser']),
    getTitle() {
      if (this.noticePk) return "공지사항 수정 페이지"
      return "공지사항 등록 페이지"
    },
  },
  setup() {
    const route = useRoute()
    let fileName = ''
    let noticePk = ref(route.params.noticePk)
    const credentials = reactive({
      classification: '',
      title: '',
      content: '',
      files: '',
      notice_num : noticePk,
    })
    return {
      options : ['공지', '변경', '행사'],
      noticePk,
      credentials,
      fileName
    }
  },
  methods: {
    ...mapActions(['createNotice', 'getNoticeDetail', 'updateNotice', 'createFileNotice']),
    goNotice() {
      if (confirm('페이지에서 나가시겠습니까? 글은 저장되지 않습니다.'))
      this.$router.push({name:'Notice'})
    }
  },
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push('/educolab/login/')
    } else if (!this.currentUser.userflag) {
      this.$router.push('/educolab/')
    } else if (this.noticePk) {
      this.getNoticeDetail(this.noticePk)
      this.credentials.classification = this.noticeDetail.notice.classification
      this.credentials.title = this.noticeDetail.notice.title
      this.credentials.content = this.noticeDetail.notice.content
    }
  } 
}
</script>

<style scoped>
  p {
    margin: 0;
  }
  .text-size {
    font-size: 1rem;
  }
</style>