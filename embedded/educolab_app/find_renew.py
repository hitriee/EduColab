from kivy.app import App
from kivy.core.window import Window
from kivy.lang import Builder
from kivy.uix.screenmanager import Screen
from kivy.properties import StringProperty
from myTextInput import limitedTextInput
import requests

# self.leftInput = 입력받은 비밀번호

class Find_renew(Screen):
    def __init__(self, **kwargs):
        super(Find_renew, self).__init__(**kwargs)
        Window.top=50
        Window.left=10
        Window.clearcolor = (242/255,245/255,247/255,1)
        Window.size = (1280,720)
        Window.borderless=True
        # Builder.load_file('find_renew.kv')
        # self.name_temp=''
        # self.username_temp=''
        # self.email_temp=''

    def on_pre_enter(self):
        self.name_temp=self.manager.get_screen('PW_email').name_temp
        self.username_temp=self.manager.get_screen('PW_email').username_temp
        self.email_temp=self.manager.get_screen('PW_email').ids.left_input.text

    def leftBtn(self):
        ##### 왼쪽 버튼 입력시 발동하는 함수
        self.leftInput=self.ids.left_input.text
        self.rightInput=self.ids.right_input.text

        ##### 비밀번호 일치 확인
        self.data = {
            'name': self.name_temp,
            'email': self.email_temp,
            'username': self.username_temp,
            'password1': self.leftInput,
            'password2': self.rightInput,
        }
        self.res = requests.post(
            'https://i7c102.p.ssafy.io/api/accounts/change_pw/',
            data=self.data
        )

        if self.res.json()["success"] and len(self.leftInput) > 0:

            self.next_page = "PW_result"
            self.ids.right_info.text = ""
        else:
            if self.res.json()["message"] == "비밀번호가 일치하지 않습니다":
                self.ids.right_info.text="비밀번호가\n일치하지 않습니다"
            elif self.res.json()["message"] == "비밀번호는 8자 이상, 영문과 숫자를 혼합해야합니다":
                self.ids.right_info.text="비밀번호는 8자 이상,\n영문과 숫자를\n혼합해야 합니다"
            else:
                self.ids.right_info.text="변경할 비밀번호를\n입력해주세요"
            self.next_page=self.name

    def on_leave(self): # 페이지 이동시 기존 입력값 지우기
        self.ids.left_input.text=""
        self.ids.right_input.text=""
        self.ids.right_info_text=""
        self.manager.before_page=self.name

class find_test_App(App):
    def build(self):
        Builder.load_file('find_renew.kv')
        return Find_renew()

if __name__=="__main__":
    find_test_App().run()


