import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from './models/post.mode';

@Component({
  selector: 'app-pinsert2',
  templateUrl: './pinsert2.page.html',
  styleUrls: ['./pinsert2.page.scss'],
})
export class Pinsert2Page implements OnInit {
  post = {} as Post;
  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) { }

  ngOnInit() {
  }

  async createPost(post: Post){
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection("PERNIAGAAN2").add(post);
    } catch(e){
      this.showToast(e);
    }
    //dismiss loader
    (await loader).dismiss();

    //redirect to home page
    this.navCtrl.navigateRoot("home");
    }
  }
  
  formValidation(){
    if(!this.post.studentid){
      this.showToast("Enter ID");
      return false;
    }

    if(!this.post.BM2){
      this.showToast("Enter Bahasa Melayu");
      return false;
    }

    if(!this.post.BI2){
      this.showToast("Enter English");
      return false;
    }

    if(!this.post.MT2){
      this.showToast("Enter Mathematics");
      return false;
    }
    if(!this.post.SJH2){
      this.showToast("Enter Sejarah");
      return false;
    }

    if(!this.post.PI2){
      this.showToast("Enter Pendidikan Islam");
      return false;
    }


    if(!this.post.SENI2){
      this.showToast("Enter Seni");
      return false;
    }

    if(!this.post.PER2){
      this.showToast("Enter Perniagaan");
      return false;
    }


    return true;
  }

  showToast (message:string){
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
    .then(toastData => toastData.present());
  }}
