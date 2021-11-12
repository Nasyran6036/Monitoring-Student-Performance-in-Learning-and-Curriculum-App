import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
import { User } from '../registerstudent/models/user.mode';
import { Post } from './models/post.mode';

@Component({
  selector: 'app-insert4',
  templateUrl: './insert4.page.html',
  styleUrls: ['./insert4.page.scss'],
})
export class Insert4Page implements OnInit {
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
    if(!this.post.studentid){
      this.showToast("Enter ID");
      return false;
    }

    if(!this.post.kelabsukan){
      this.showToast("Enter Kelab Sukan");
      return false;
    }

    if(!this.post.jawatankelabsukan){
      this.showToast("Enter Jawatan Kelab Sukan");
      return false;
    }

    if(!this.post.kehadirankelabsukan){
      this.showToast("Enter Kehadiran Kelab Sukan");
      return false;
    }
    if(!this.post.skorkelabsukan){
      this.showToast("Enter Skor Kelab Sukan");
      return false;
    }

    if(!this.post.kelabpersatuan){
      this.showToast("Enter Kelab Persatuan");
      return false;
    }

    if(!this.post.jawatankelabpersatuan){
      this.showToast("Enter Jawatan Kelab Persatuan");
      return false;
    }

    if(!this.post.kehadirankelabpersatuan){
      this.showToast("Enter Kehadiran Kelab Persatuan");
      return false;
    }

    if(!this.post.skorkelabpersatuan){
      this.showToast("Enter Skor Kelab Persatuan");
      return false;
    }

    if(!this.post.kelabuniform){
      this.showToast("Enter Kelab Uniform");
      return false;
    }

    if(!this.post.jawatankelabuniform){
      this.showToast("Enter Jawatan Kelab Uniform");
      return false;
    }

    if(!this.post.kehadirankelabuniform){
      this.showToast("Enter Kehadiran Kelab Uniform");
      return false;
    }

    if(!this.post.skorkelabuniform){
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
