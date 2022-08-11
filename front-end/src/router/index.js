// import { AppFullscreen } from 'quasar'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  // 로그인
  {
    path: '/educolab/login',
    name: 'login',
    component: () => import ('@/views/LoginView')
  },
  // 메인페이지 
  {
    path: '/educolab',
    name: 'educolab',
    component: () => import('@/components/MainPage')
  },
  // 아이디 & 비밀번호 찾기
  {
    path: '/find/:info',
    name: 'findInfo',
    component: () => import('@/views/FindView')
  },
  // 비밀번호 & 회원정보 변경
  {
    path: '/change/:userData',
    name: 'changeInfo',
    component: () => import('@/views/FindView')
  },
  // 회원정보 조회
  {
    path: '/my-info',
    name: 'readMyInfo',
    component: () => import('@/views/FindView')
  },
  // 회원가입
  {
    path: '/signup/:userType',
    name: 'signup',
    component: () => import ('@/views/SignupView')
  },
  // 회원가입 동의 페이지
  {
    path: '/signup',
    name: 'agree',
    component: () => import ('@/views/SignupAgreeView')
  },
  // 공지사항
  {
    path: '/notice',
    name: 'Notice',
    component: () => import('@/views/NoticeView')
  },
  
  // 공지사항 상세 페이지
  {
    path: '/notice/detail/:noticePk',
    name: 'NoticeDetail',
    component: () => import('@/views/NoticeDetailView')
  },

  // 공지사항 작성
  {
    path: '/notice/create/:noticePk?',
    name: 'NoticeForm',
    component: () => import('@/views/NoticeFormView')
  },

  // 과제 메인
  {
    path: '/:userType/task',
    name: 'TaskListView',
    component: () => import('@/views/TaskListView')
  },
  // 과제 검색
  {
    path: '/:userType/task/search',
    name: 'SearchTaskView',
    component: () => import('@/views/SearchTaskView')
  },
  // 과제 상세 
  {
    path: '/:userType/task/detail/:taskType/:taskPk',
    name: 'TaskDetailView',
    component: () => import('@/views/TaskDetailView')
  },
  // 과제 생성
  {
    path: '/:userType/task/create',
    name: 'TaskCreateView',
    component: () => import('@/views/TaskFormview')
  },
  // 과제 수정
  {
    path: '/:userType/task/update/:taskPk',
    name: 'TaskUpdateView',
    component: () => import('@/views/TaskFormview')
  },

  // 설문조사(교사)
  {
    path: '/survey/',
    name: 'Survey',
    component: () => import('@/views/SurveyView')
  },

  // 설문조사 상세
  {
    path: '/survey/detail/:surveyPk',
    name: 'SurveyDetail',
    component: () => import('@/views/SurveyDetailView')
  },

  // 설문조사 등록
  {
    path: '/survey/create/:surveyPk?',
    name: 'SurveyCreate',
    component: () => import('@/views/SurveyCreateView')
  },

  // 설문조사 통계
  {
    path: '/survey/stat/:surveyPk',
    name: 'SurveyStat',
    component: () => import('@/views/SurveyStatView')
  },
  // 마이페이지
  {
    path: '/:userType',
    name: 'MyPage',
    component: () => import('@/views/MyPageView')
  },

  // 내 필기(학생)
  {
    path: '/student/writing',
    name: 'StudentWritingView.vue',
    component: () => import('@/views/StudentWritingView')
  },

  // 포인트 상점(학생)
  {
    path: '/student/store',
    name: 'StudentStoreView.vue',
    component: () => import('@/views/StudentStoreView')
  },
  // 404 에러
  {
    path: '/404',
    name: 'notFound',
    component: () => import ('@/views/NotFoundView')
  },

  // 퀴즈 메인 
  {
    path: '/quiz',
    name: 'Quiz',
    component: () => import('@/views/QuizView')
  },

  // 퀴즈 등록
  {
    path: '/quiz/create/:quizPk?',
    name: 'QuizCreate',
    component: () => import('@/views/QuizCreateView')
  },

  // 퀴즈 상세
  {
    path: '/quiz/detail/:quizPk',
    name: 'QuizDetail',
    component: () => import('@/views/QuizDetailView')
  },
  // 로그아웃
  {
    path: '/logout',
    name: 'logout',
    meta: {
      reload:true,
    },
    redirect: '/educolab/login'
  },
  {
    path: '/',
    redirect: '/educolab/login'
  },
  // 존재하지 않는 페이지
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
