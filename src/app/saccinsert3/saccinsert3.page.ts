import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from './models/post.mode';

@Component({
  selector: 'app-saccinsert3',
  templateUrl: './saccinsert3.page.html',
  styleUrls: ['./saccinsert3.page.scss'],
})
export class Saccinsert3Page implements OnInit {
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
      await this.firestore.collection("SAINSACC3").add(post);
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

    if(!this.post.AM3){
      this.showToast("Enter Additional Mathematics");
      return false;
    }

    if(!this.post.FZ3){
      this.showToast("Enter Physics");
      return false;
    }

    if(!this.post.KM3){
      this.showToast("Enter Chemistry");
      return false;
    }

    if(!this.post.ACC3){
      this.showToast("Enter Account");
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

