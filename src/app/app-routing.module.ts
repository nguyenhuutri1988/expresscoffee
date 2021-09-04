import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaogiachitietComponent } from './baogiachitiet/baogiachitiet.component';
import { CapnhatdonhangComponent } from './capnhatdonhang/capnhatdonhang.component';
import { DangkiComponent } from './dangki/dangki.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangxuatComponent } from './dangxuat/dangxuat.component';
import { DanhsachkienhangComponent } from './danhsachkienhang/danhsachkienhang.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { QuanlytaikhoanComponent } from './quanlytaikhoan/quanlytaikhoan.component';
import { SliderbannerComponent } from './sliderbanner/sliderbanner.component';
import { TaomoikienhangComponent } from './taomoikienhang/taomoikienhang.component';
import { TheodoikienhangComponent } from './theodoikienhang/theodoikienhang.component';
import { TracuudonhangComponent } from './tracuudonhang/tracuudonhang.component';
import { VanchuyenduongbayComponent } from './vanchuyenduongbay/vanchuyenduongbay.component';
import { VanchuyenduongbienComponent } from './vanchuyenduongbien/vanchuyenduongbien.component';


const routes: Routes = [
  { path: '', component: SliderbannerComponent},
  { path: 'trangchu', component: SliderbannerComponent },
  { path: 'lienhe', component: LienheComponent },
  { path: 'baogiachitiet', component: BaogiachitietComponent },
  { path: 'taomoikienhang', component: TaomoikienhangComponent },
  { path: 'theodoikienhang', component: TheodoikienhangComponent },
  { path: 'vanchuyenduongbay', component: VanchuyenduongbayComponent },
  { path: 'vanchuyenduongbien', component: VanchuyenduongbienComponent },
  { path: 'dangnhap', component: DangnhapComponent },
  { path: 'dangky', component: DangkiComponent },
  { path: 'quanlytaikhoan', component: QuanlytaikhoanComponent },
  { path: 'danhsachkienhang', component: DanhsachkienhangComponent },
  { path: 'dangxuat', component: DangxuatComponent },
  { path: 'tracuu', component: TracuudonhangComponent },
  { path: 'capnhatdonhang', component:CapnhatdonhangComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
