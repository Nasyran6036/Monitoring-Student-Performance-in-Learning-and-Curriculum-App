import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../registerstudent/models/user.mode';
import { Post } from './models/post.mode';


@Component({
  selector: 'app-insert',
  templateUrl: './insert.page.html',
  styleUrls: ['./insert.page.scss'],
})
export class InsertPage implements OnInit {
  post = {} as Post;
  user = {} as User;
  id: any;
  className : string;

  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController
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
      await this.firestore.collection(this.className + '/' + this.id + '/' + "FirstExam").doc(this.id).set(post);
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

    }

    if(!this.post.FZ1){
    
    }

    if(!this.post.KM1){

    }

    if(!this.post.BIO1){
   
    }

    if(!this.post.AC1){
 
    }

    if(!this.post.BS1){
  
    }

    if(!this.post.SV1){
  
    }

    if(!this.post.GEO1){
     
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
