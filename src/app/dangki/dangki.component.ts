import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpressserviceService } from '../expressservice.service';

@Component({
  selector: 'app-dangki',
  templateUrl: './dangki.component.html',
  styleUrls: ['./dangki.component.css']
})
export class DangkiComponent implements OnInit {

  public dangkyForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private expressserviceService: ExpressserviceService) {
    this.dangkyForm = this.formBuilder.group({
      sodienthoaidangky: '',
      tendangky: '',
      matkhau: '',
      matkhau1: '',
      error:'',
    });
  }
  role: any
  error = ""
  ngOnInit(): void {
    this.role = localStorage.getItem('role')
  }

  onClick() {
    if (this.dangkyForm.get("matkhau")?.value !== this.dangkyForm.get("matkhau1")?.value) {   alert( "Mật khẩu xác nhận không đúng !!!") }
    if (this.error == '') {
      this.expressserviceService.dangkytaikhoan([this.dangkyForm.get("sodienthoaidangky")?.value, this.dangkyForm.get("tendangky")?.value, this.dangkyForm.get("matkhau")?.value, '3']).subscribe(data => {
        alert("Đăng Ký Tài Khoản Thành Công!!! Vui Lòng Đăng Nhập");

        console.log("POST Request is successful ", data);
        this.router.navigateByUrl('dangnhap')
      },
        error => {

          console.log("Error", error);

        })
    }
  }
}
