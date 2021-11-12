import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { Post } from '../insert4/models/post.mode';
import { User } from '../registerstudent/models/user.mode';

@Component({
  selector: 'app-edit-student4',
  templateUrl: './edit-student4.page.html',
  styleUrls: ['./edit-student4.page.scss'],
})
export class EditStudent4Page implements OnInit {

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

        console.log(this.user.studentid);
        console.log(this.user.studentName);

    //dismiss loader
    (await loader).dismiss();
    }


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
      await this.firestore.collection(this.className + '/' + this.id + '/' + "curriculum").doc(this.id).set(post);
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
 

    if(!this.posts.studentid){
      this.showToast("Enter ID");
      return false;
    }

    if(!this.posts.kelabsukan){
      this.showToast("Enter Kelab Sukan");
      return false;
    }

    if(!this.posts.jawatankelabsukan){
      this.showToast("Enter Jawatan Kelab Sukan");
      return false;
    }

    if(!this.posts.kehadirankelabsukan){
      this.showToast("Enter Kehadiran Kelab Sukan");
      return false;
    }
    if(!this.posts.skorkelabsukan){
      this.showToast("Enter Skor Kelab Sukan");
      return false;
    }

    if(!this.posts.kelabpersatuan){
      this.showToast("Enter Kelab Persatuan");
      return false;
    }

    if(!this.posts.jawatankelabpersatuan){
      this.showToast("Enter Jawatan Kelab Persatuan");
      return false;
    }

    if(!this.posts.kehadirankelabpersatuan){
      this.showToast("Enter Kehadiran Kelab Persatuan");
      return false;
    }

    if(!this.posts.skorkelabpersatuan){
      this.showToast("Enter Skor Kelab Persatuan");
      return false;
    }

    if(!this.posts.kelabuniform){
      this.showToast("Enter Kelab Uniform");
      return false;
    }

    if(!this.posts.jawatankelabuniform){
      this.showToast("Enter Jawatan Kelab Uniform");
      return false;
    }

    if(!this.posts.kehadirankelabuniform){
      this.showToast("Enter Kehadiran Kelab Uniform");
      return false;
    }

    if(!this.posts.skorkelabuniform){
      this.showToast("Enter Skor Kelab Uniform");
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


