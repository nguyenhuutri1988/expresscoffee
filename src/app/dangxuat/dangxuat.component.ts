import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dangxuat',
  templateUrl: './dangxuat.component.html',
  styleUrls: ['./dangxuat.component.css']
})
export class DangxuatComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    localStorage.clear()
    this.router.navigateByUrl('trangchu')
  }

}
