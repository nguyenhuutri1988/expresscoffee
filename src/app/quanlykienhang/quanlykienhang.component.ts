import { Component, OnInit } from '@angular/core';
import { ExpressserviceService } from '../expressservice.service';

@Component({
  selector: 'app-quanlykienhang',
  templateUrl: './quanlykienhang.component.html',
  styleUrls: ['./quanlykienhang.component.css']
})
export class QuanlykienhangComponent implements OnInit {

listOrder:any=[]

  constructor(private expressserviceService: ExpressserviceService) { }
role:any
  ngOnInit(): void {

    this.role=localStorage.getItem('role')

  }

}
