import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baogiachitiet',
  templateUrl: './baogiachitiet.component.html',
  styleUrls: ['./baogiachitiet.component.css']
})
export class BaogiachitietComponent implements OnInit {

  constructor() { }
role:any
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
  }

}
