import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanchuyenduongbay',
  templateUrl: './vanchuyenduongbay.component.html',
  styleUrls: ['./vanchuyenduongbay.component.css']
})
export class VanchuyenduongbayComponent implements OnInit {

  constructor() { }
role:any
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
  }

}
