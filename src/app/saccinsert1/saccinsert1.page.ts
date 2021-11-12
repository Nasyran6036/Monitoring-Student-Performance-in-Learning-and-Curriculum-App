import { Component, OnInit } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from './models/post.mode';


@Component({
  selector: 'app-saccinsert1',
  templateUrl: './saccinsert1.page.html',
  styleUrls: ['./saccinsert1.page.scss'],
})
export class Saccinsert1Page implements OnInit {
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
      await this.firestore.collection("SAINSACC1").add(post);
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

    if(!this.post.BM1){
      this.showToast("Enter Bahasa Melayu");
      return false;
    }

    if(!this.post.BI1){
      this.showToast("Enter English");
      return false;
    }

    if(!this.post.MT1){
      this.showToast("Enter Mathematics");
      return false;
    }
    if(!this.post.SJH1){
      this.showToast("Enter Sejarah");
      return false;
    }

    if(!this.post.PI1){
      this.showToast("Enter Pendidikan Islam");
      return false;
    }

    if(!this.post.AM1){
      this.showToast("Enter Additional Mathematics");
      return false;
    }

    if(!this.post.FZ1){
      this.showToast("Enter Physics");
      return false;
    }

    if(!this.post.KM1){
      this.showToast("Enter Chemistry");
      return false;
    }

    if(!this.post.ACC1){
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
