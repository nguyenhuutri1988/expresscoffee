import { Component, OnInit } from '@angular/core';
import { ExpressserviceService } from '../expressservice.service';

@Component({
  selector: 'app-danhsachkienhang',
  templateUrl: './danhsachkienhang.component.html',
  styleUrls: ['./danhsachkienhang.component.css']
})
export class DanhsachkienhangComponent implements OnInit {

  constructor(private expressserviceService: ExpressserviceService) { }
listOrder:any=[]
role:any
  ngOnInit(): void {
    this.role=localStorage.getItem('role')
    this.expressserviceService.danhsachkienhang().subscribe(val =>{

      
     
      this.listOrder = val

      
    })
  }

}
