import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-edit-data',
  templateUrl: './add-edit-data.page.html',
  styleUrls: ['./add-edit-data.page.scss'],
})
export class AddEditDataPage implements OnInit {
  isEdit:boolean;
  type:string;
  title:string;
  subTitle:string;
  amoutn:string;
  id:any;

  constructor(
    private route : ActivatedRoute
  ) {
    this.route.params.subscribe((data:any) => {
      console.log(data.type);
      if(data.type == 'add'){
        this.isEdit = false;
      }else{
        this.isEdit = true;
      }
    })
   }


  ngOnInit() {
  }

}
