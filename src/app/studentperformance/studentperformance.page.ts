import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from './models/post.mode';
import { User } from '../registerstudent/models/user.mode';

@Component({
  selector: 'app-studentperformance',
  templateUrl: './studentperformance.page.html',
  styleUrls: ['./studentperformance.page.scss'],
})
export class StudentperformancePage implements OnInit {

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
      this.user.email = data["email"];     
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

    this.firestore.doc("5 CEMERLANG" + '/' + id + '/' + "curriculum" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.kelabsukan = data["kelabsukan"];
      this.posts.jawatankelabsukan = data["jawatankelabsukan"];
      this.posts.kehadirankelabsukan = data["kehadirankelabsukan"];
      this.posts.skorkelabsukan = data["skorkelabsukan"];
      this.posts.kelabpersatuan = data["kelabpersatuan"];
      this.posts.jawatankelabpersatuan = data["jawatankelabpersatuan"];
      this.posts.kehadirankelabpersatuan = data["kehadirankelabpersatuan"];
      this.posts.skorkelabpersatuan = data["skorkelabpersatuan"];
      this.posts.kelabuniform = data["kelabuniform"];
      this.posts.jawatankelabuniform = data["jawatankelabuniform"];
      this.posts.kehadirankelabuniform = data["kehadirankelabuniform"];
      this.posts.skorkelabuniform = data["skorkelabuniform"];

    });

    this.firestore.doc("5 CERDIK" + '/' + id + '/' + "curriculum" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.kelabsukan = data["kelabsukan"];
      this.posts.jawatankelabsukan = data["jawatankelabsukan"];
      this.posts.kehadirankelabsukan = data["kehadirankelabsukan"];
      this.posts.skorkelabsukan = data["skorkelabsukan"];
      this.posts.kelabpersatuan = data["kelabpersatuan"];
      this.posts.jawatankelabpersatuan = data["jawatankelabpersatuan"];
      this.posts.kehadirankelabpersatuan = data["kehadirankelabpersatuan"];
      this.posts.skorkelabpersatuan = data["skorkelabpersatuan"];
      this.posts.kelabuniform = data["kelabuniform"];
      this.posts.jawatankelabuniform = data["jawatankelabuniform"];
      this.posts.kehadirankelabuniform = data["kehadirankelabuniform"];
      this.posts.skorkelabuniform = data["skorkelabuniform"];
    });

    this.firestore.doc("5 CERDAS" + '/' + id + '/' + "curriculum" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.kelabsukan = data["kelabsukan"];
      this.posts.jawatankelabsukan = data["jawatankelabsukan"];
      this.posts.kehadirankelabsukan = data["kehadirankelabsukan"];
      this.posts.skorkelabsukan = data["skorkelabsukan"];
      this.posts.kelabpersatuan = data["kelabpersatuan"];
      this.posts.jawatankelabpersatuan = data["jawatankelabpersatuan"];
      this.posts.kehadirankelabpersatuan = data["kehadirankelabpersatuan"];
      this.posts.skorkelabpersatuan = data["skorkelabpersatuan"];
      this.posts.kelabuniform = data["kelabuniform"];
      this.posts.jawatankelabuniform = data["jawatankelabuniform"];
      this.posts.kehadirankelabuniform = data["kehadirankelabuniform"];
      this.posts.skorkelabuniform = data["skorkelabuniform"];
    });

    this.firestore.doc("5 CEKAP" + '/' + id + '/' + "curriculum" + '/' + id )
    .valueChanges()
    .subscribe(data => {
      this.posts.kelabsukan = data["kelabsukan"];
      this.posts.jawatankelabsukan = data["jawatankelabsukan"];
      this.posts.kehadirankelabsukan = data["kehadirankelabsukan"];
      this.posts.skorkelabsukan = data["skorkelabsukan"];
      this.posts.kelabpersatuan = data["kelabpersatuan"];
      this.posts.jawatankelabpersatuan = data["jawatankelabpersatuan"];
      this.posts.kehadirankelabpersatuan = data["kehadirankelabpersatuan"];
      this.posts.skorkelabpersatuan = data["skorkelabpersatuan"];
      this.posts.kelabuniform = data["kelabuniform"];
      this.posts.jawatankelabuniform = data["jawatankelabuniform"];
      this.posts.kehadirankelabuniform = data["kehadirankelabuniform"];
      this.posts.skorkelabuniform = data["skorkelabuniform"];
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
      await this.firestore.collection(this.className + '/' + this.id + '/' + "FirstExam").doc(post.studentid).set(post);
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
