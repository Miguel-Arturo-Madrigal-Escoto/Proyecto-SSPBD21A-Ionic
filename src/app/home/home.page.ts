/* eslint-disable no-trailing-spaces */
import { Component, OnInit } from '@angular/core';
import { DiscosService } from '../api/discos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  discos = [];
  fotografias = [];
  count = [];
  /*discos = [
    {
      titulo: "The Rewritten Memories",
      anio_produccion: 2021,
      nombre_artistas: [
        "John Legend",
        "Yiruma"
      ],
      caratula: "https://storage.highresaudio.com/2021/03/26/dp74c7-therewritt-preview-m3.jpg"
    },
    {
      titulo: "From the Yellow Room",
      anio_produccion: 2003,
      nombre_artistas: [
        "John Legend",
        "Yiruma"
      ],
      caratula: "https://upload.wikimedia.org/wikipedia/en/e/eb/Yiruma_-_From_the_yellow_room_cover.jpg"
    }
  ]*/
  constructor(private discosService: DiscosService) {
    this.count = [];
    this.fotografias = [];
  }
  ngOnInit(){
    
    this.discosService.fotografias.subscribe(fotografias => {
      this.fotografias = fotografias;
    });
    let i = 0;
    this.discosService.discos.subscribe(discos => {
      this.discos = discos;
      this.count.push(i);
      i++;
    });
    
    this.discosService.getDiscos();
    this.discosService.getFotografias();
    
  }
  
  getUrl(v1: string){
    return this.fotografias[v1];
  }
}
