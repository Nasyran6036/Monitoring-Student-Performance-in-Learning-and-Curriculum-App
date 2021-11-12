import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../registerstudent/models/user.mode';
import { Post } from './models/post.mode';


@Component({
  selector: 'app-insert3',
  templateUrl: './insert3.page.html',
  styleUrls: ['./insert3.page.scss'],
})
export class Insert3Page implements OnInit {
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
      await this.firestore.collection(this.className + '/' + this.id + '/' + "FinalExam").doc(this.id).set(post);
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

    if(!this.post.BIO3){
      this.showToast("Enter Biology");
      return false;
    }

    if(!this.post.AC3){
 
    }

    if(!this.post.BS3){
  
    }

    if(!this.post.SV3){
  
    }

    if(!this.post.GEO3){
     
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
