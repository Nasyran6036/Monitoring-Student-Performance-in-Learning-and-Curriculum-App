import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../insert3/models/post.mode';
import { User } from '../registerstudent/models/user.mode';

@Component({
  selector: 'app-edit-student3',
  templateUrl: './edit-student3.page.html',
  styleUrls: ['./edit-student3.page.scss'],
})
export class EditStudent3Page implements OnInit {

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
    

    this.firestore.doc("5 CEMERLANG" + '/' + id + '/' + "FinalExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM3 = data["BM3"];
      this.posts.BI3 = data["BI3"];
      this.posts.PI3 = data["PI3"];
      this.posts.MT3 = data["MT3"];
      this.posts.SJH3 = data["SJH3"];
      this.posts.AM3 = data["AM3"];
      this.posts.FZ3 = data["FZ3"];
      this.posts.BIO3 = data["BIO3"];
      this.posts.KM3 = data["KM3"];
      this.posts.AC3 = data["AC3"];
      this.posts.BS3 = data["BS3"];
      this.posts.SV3 = data["SV3"];
      this.posts.GEO3 = data["GEO3"];

    });

    this.firestore.doc("5 CERDIK" + '/' + id + '/' + "FinalExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM3 = data["BM3"];
      this.posts.BI3 = data["BI3"];
      this.posts.PI3 = data["PI3"];
      this.posts.MT3 = data["MT3"];
      this.posts.SJH3 = data["SJH3"];
      this.posts.AM3 = data["AM3"];
      this.posts.FZ3 = data["FZ3"];
      this.posts.BIO3 = data["BIO3"];
      this.posts.KM3 = data["KM3"];
      this.posts.AC3 = data["AC3"];
      this.posts.BS3 = data["BS3"];
      this.posts.SV3 = data["SV3"];
      this.posts.GEO3 = data["GEO3"];
    });

    this.firestore.doc("5 CERDAS" + '/' + id + '/' + "FinalExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM3 = data["BM3"];
      this.posts.BI3 = data["BI3"];
      this.posts.PI3 = data["PI3"];
      this.posts.MT3 = data["MT3"];
      this.posts.SJH3 = data["SJH3"];
      this.posts.AM3 = data["AM3"];
      this.posts.FZ3 = data["FZ3"];
      this.posts.BIO3 = data["BIO3"];
      this.posts.KM3 = data["KM3"];
      this.posts.AC3 = data["AC3"];
      this.posts.BS3 = data["BS3"];
      this.posts.SV3 = data["SV3"];
      this.posts.GEO3 = data["GEO3"];
    });

    this.firestore.doc("5 CEKAP" + '/' + id + '/' + "FinalExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM3 = data["BM3"];
      this.posts.BI3 = data["BI3"];
      this.posts.PI3 = data["PI3"];
      this.posts.MT3 = data["MT3"];
      this.posts.SJH3 = data["SJH3"];
      this.posts.AM3 = data["AM3"];
      this.posts.FZ3 = data["FZ3"];
      this.posts.BIO3 = data["BIO3"];
      this.posts.KM3 = data["KM3"];
      this.posts.AC3 = data["AC3"];
      this.posts.BS3 = data["BS3"];
      this.posts.SV3 = data["SV3"];
      this.posts.GEO3 = data["GEO3"];
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
 

    if(!this.posts.BM3){
      this.showToast("Enter Bahasa Melayu");
      return false;
    }

    if(!this.posts.BI3){
      this.showToast("Enter English");
      return false;
    }

    if(!this.posts.MT3){
      this.showToast("Enter Mathematics");
      return false;
    }
    if(!this.posts.SJH3){
      this.showToast("Enter Sejarah");
      return false;
    }

    if(!this.posts.PI3){
      this.showToast("Enter Pendidikan Islam");
      return false;
    }

    if(!this.posts.AM3){

    }

    if(!this.posts.FZ3){
    
    }

    if(!this.posts.KM3){

    }

    if(!this.posts.BIO3){
   
    }

    if(!this.posts.AC3){
 
    }

    if(!this.posts.BS3){
  
    }

    if(!this.posts.SV3){
  
    }

    if(!this.posts.GEO3){
     
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

