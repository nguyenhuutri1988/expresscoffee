import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExpressserviceService } from '../expressservice.service';

@Component({
  selector: 'app-taomoikienhang',
  templateUrl: './taomoikienhang.component.html',
  styleUrls: ['./taomoikienhang.component.css']
})
export class TaomoikienhangComponent implements OnInit {
  currentDate = new Date();
  khachhangnhapthongtin: any
  public taomoikienhangForm: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private expressserviceService: ExpressserviceService) {
    this.taomoikienhangForm = this.formBuilder.group({
      tennguoigui: '',
      fbnguoigui: '',
      diachinguoigui: '',
      dienthoainguoigui: '',
      tennguoinhan: '',
      dienthoainguoinhan: '',
      diachinguoinhan: '',
      madonhang: '',
      hinhthucthanhtoan: '',
      thuho: '',
      trongluong: '',
      giatien: '',
      phuthu: '',
      tongtien: '',
      giamgia: '',
      dathanhtoan: '',
      tennhanvien: '',
      trangthaidonhang: '',
      ghichu: '',
      hinhthucvanchuyen:''
    });
  }

  thuho = ""
  dathanhtoan = ""
role:any
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
    this.khachhangnhapthongtin = localStorage.getItem("role")
  }

  onClick() {
    if (this.taomoikienhangForm.get('thuho')?.value == true) { this.thuho = "true" } else { this.thuho == "false" }
    if (this.taomoikienhangForm.get('dathanhtoan')?.value == true) { this.dathanhtoan = "true" } else { this.dathanhtoan == "false" }

    console.log([
      this.taomoikienhangForm.get('madonhang')?.value,
      this.taomoikienhangForm.get('tennguoigui')?.value,
      this.taomoikienhangForm.get('diachinguoigui')?.value,
      this.taomoikienhangForm.get('dienthoainguoigui')?.value,
      this.taomoikienhangForm.get('fbnguoigui')?.value,
      this.taomoikienhangForm.get('tennguoinhan')?.value,
      this.taomoikienhangForm.get('dienthoainguoinhan')?.value,
      this.taomoikienhangForm.get('diachinguoinhan')?.value,
      this.taomoikienhangForm.get('hinhthucthanhtoan')?.value,
      this.thuho,
      this.taomoikienhangForm.get('tennhanvien')?.value,
      this.taomoikienhangForm.get('trongluong')?.value,
      this.taomoikienhangForm.get('giatien')?.value,
      this.taomoikienhangForm.get('phuthu')?.value,
      this.taomoikienhangForm.get('tongtien')?.value,
      this.dathanhtoan,
      this.currentDate.toString(),
      "datiepnhantaikhonhatban",
      this.taomoikienhangForm.get('ghichu')?.value,
      this.khachhangnhapthongtin,
      this.taomoikienhangForm.get('giamgia')?.value,
      this.taomoikienhangForm.get('hinhthucvanchuyen')?.value,
    ])



    this.expressserviceService.capnhatlichsudonhang(
      [
        this.taomoikienhangForm.get('madonhang')?.value,
        this.taomoikienhangForm.get('dienthoainguoigui')?.value,
        this.currentDate.toString(),
        "datiepnhantaikhonhatban",
        this.taomoikienhangForm.get('ghichu')?.value
      ]
    )
      .subscribe(data => {

        console.log("POST Request is successful ", data);
      },
        error => {console.log("Error", error);

        }) 



    this.expressserviceService.taomoidonhang(
      [
        this.taomoikienhangForm.get('madonhang')?.value,
        this.taomoikienhangForm.get('tennguoigui')?.value,
        this.taomoikienhangForm.get('diachinguoigui')?.value,
        this.taomoikienhangForm.get('dienthoainguoigui')?.value,
        this.taomoikienhangForm.get('fbnguoigui')?.value,
        this.taomoikienhangForm.get('tennguoinhan')?.value,
        this.taomoikienhangForm.get('dienthoainguoinhan')?.value,
        this.taomoikienhangForm.get('diachinguoinhan')?.value,
        this.taomoikienhangForm.get('hinhthucthanhtoan')?.value,
        this.thuho,
        this.taomoikienhangForm.get('tennhanvien')?.value,
        this.taomoikienhangForm.get('trongluong')?.value,
        this.taomoikienhangForm.get('giatien')?.value,
        this.taomoikienhangForm.get('phuthu')?.value,
        this.taomoikienhangForm.get('tongtien')?.value,
        this.dathanhtoan,
        this.currentDate.toString(),
        "datiepnhantaikhonhatban",
        this.taomoikienhangForm.get('ghichu')?.value,
        this.khachhangnhapthongtin,
        this.taomoikienhangForm.get('giamgia')?.value,
        this.taomoikienhangForm.get('hinhthucvanchuyen')?.value,
      ]
    )
      .subscribe(data => {
        alert("Tạo Mới Đơn Hàng Thành Công!!!");

        console.log("POST Request is successful ", data);
        this.router.navigateByUrl('danhsachkienhang')
      },
        error => {
          alert("Tạo Mới Đơn Hàng Không Thành Công!!! Vui Lòng Kiểm Tra Mã Đơn Hàng");
          console.log("Error", error);

        })

        
  }

}
