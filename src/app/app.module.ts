import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderbannerComponent } from './sliderbanner/sliderbanner.component';
import { FooterComponent } from './footer/footer.component';
import { BaogiachitietComponent } from './baogiachitiet/baogiachitiet.component';
import { LienheComponent } from './lienhe/lienhe.component';
import { TaomoikienhangComponent } from './taomoikienhang/taomoikienhang.component';
import { TheodoikienhangComponent } from './theodoikienhang/theodoikienhang.component';
import { VanchuyenduongbayComponent } from './vanchuyenduongbay/vanchuyenduongbay.component';
import { VanchuyenduongbienComponent } from './vanchuyenduongbien/vanchuyenduongbien.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkiComponent } from './dangki/dangki.component';
import { QuanlytaikhoanComponent } from './quanlytaikhoan/quanlytaikhoan.component';
import { QuanlykienhangComponent } from './quanlykienhang/quanlykienhang.component';
import { DanhsachkienhangComponent } from './danhsachkienhang/danhsachkienhang.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DangxuatComponent } from './dangxuat/dangxuat.component';
import { TracuudonhangComponent } from './tracuudonhang/tracuudonhang.component';
import { CapnhatdonhangComponent } from './capnhatdonhang/capnhatdonhang.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderbannerComponent,
    FooterComponent,
    BaogiachitietComponent,
    LienheComponent,
    TaomoikienhangComponent,
    TheodoikienhangComponent,
    VanchuyenduongbayComponent,
    VanchuyenduongbienComponent,
    DangnhapComponent,
    DangkiComponent,
    QuanlytaikhoanComponent,
    QuanlykienhangComponent,
    DanhsachkienhangComponent,
    DangxuatComponent,
    TracuudonhangComponent,
    CapnhatdonhangComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
