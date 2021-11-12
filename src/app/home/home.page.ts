import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../register/models/user.mode';
import { MenuController, Platform } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  

  uid: String;
  user = {} as User;

  constructor(
    private afAuth:AngularFireAuth,
    private afStore: AngularFirestore,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private platform: Platform,
    public router:Router) { }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  
  }


  ngOnInit() {
    this.getInfo();
  }

  CreatePrompt()
{
this.alertCtrl.create({
header: 'Sign Out?',
message: 'Are sure to sign out?',

buttons:[
  {
    text:"No",
    handler:(data)=>{
     // alert("user cancelled")
    }
  },
  {
    text:"Yes",
    handler:()=>{
      //alert("The user succesfully sign out");
      this.navCtrl.navigateRoot("login")

    }

  }

]
}).then((promptElement)=>{
promptElement.present();
})
}



  async getInfo() {
    //getting current user uid
    this.uid = (await this.afAuth.currentUser).uid;
    // console.log(this.uid);

    //getting current user's basic info
    this.afStore
      .doc(( "UserInfo/" + this.uid))
      .valueChanges()
      .subscribe((data) => {
        this.user.email=data['email'];
        this.user.password=data['password'];
        this.user.teacherid=data['teacherid'];
        this.user.teacherName=data['teacherName'];
        this.user.class=data['class'];
      });
    }
    
  }

  