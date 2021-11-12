import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { 
  LoadingController, 
  NavController, 
  ToastController } from '@ionic/angular';
import { User } from '../registerstudent/models/user.mode';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-registerstudent',
  templateUrl: './registerstudent.page.html',
  styleUrls: ['./registerstudent.page.scss'],
})
export class RegisterstudentPage implements OnInit {
  user = {} as User;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private afAuth: AngularFireAuth,
    private afStore: AngularFirestore,
    private navCtrl: NavController
  ) { }

  ngOnInit() { }


  async register(user: User){
    if(this.formValidation()){
      //show loader
      let loader = this.loadingCtrl.create({
        message: "Please wait..."
      });
      (await loader).present();

      try{
        
        await this.afAuth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data =>
          console.log(data));

          this.afStore.collection("StudentInfo").doc((await this.afAuth.currentUser).uid).set(user);

          //redirect to home page
          this.navCtrl.navigateRoot("loginstudent");
      } catch(e){
        this.showToast(e);
      }

      //dismiss loader
      (await loader).dismiss();

    }
  }

  formValidation(){
    if(!this.user.email){
      this.showToast("Enter email");
      return false;
    }

    if(!this.user.password){
      this.showToast("Enter password");
      return false;
    }

    if(!this.user.studentid){
      this.showToast("Enter student id");
      return false;
    }

    if(!this.user.studentName){
      this.showToast("Enter student name");
      return false;
    }

    if(!this.user.teacherName){
      this.showToast("Enter teacher monitor");
      return false;
    }

    if(!this.user.class){
      this.showToast("Enter class");
      return false;
    }



    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
   }

}

