import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from './models/post.mode';

@Component({
  selector: 'app-pinsert3',
  templateUrl: './pinsert3.page.html',
  styleUrls: ['./pinsert3.page.scss'],
})
export class Pinsert3Page implements OnInit {
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
      await this.firestore.collection("PERNIAGAAN3").add(post);
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

    if(!this.post.BM3){
      this.showToast("Enter Bahasa Melayu");
      return false;
    }

    if(!this.post.BI3){
      this.showToast("Enter English");
      return false;
    }

    if(!this.post.MT3){
      this.showToast("Enter Mathematics");
      return false;
    }
    if(!this.post.SJH3){
      this.showToast("Enter Sejarah");
      return false;
    }

    if(!this.post.PI3){
      this.showToast("Enter Pendidikan Islam");
      return false;
    }


    if(!this.post.SENI3){
      this.showToast("Enter Seni");
      return false;
    }

    if(!this.post.PER3){
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

