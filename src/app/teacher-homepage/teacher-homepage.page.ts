import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-teacher-homepage',
  templateUrl: './teacher-homepage.page.html',
  styleUrls: ['./teacher-homepage.page.scss'],
})
export class TeacherHomepagePage implements OnInit {

  constructor(public afAuth: AngularFireAuth,) { }

  option = {
    slidesPerView: 1.5,
    centeredSlides: true,
    loop: true,
    spaceBetween: 10,
    // autoplay:true,
  
  }

  ngOnInit() {
  }
}
