const FILE = 'http://127.0.0.1:8000'
// const FILE = 'https://i7c102.p.ssafy.io'
const BASE_URL = FILE + '/api/'
const ACCOUNTS = BASE_URL + 'accounts/'
const NOTICE = BASE_URL + 'notice/'
const SURVEY = BASE_URL + 'survey/'
const QUIZ = BASE_URL + 'quiz/'
const MY_PAGE = BASE_URL + 'mypage/'
const HOMEWORK = BASE_URL + 'homework/'
const MainPage = BASE_URL + 'mainpage/'

export default {
  accounts: {
    login: () => ACCOUNTS + 'login/',
    logout: () => ACCOUNTS + 'logout/',
    signup: () => ACCOUNTS + 'registration/',
    schoolInfo: () => ACCOUNTS + 'schoolinfo/',
    checkUsername: () => ACCOUNTS + 'check_username/',
    findUsername: () => ACCOUNTS + 'find_username/',
    sendEmail: () => ACCOUNTS + 'send_signup_email/',
    sendPwEmail: () => ACCOUNTS + 'send_pw_email/',
    changePw: () => ACCOUNTS + 'change_pw/',
    checkePw: () => ACCOUNTS + 'check_pw/',
  },
  notice: {
    noticeList: () => NOTICE + "main/",
    noticeDetail: () => NOTICE + "detail/",
    noticeCreate: () => NOTICE + "create/",
    noticeUpdate: () => NOTICE + "update/",
  },

  survey: {
    surveyList: () => SURVEY + 'main/',    
    surveyCreate: () => SURVEY + 'create/',
    surveyDetail: () => SURVEY + 'detail/',
    surveyUpdate: () => SURVEY + 'update/',
    surveyStat : () => SURVEY + 'stat/',
    surveyQuestion : () => SURVEY + 'stat/detail/'
  },

  quiz: {
    quizList: () => QUIZ + 'main/',
    quizCreate: () => QUIZ + 'create/',
    quizDetail: () => QUIZ + 'detail/',
  },

  mainpage: {
    mainItem: () => MainPage
  },
  task: {
    list: () => HOMEWORK + 'main/',
    create: () => HOMEWORK + 'create/',
    detail: () => HOMEWORK + 'detail/',
    check: () => HOMEWORK + 'check/',
    checkDone: () => HOMEWORK + 'check/done/',
    submit: () => HOMEWORK + 'submit/',
  },
  file: {
    path: () => FILE,
    change: () => '/api/media/accounts/profils/',
    default: () => '/api/media/accounts/profils/profile1.jpg'
  },
  myPage: {
    main: () => MY_PAGE + 'main/',
    point: () => MY_PAGE + 'grant/',
    changeProfil: () => MY_PAGE + 'profil/',
    changeTitle: () => MY_PAGE + 'title/',
  },
}