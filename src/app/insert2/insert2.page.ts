import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../registerstudent/models/user.mode';
import { Post } from './models/post.mode';

@Component({
  selector: 'app-insert2',
  templateUrl: './insert2.page.html',
  styleUrls: ['./insert2.page.scss'],
})
export class Insert2Page implements OnInit {
  post = {} as Post;
  user = {} as User;
  id: any;
  className : string;
  constructor(
    private actRoute: ActivatedRoute,
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController,
    private firestore: AngularFirestore
  ) { 
    this.id = this.actRoute.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string){
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();
  
    this.firestore.doc("StudentInfo/" + id)
    .valueChanges()
    .subscribe(data => {
      this.user.studentid = data["studentid"];
      this.user.studentName = data["studentName"];
      this.user.class = data["class"];
    });
    
    //dismiss loader
    (await loader).dismiss();
    }
    

  async createPost(post: Post){
    this.className = this.user.class;
    this.post.studentid = this.user.studentid;
    if(this.formValidation()) {
    //show loader
    let loader = this.loadingCtrl.create({
    message: "Please wait..."
    });
    (await loader).present();

    try{
      await this.firestore.collection(this.className + '/' + this.id + '/' + "MidExam").doc(this.id).set(post);
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

    if(!this.post.BIO2){
      this.showToast("Enter Biology");
      return false;
    }

    if(!this.post.AC2){
 
    }

    if(!this.post.BS2){
  
    }

    if(!this.post.SV2){
  
    }

    if(!this.post.GEO2){
     
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
