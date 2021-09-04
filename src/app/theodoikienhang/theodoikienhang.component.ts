import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpressserviceService } from '../expressservice.service';

@Component({
  selector: 'app-theodoikienhang',
  templateUrl: './theodoikienhang.component.html',
  styleUrls: ['./theodoikienhang.component.css']
})
export class TheodoikienhangComponent implements OnInit {
  public timkiemForm: FormGroup;
  lichsudonhang:any=[]
  constructor(private changeDetectorRefs: ChangeDetectorRef,private formBuilder: FormBuilder,private expressserviceService:ExpressserviceService) {
    this.timkiemForm = this.formBuilder.group({
      madonhang: ''
    });
   }
role:any
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
  }

  onClick(){
    this.expressserviceService.lichsudonhang([this.timkiemForm.get("madonhang")?.value]).subscribe( data => {
      this.lichsudonhang=data
      console.log("POST Request is successful ", data);
     this.ngOnInit()
    },
    error => {

      console.log("Error", error);

    })
  }

}
