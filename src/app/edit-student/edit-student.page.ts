import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../insert/models/post.mode';
import { User } from '../registerstudent/models/user.mode';


@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.page.html',
  styleUrls: ['./edit-student.page.scss'],
})
export class EditStudentPage implements OnInit {

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
    

    this.firestore.doc("5 CEMERLANG" + '/' + id + '/' + "FirstExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM1 = data["BM1"];
      this.posts.BI1 = data["BI1"];
      this.posts.PI1 = data["PI1"];
      this.posts.MT1 = data["MT1"];
      this.posts.SJH1 = data["SJH1"];
      this.posts.AM1 = data["AM1"];
      this.posts.FZ1 = data["FZ1"];
      this.posts.BIO1 = data["BIO1"];
      this.posts.KM1 = data["KM1"];
      this.posts.AC1 = data["AC1"];
      this.posts.BS1 = data["BS1"];
      this.posts.SV1 = data["SV1"];
      this.posts.GEO1 = data["GEO1"];

    });

    this.firestore.doc("5 CERDIK" + '/' + id + '/' + "FirstExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM1 = data["BM1"];
      this.posts.BI1 = data["BI1"];
      this.posts.PI1 = data["PI1"];
      this.posts.MT1 = data["MT1"];
      this.posts.SJH1 = data["SJH1"];
      this.posts.AM1 = data["AM1"];
      this.posts.FZ1 = data["FZ1"];
      this.posts.KM1 = data["KM1"];
      this.posts.BIO1 = data["BIO1"];
      this.posts.AC1 = data["AC1"];
      this.posts.BS1 = data["BS1"];
      this.posts.SV1 = data["SV1"];
      this.posts.GEO1 = data["GEO1"];
    });

    this.firestore.doc("5 CERDAS" + '/' + id + '/' + "FirstExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM1 = data["BM1"];
      this.posts.BI1 = data["BI1"];
      this.posts.PI1 = data["PI1"];
      this.posts.MT1 = data["MT1"];
      this.posts.SJH1 = data["SJH1"];
      this.posts.AM1 = data["AM1"];
      this.posts.FZ1 = data["FZ1"];
      this.posts.KM1 = data["KM1"];
      this.posts.BIO1 = data["BIO1"];
      this.posts.AC1 = data["AC1"];
      this.posts.BS1 = data["BS1"];
      this.posts.SV1 = data["SV1"];
      this.posts.GEO1 = data["GEO1"];
    });

    this.firestore.doc("5 CEKAP" + '/' + id + '/' + "FirstExam" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.BM1 = data["BM1"];
      this.posts.BI1 = data["BI1"];
      this.posts.PI1 = data["PI1"];
      this.posts.MT1 = data["MT1"];
      this.posts.SJH1 = data["SJH1"];
      this.posts.AM1 = data["AM1"];
      this.posts.FZ1 = data["FZ1"];
      this.posts.KM1 = data["KM1"];
      this.posts.BIO1 = data["BIO1"];
      this.posts.AC1 = data["AC1"];
      this.posts.BS1 = data["BS1"];
      this.posts.SV1 = data["SV1"];
      this.posts.GEO1 = data["GEO1"];
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
 

    if(!this.posts.BM1){
      this.showToast("Enter Bahasa Melayu");
      return false;
    }

    if(!this.posts.BI1){
      this.showToast("Enter English");
      return false;
    }

    if(!this.posts.MT1){
      this.showToast("Enter Mathematics");
      return false;
    }
    if(!this.posts.SJH1){
      this.showToast("Enter Sejarah");
      return false;
    }

    if(!this.posts.PI1){
      this.showToast("Enter Pendidikan Islam");
      return false;
    }

    if(!this.posts.AM1){

    }

    if(!this.posts.FZ1){
    
    }

    if(!this.posts.KM1){

    }

    if(!this.posts.BIO1){
   
    }

    if(!this.posts.AC1){
 
    }

    if(!this.posts.BS1){
  
    }

    if(!this.posts.SV1){
  
    }

    if(!this.posts.GEO1){
     
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
