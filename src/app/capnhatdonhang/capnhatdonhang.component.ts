import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExpressserviceService } from '../expressservice.service';

@Component({
  selector: 'app-capnhatdonhang',
  templateUrl: './capnhatdonhang.component.html',
  styleUrls: ['./capnhatdonhang.component.css']
})
export class CapnhatdonhangComponent implements OnInit {
  disable = false
  currentDate = new Date();
  khachhangnhapthongtin: any
  public capnhatkienhangForm: FormGroup;
  constructor(private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private expressserviceService: ExpressserviceService) {
    this.capnhatkienhangForm = this.formBuilder.group({
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
      hinhthucvanchuyen: ''
    });
  }

  thuho = ""
  dathanhtoan = ""
  role: any
  madonhang: any
  khachhangnhapthongtinhistory: any
  buttondisable = true
  lichsudonhangold: any
  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    if (this.role == 3 || this.role == '' || this.role == null) { this.khachhangnhapthongtin = '3' }
    if (this.role == 3 || this.role == '' || this.role == null) { this.disable = true }
    this.route.queryParams.subscribe(params =>
      this.madonhang = params['madonhang']
    )
    this.expressserviceService.theodoidonhang(
      [this.madonhang]
    )
      .subscribe(data => {
        this.lichsudonhangold = data[0].lichsudonhang
        this.khachhangnhapthongtinhistory = data[0].khachhangnhapthongtin
        console.log(this.khachhangnhapthongtinhistory, this.khachhangnhapthongtin)
        if (this.khachhangnhapthongtinhistory == '3' && this.khachhangnhapthongtin == '3') {
          this.buttondisable = false
          this.capnhatkienhangForm.disable()
        }
        this.capnhatkienhangForm.get('madonhang')?.setValue(data[0].madonhang);
        this.capnhatkienhangForm.get('madonhang')?.disable();
        this.capnhatkienhangForm.get('tennguoigui')?.setValue(data[0].tennguoigui);
        this.capnhatkienhangForm.get('diachinguoigui')?.setValue(data[0].diachinguoigui);
        this.capnhatkienhangForm.get('dienthoainguoigui')?.setValue(data[0].sdtnguoigui);
        this.capnhatkienhangForm.get('fbnguoigui')?.setValue(data[0].fbnguoigui);
        this.capnhatkienhangForm.get('tennguoinhan')?.setValue(data[0].tennguoinhan);
        this.capnhatkienhangForm.get('dienthoainguoinhan')?.setValue(data[0].sdtnguoinhan);
        this.capnhatkienhangForm.get('diachinguoinhan')?.setValue(data[0].diachinguoinhan);
        if (this.disable == true) {
          this.capnhatkienhangForm.get('hinhthucvanchuyen')?.disable();
          this.capnhatkienhangForm.get('hinhthucthanhtoan')?.disable();

          this.capnhatkienhangForm.get('phuthu')?.disable();
          this.capnhatkienhangForm.get('trongluong')?.disable();
          this.capnhatkienhangForm.get('giatien')?.disable();
          this.capnhatkienhangForm.get('tennhanvien')?.disable();
          this.capnhatkienhangForm.get('thuho')?.disable();
          this.capnhatkienhangForm.get('trangthaidonhang')?.disable();
          this.capnhatkienhangForm.get('ghichu')?.disable()
          this.capnhatkienhangForm.get('dathanhtoan')?.disable();
          this.capnhatkienhangForm.get('tongtien')?.disable();
          this.capnhatkienhangForm.get('giamgia')?.disable();
        }
        this.capnhatkienhangForm.get('hinhthucthanhtoan')?.setValue(data[0].phuongthucthanhtoan);

        this.capnhatkienhangForm.get('thuho')?.setValue(data[0].thuho);
        this.capnhatkienhangForm.get('tennhanvien')?.setValue(data[0].tennhanvien);
        this.capnhatkienhangForm.get('trongluong')?.setValue(data[0].trongluong);
        this.capnhatkienhangForm.get('giatien')?.setValue(data[0].giatien);
        this.capnhatkienhangForm.get('phuthu')?.setValue(data[0].phuthu);
        this.capnhatkienhangForm.get('tongtien')?.setValue(data[0].tongtien);
        this.capnhatkienhangForm.get('dathanhtoan')?.setValue(data[0].dathanhtoan);
        this.capnhatkienhangForm.get('ghichu')?.setValue(data[0].ghichu);
        this.capnhatkienhangForm.get('trangthaidonhang')?.setValue(data[0].lichsudonhang);
        this.capnhatkienhangForm.get('giamgia')?.setValue(data[0].giamgia);
        this.capnhatkienhangForm.get('hinhthucvanchuyen')?.setValue(data[0].hinhthucvanchuyen);



        console.log("POST Request is successful ", data);
        // this.router.navigateByUrl('danhsachkienhang')
      },
        error => {
          console.log("Error", error);

        })





  }

  onClick() {
    if (this.capnhatkienhangForm.get('thuho')?.value == true) { this.thuho = "true" } else { this.thuho == "false" }
    if (this.capnhatkienhangForm.get('dathanhtoan')?.value == true) { this.dathanhtoan = "true" } else { this.dathanhtoan == "false" }

    console.log([
      this.capnhatkienhangForm.get('madonhang')?.value,
      this.capnhatkienhangForm.get('tennguoigui')?.value,
      this.capnhatkienhangForm.get('diachinguoigui')?.value,
      this.capnhatkienhangForm.get('dienthoainguoigui')?.value,
      this.capnhatkienhangForm.get('fbnguoigui')?.value,
      this.capnhatkienhangForm.get('tennguoinhan')?.value,
      this.capnhatkienhangForm.get('dienthoainguoinhan')?.value,
      this.capnhatkienhangForm.get('diachinguoinhan')?.value,
      this.capnhatkienhangForm.get('hinhthucthanhtoan')?.value,
      this.thuho,
      this.capnhatkienhangForm.get('tennhanvien')?.value,
      this.capnhatkienhangForm.get('trongluong')?.value,
      this.capnhatkienhangForm.get('giatien')?.value,
      this.capnhatkienhangForm.get('phuthu')?.value,
      this.capnhatkienhangForm.get('tongtien')?.value,
      this.dathanhtoan,
      this.currentDate.toString(),
      this.capnhatkienhangForm.get('trangthaidonhang')?.value,
      this.capnhatkienhangForm.get('ghichu')?.value,
      this.khachhangnhapthongtin,
      this.capnhatkienhangForm.get('giamgia')?.value,
      this.capnhatkienhangForm.get('hinhthucvanchuyen')?.value,
    ])
    if (this.lichsudonhangold != this.capnhatkienhangForm.get('trangthaidonhang')?.value) {
      this.expressserviceService.capnhatlichsudonhang(
        [
          this.capnhatkienhangForm.get('madonhang')?.value,
          this.capnhatkienhangForm.get('dienthoainguoigui')?.value,
          this.currentDate.toString(),
          this.capnhatkienhangForm.get('trangthaidonhang')?.value,
          this.capnhatkienhangForm.get('ghichu')?.value
        ]
      )
        .subscribe(data => {

          console.log("POST Request is successful ", data);
        },
          error => {
            console.log("Error", error);

          })
    }

    this.expressserviceService.capnhatdonhang(
      [
        this.capnhatkienhangForm.get('tennguoigui')?.value,
        this.capnhatkienhangForm.get('diachinguoigui')?.value,
        this.capnhatkienhangForm.get('dienthoainguoigui')?.value,
        this.capnhatkienhangForm.get('fbnguoigui')?.value,
        this.capnhatkienhangForm.get('tennguoinhan')?.value,
        this.capnhatkienhangForm.get('dienthoainguoinhan')?.value,
        this.capnhatkienhangForm.get('diachinguoinhan')?.value,
        this.capnhatkienhangForm.get('hinhthucthanhtoan')?.value,
        this.thuho,
        this.capnhatkienhangForm.get('tennhanvien')?.value,
        this.capnhatkienhangForm.get('trongluong')?.value,
        this.capnhatkienhangForm.get('giatien')?.value,
        this.capnhatkienhangForm.get('phuthu')?.value,
        this.capnhatkienhangForm.get('tongtien')?.value,
        this.dathanhtoan,
        this.currentDate.toString(),
        this.capnhatkienhangForm.get('trangthaidonhang')?.value,
        this.capnhatkienhangForm.get('ghichu')?.value,
        this.khachhangnhapthongtin,
        this.capnhatkienhangForm.get('giamgia')?.value,
        this.capnhatkienhangForm.get('hinhthucvanchuyen')?.value,
        this.capnhatkienhangForm.get('madonhang')?.value
      ]
    )
      .subscribe(data => {
        alert("Cập Nhật Đơn Hàng Thành Công!!!");
        if (this.role == '1' || this.role == '2') { this.router.navigateByUrl('danhsachkienhang') }
        console.log("POST Request is successful ", data);
        // this.router.navigateByUrl('danhsachkienhang')
      },
        error => {
          alert("Cập Nhật Đơn Hàng Không Thành Công!!! Vui Lòng Liên Hệ Nhân Viên");
          console.log("Error", error);

        })
  }

}
