import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sliderbanner',
  templateUrl: './sliderbanner.component.html',
  styleUrls: ['./sliderbanner.component.css']
})
export class SliderbannerComponent implements OnInit {

  constructor() { }
role:any
madonhang:any
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
  }

}
