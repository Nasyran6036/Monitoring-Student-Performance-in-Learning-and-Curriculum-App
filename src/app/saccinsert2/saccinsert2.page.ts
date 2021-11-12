import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from './models/post.mode';

@Component({
  selector: 'app-saccinsert2',
  templateUrl: './saccinsert2.page.html',
  styleUrls: ['./saccinsert2.page.scss'],
})
export class Saccinsert2Page implements OnInit {
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
      await this.firestore.collection("SAINSACC2").add(post);
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

    if(!this.post.AM2){
      this.showToast("Enter Additional Mathematics");
      return false;
    }

    if(!this.post.FZ2){
      this.showToast("Enter Physics");
      return false;
    }

    if(!this.post.KM2){
      this.showToast("Enter Chemistry");
      return false;
    }

    if(!this.post.ACC2){
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

