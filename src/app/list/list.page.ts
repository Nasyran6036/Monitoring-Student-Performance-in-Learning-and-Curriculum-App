import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { LoadingController, ToastController} from '@ionic/angular';
import { User } from '../register/models/user.mode';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  user = {} as User;
  posts: any;
  uid:string;
  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private firestore: AngularFirestore,
    private auth:AngularFireAuth
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getPosts();
  }
  
  async getPosts(){

    this.uid = (await this.auth.currentUser).uid;
    this.firestore.doc("UserInfo/" + this.uid)
    .valueChanges()
    .subscribe((data)=>{
     this.user.class=data['class'];
    });



    //show loader
    let loader = await this.loadingCtrl.create({
      message: "Please wait..."
    });
    loader.present();
  
 
   
    try {
    this.firestore
    .collection("StudentInfo")
    .snapshotChanges()
    .subscribe(data => { 
      this.posts = data.map(e => {
        return {
          id: e.payload.doc.id,
          studentid: e.payload.doc.data()["studentid"],
          email: e.payload.doc.data()["email"],
          password: e.payload.doc.data()["password"],
          studentName: e.payload.doc.data()["studentName"],
          teacherName: e.payload.doc.data()["teacherName"],
          class: e.payload.doc.data()["class"],   
        };
      });
  
      loader.dismiss();
    });
    
    } catch(e){
    this.showToast(e);
  
    }
  }
  
  async deletePost(id: string){
  //show loader
  let loader = this.loadingCtrl.create({
  message: "Please wait..."
  });
  (await loader).present();
  
  await this.firestore.doc("5CEMERLANG/" + id).delete();
  
  //dismiss loader
  (await loader).dismiss();
  }
  
  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    }).then(toastData => toastData.present());
  }
  }
  
