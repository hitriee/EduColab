from django.contrib.auth.models import AbstractUser
from django.db import models

from pointshop.models import PTitle, Icon

# Create your models here.

class SchoolInfo(models.Model):
    code = models.CharField(max_length=7,primary_key=True)
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)

class UserInfo(AbstractUser):
    username = models.CharField(primary_key=True,max_length=20)
    userflag = models.BooleanField(default=False, blank=True)
    name = models.CharField(max_length=30,default=None,blank=True)
    birthday = models.DateField(default=None,blank=True)
    school = models.ForeignKey(SchoolInfo,on_delete=models.CASCADE,db_column='school', related_name='school_student')
    phone_number = models.CharField(max_length=11,blank=True)
    grade = models.IntegerField(blank=True,null=True)
    class_field = models.IntegerField(blank=True, null=True)
    subject = models.CharField(max_length=20,null=True,blank=True)
    homeroom_teacher_flag = models.IntegerField(null=True)
    plus_point = models.IntegerField(default=0)
    minus_point = models.IntegerField(default=0)
    profil = models.ImageField(blank=True, upload_to='accounts/profils' ,default='accounts/profils/profile1.jpg')
    acc_point = models.IntegerField(default=0, null=True)
    wear_title = models.ForeignKey(PTitle,null=True,on_delete=models.SET_NULL)
    own_title = models.ManyToManyField(PTitle,related_name='title_owner')
    wear_icon = models.ForeignKey(Icon,null=True,on_delete=models.SET_NULL)
    own_icon = models.ManyToManyField(Icon, related_name='icon_owner')

    
class PointLog(models.Model):
    school = models.ForeignKey(SchoolInfo, on_delete=models.CASCADE, related_name="point_school",null=True)
    teacher = models.ForeignKey(UserInfo, on_delete=models.DO_NOTHING, related_name="point_teacher", null=True)
    student = models.ForeignKey(UserInfo, on_delete=models.CASCADE, related_name="point_student", null=True)
    content = models.CharField(max_length=45)
    point = models.IntegerField()
    acc_point = models.IntegerField(null=True)
    acc_minus = models.IntegerField(null=True)
    created_at = models.DateField(auto_now=True)