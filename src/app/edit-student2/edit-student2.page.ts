import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../insert2/models/post.mode';
import { User } from '../registerstudent/models/user.mode';

@Component({
  selector: 'app-edit-student2',
  templateUrl: './edit-student2.page.html',
  styleUrls: ['./edit-student2.page.scss'],
})
export class EditStudent2Page implements OnInit {

  posts = {} as Post;
  user = {} as User;
  id: any;
  className : string;
  getstudent:any;

  constructor(
    private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController,
    private afAuth: AngularFireAuth,
  ) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
    this.className = this.actRoute.snapshot.paramMap.get("class");
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

    (await loader).dismiss();
    

    this.firestore.doc("5 CEMERLANG" + '/' + id + '/' + "MidExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM2 = data["BM2"];
      this.posts.BI2 = data["BI2"];
      this.posts.PI2 = data["PI2"];
      this.posts.MT2 = data["MT2"];
      this.posts.SJH2 = data["SJH2"];
      this.posts.AM2 = data["AM2"];
      this.posts.FZ2 = data["FZ2"];
      this.posts.BIO2 = data["BIO2"];
      this.posts.KM2 = data["KM2"];
      this.posts.AC2 = data["AC2"];
      this.posts.BS2 = data["BS2"];
      this.posts.SV2 = data["SV2"];
      this.posts.GEO2 = data["GEO2"];

    });

    this.firestore.doc("5 CERDIK" + '/' + id + '/' + "MidExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM2 = data["BM2"];
      this.posts.BI2 = data["BI2"];
      this.posts.PI2 = data["PI2"];
      this.posts.MT2 = data["MT2"];
      this.posts.SJH2 = data["SJH2"];
      this.posts.AM2 = data["AM2"];
      this.posts.FZ2 = data["FZ2"];
      this.posts.KM2 = data["KM2"];
      this.posts.BIO2 = data["BIO2"];
      this.posts.AC2 = data["AC2"];
      this.posts.BS2 = data["BS2"];
      this.posts.SV2 = data["SV2"];
      this.posts.GEO2 = data["GEO2"];
    });

    this.firestore.doc("5 CERDAS" + '/' + id + '/' + "MidExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM2 = data["BM2"];
      this.posts.BI2 = data["BI2"];
      this.posts.PI2 = data["PI2"];
      this.posts.MT2 = data["MT2"];
      this.posts.SJH2 = data["SJH2"];
      this.posts.AM2 = data["AM2"];
      this.posts.FZ2 = data["FZ2"];
      this.posts.KM2 = data["KM2"];
      this.posts.BIO2 = data["BIO2"];
      this.posts.AC2 = data["AC2"];
      this.posts.BS2 = data["BS2"];
      this.posts.SV2 = data["SV2"];
      this.posts.GEO2 = data["GEO2"];
    });

    this.firestore.doc("5 CEKAP" + '/' + id + '/' + "MidExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM2 = data["BM2"];
      this.posts.BI2 = data["BI2"];
      this.posts.PI2 = data["PI2"];
      this.posts.MT2 = data["MT2"];
      this.posts.SJH2 = data["SJH2"];
      this.posts.AM2 = data["AM2"];
      this.posts.FZ2 = data["FZ2"];
      this.posts.KM2 = data["KM2"];
      this.posts.BIO2 = data["BIO2"];
      this.posts.AC2 = data["AC2"];
      this.posts.BS2 = data["BS2"];
      this.posts.SV2 = data["SV2"];
      this.posts.GEO2 = data["GEO2"];
    });

    (await loader).dismiss();

      // this.firestore.collection("5 CERDIK" + '/' + this.id + '/' + "FirstExam")
      //   .snapshotChanges()
      //   .subscribe(data => {
      //     this.getstudent = data.map(e => {
      //       if (e.payload.doc.data()["studentid"] !== null)
      //        {
      //         return {
      //           // studentid: e.payload.doc.id,
      //           studentid: e.payload.doc.data()["studentid"],
      //           BM1: e.payload.doc.data()["BM1"],
      //           BI1: e.payload.doc.data()["BI1"],
      //           PI1: e.payload.doc.data()["PI1"],
      //           MT1: e.payload.doc.data()["MT1"],
      //           SJH1: e.payload.doc.data()["SJH1"],
      //         };
      //       }
      //     });
      //   });
        console.log(this.user.studentid);
        console.log(this.user.studentName);

    //dismiss loader
    (await loader).dismiss();
    }

    //ionViewWillEnter() {
    //  this.getInfo();
    //}
    
    // async getInfo() {
    //   console.log(this.id); 
    //   console.log(this.className);
    //   this.firestore.collection("5 CERDIK" + '/' + this.id + '/' + "FirstExam")
    //     .snapshotChanges()
    //     .subscribe(data => {
    //       this.getstudent = data.map(e => {
    //         if (e.payload.doc.data()["studentid"] !== null) {
    //           return {
    //             studentid: e.payload.doc.id,
    //             BM1: e.payload.doc.data()["BM1"],
    //             BI1: e.payload.doc.data()["BI1"],
    //             PI1: e.payload.doc.data()["PI1"],
    //             MT1: e.payload.doc.data()["MT1"],
    //             SJH1: e.payload.doc.data()["SJH1"],
    //           };
    //         }
    //       });
    //     });

    //   }
    


  async createPost(post: Post){
    this.className = this.user.class;
    this.posts.studentid = this.user.studentid;
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
 

    if(!this.posts.BM2){
      this.showToast("Enter Bahasa Melayu");
      return false;
    }

    if(!this.posts.BI2){
      this.showToast("Enter English");
      return false;
    }

    if(!this.posts.MT2){
      this.showToast("Enter Mathematics");
      return false;
    }
    if(!this.posts.SJH2){
      this.showToast("Enter Sejarah");
      return false;
    }

    if(!this.posts.PI2){
      this.showToast("Enter Pendidikan Islam");
      return false;
    }

    if(!this.posts.AM2){

    }

    if(!this.posts.FZ2){
    
    }

    if(!this.posts.KM2){

    }

    if(!this.posts.BIO2){
   
    }

    if(!this.posts.AC2){
 
    }

    if(!this.posts.BS2){
  
    }

    if(!this.posts.SV2){
  
    }

    if(!this.posts.GEO2){
     
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

