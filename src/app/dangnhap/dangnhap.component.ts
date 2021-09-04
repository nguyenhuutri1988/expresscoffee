import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ExpressserviceService } from '../expressservice.service';

@Component({
  selector: 'app-dangnhap',
  templateUrl: './dangnhap.component.html',
  styleUrls: ['./dangnhap.component.css']
})
export class DangnhapComponent implements OnInit {

  public loginForm:FormGroup;

  constructor(private formBuilder: FormBuilder,private router: Router, private expressserviceService:ExpressserviceService  ) { 
    this.loginForm = this.formBuilder.group({
      tendangnhap: '',
      matkhau: '',
    });
  }

role:any
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
  }

  onClick(){
    // if(this.loginForm.get('tendangnhap')?.value=="admin" && this.loginForm.get('matkhau')?.value=="123456"){
    //   localStorage.setItem("role","1")
      
    //   window.location.reload();
    //   this.router.navigate(['/']);
    // }
    // console.log(this.loginForm.get('tendangnhap')?.value)

    this.expressserviceService.quyennhanvien([this.loginForm.get('tendangnhap')?.value,this.loginForm.get('matkhau')?.value]).subscribe(val =>{

      
     
      this.expressserviceService.role = val[0].quyenhan
      localStorage.setItem("role",val[0].quyenhan)
      console.log(this.expressserviceService.role)

      this.router.navigateByUrl('trangchu')
    })
  }

}
