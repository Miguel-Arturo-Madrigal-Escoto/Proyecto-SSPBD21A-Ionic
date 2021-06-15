import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DiscosService {
  discos = new Subject<any[]>();
  fotografias = new Subject<any[]>();

  constructor(private http: HttpClient) {
    this.getDiscos();
    this.getFotografias();
  }

  getDiscos(){
    this.http.get<any[]>('/api/v1/albums').subscribe(data => { this.discos.next(data); });
  }
  getFotografias(){
    this.http.get<any[]>('/api/v1/fotografias').subscribe(data => { this.fotografias.next(data); });
  }

}
