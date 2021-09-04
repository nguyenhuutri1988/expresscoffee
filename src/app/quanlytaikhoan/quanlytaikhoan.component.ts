import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ExpressserviceService } from '../expressservice.service';

@Component({
  selector: 'app-quanlytaikhoan',
  templateUrl: './quanlytaikhoan.component.html',
  styleUrls: ['./quanlytaikhoan.component.css']
})
export class QuanlytaikhoanComponent implements OnInit {
  public quanlytaikhoanForm: FormGroup;
  checked: any
  constructor(private formBuilder: FormBuilder, private expressserviceService: ExpressserviceService) {
    this.quanlytaikhoanForm = this.formBuilder.group({
      nhanvien: '',
    });
  }
role:any
  userData: any = []
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
    this.expressserviceService.danhsachnhanvien().subscribe(val => {



      this.userData = val


    })
  }

  onClick(e,sodienthoai) {
    console.log(e.target.checked);
    if (e.target.checked == true) {
      this.expressserviceService.capnhatquyennhanvien(['2', sodienthoai]).subscribe(data => {
        alert("Cập Nhật Quyền Nhân Viên Thành Công !!!");

        console.log("POST Request is successful ", data);
      },
        error => {

          console.log("Error", error);

        })
    }
    if (e.target.checked == false) {
      this.expressserviceService.capnhatquyennhanvien(['3', sodienthoai]).subscribe(data => {
        alert("Cập Nhật Quyền Nhân Viên Thành Công !!!");

        console.log("POST Request is successful ", data);
      },
        error => {

          console.log("Error", error);

        })
    }
  }

  checkValue(e) {
    // console.log(e.target.checked);
    // this.checked = e.target.checked
  }

}
