import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vanchuyenduongbien',
  templateUrl: './vanchuyenduongbien.component.html',
  styleUrls: ['./vanchuyenduongbien.component.css']
})
export class VanchuyenduongbienComponent implements OnInit {

  constructor() { }
role:any
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
  }

}
