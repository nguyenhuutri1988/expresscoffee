import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExpressserviceService } from '../expressservice.service';

@Component({
  selector: 'app-tracuudonhang',
  templateUrl: './tracuudonhang.component.html',
  styleUrls: ['./tracuudonhang.component.css']
})
export class TracuudonhangComponent implements OnInit {

  constructor(private route: ActivatedRoute, private expressserviceService: ExpressserviceService) { }
  role: any
  madonhang:any
  sodienthoainguoigui:any
  ngOnInit(): void {
    this.role = localStorage.getItem('role')
    this.route.queryParams.subscribe( params =>
      this.madonhang = params['madonhang']
  )
  console.log(this.madonhang)
  }
  onClick() {
    console.log(this.sodienthoainguoigui,this.madonhang)
    this.expressserviceService.capnhatdienthoai([this.sodienthoainguoigui, this.madonhang]).subscribe(data => {
      alert("Cập Nhật Đơn Hàng Thành Công !!!");

      console.log("POST Request is successful ", data);
    },
      error => {

        alert("Cập Nhật Đơn  Không Thành Công !!! Vui Lòng Thử Lại Hoặc Liên Hệ Nhân Viên");
        console.log("Error", error);

      })

  }
}
