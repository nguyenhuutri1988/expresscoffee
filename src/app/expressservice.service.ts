import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpressserviceService {

  role="";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  dangkytaikhoan(data):Observable<any>  {
    const dangkytaikhoanAPI = `https://expressdemoserver.herokuapp.com/user`;
    return this.httpClient.post<any>(dangkytaikhoanAPI, data, this.httpOptions)
  }

  taomoidonhang(data):Observable<any>  {
    const dangkytaikhoanAPI = `https://expressdemoserver.herokuapp.com/createorder`;
    return this.httpClient.post<any>(dangkytaikhoanAPI, data, this.httpOptions)
  }

  quyennhanvien(data): Observable<any> {
    const quyennhanvienAPI = `https://expressdemoserver.herokuapp.com/authen`;
    return this.httpClient.post<any>(quyennhanvienAPI, data, this.httpOptions)
  }

  danhsachnhanvien(): Observable<any> {
    const danhsachnhanvienAPI = `https://expressdemoserver.herokuapp.com/getalluser`;
    return this.httpClient.get<any>(danhsachnhanvienAPI);
  }

  danhsachkienhang():Observable<any> {
    const danhsachkienhangAPI = `https://expressdemoserver.herokuapp.com/getallorder`;
    return this.httpClient.get<any>(danhsachkienhangAPI);
  }

  capnhatquyennhanvien(data): Observable<any> {
    const quyennhanvienAPI = `https://expressdemoserver.herokuapp.com/updaterole`;
    return this.httpClient.put<any>(quyennhanvienAPI, data, this.httpOptions)
  }

  theodoidonhang(data): Observable<any> {
    const theodoidonhangAPI = `https://expressdemoserver.herokuapp.com/getorder`;
    return this.httpClient.post<any>(theodoidonhangAPI, data, this.httpOptions)
  }

  capnhatdienthoai(data): Observable<any> {
    const capnhatdienthoaiAPI = `https://expressdemoserver.herokuapp.com/updatesodienthoai`;
    return this.httpClient.put<any>(capnhatdienthoaiAPI, data, this.httpOptions)
  }

  capnhatdonhang(data): Observable<any> {
    const capnhatdonhangAPI = `https://expressdemoserver.herokuapp.com/updatedonhang`;
    return this.httpClient.put<any>(capnhatdonhangAPI, data, this.httpOptions)
  }

  capnhatlichsudonhang(data): Observable<any> {
    const capnhatdonhangAPI = `https://expressdemoserver.herokuapp.com/updateorderhistory`;
    return this.httpClient.post<any>(capnhatdonhangAPI, data, this.httpOptions)
  }

  lichsudonhang(data): Observable<any> {
    const capnhatdonhangAPI = `https://expressdemoserver.herokuapp.com/getorderhistory`;
    return this.httpClient.post<any>(capnhatdonhangAPI, data, this.httpOptions)
  }

  // taodonhang(data): Observable<any> {
  //   const taodonhangAPI = `https://expressdemoserver.herokuapp.com/getallorder`;
  //   return this.httpClient.post<any>(taodonhangAPI, data, this.httpOptions)
  // }
}
