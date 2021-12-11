import { NetflixModel, Hero, Nav,Films } from './models/netflix.model';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {
  public netflixModel: NetflixModel;
  public terrorFilms!: Films;
  public scifiFilms!:Films;
  constructor() {
    this.netflixModel = {
      nav: {
        logo: {
          src:'../../../assets/LOGO/2560px-Netflix_2015_logo.svg.png',
          alt:"Logo Netflix"
        }
      },
      hero: {
        title:'Top 10',
        imageGallery:[
          {
            src:'../../../assets/Top10/1-papel.webp',
            alt:'La Casa de Papel'
          },
          {
            src:'../../../assets/Top10/2-reina.webp',
            alt:'La reina'
          },
          {
            src:'../../../assets/Top10/3-titanes.webp',
            alt:'Titanes'
          },
          {
            src:'../../../assets/Top10/4-lostinspace.webp',
            alt:'Lost in the space'
          },
          {
            src:'../../../assets/Top10/5-dondecaben.webp',
            alt:'Donde caben dos'
          },
          {
            src:'../../../assets/Top10/6-aquinohay.webp',
            alt:'Aquí no hay quien viva'
          },
          {
            src:'../../../assets/Top10/7-blacklist.webp',
            alt:'Blacklist'
          },
          {
            src:'../../../assets/Top10/8-ricos.webp',
            alt:'Ricos y Mimados'
          },
          {
            src:'../../../assets/Top10/9-poder.webp',
            alt:'El poder del Perro'
          },
          {
            src:'../../../assets/Top10/10-gooddoctor.webp',
            alt:'Good Doctor'
          }
        ]
       },
      films: {
        title:'',
        imageGallery:[
          {
            src:'',
            alt:''
          }
        ]
      }
    }

    this.terrorFilms = {
      title:'',
        imageGallery:[
          {
            src:'',
            alt:''
          }
        ]
    
      // }
    }

    this.scifiFilms = {
      title:'',
      imageGallery:[
        {
          src:'',
          alt:''
        }
      ]
    }

   }

  

  ngOnInit(): void {
  }

}
