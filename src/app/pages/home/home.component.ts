import { NetflixModel, Nav,Films, Social, LinksSocial } from './models/netflix.model';
import { Component, OnInit,Input,  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})
export class HomeComponent implements OnInit {
  public netflixModel: NetflixModel;
  public terrorFilms!: Films;
  public scifiFilms!:Films;
  public dramaFilms!:Films;
  public comediaFilms!:Films;
  public social!:Social[];
  public linksSocial!: LinksSocial;
  constructor() {
    this.social = [
      {
        icoSocial:'https://svgsilh.com/svg/667456-ffffff.svg',
        linkSocial:'https://www.facebook.com'
      },
      {
        icoSocial:'https://svgsilh.com/svg/1562139-ffffff.svg',
        linkSocial:'https://www.instagram.com'
      },
      {
        icoSocial:'https://svgsilh.com/svg/38671-ffffff.svg',
        linkSocial:'https://www.twitter.com'
      },
      {
        icoSocial:'https://svgsilh.com/svg/1834016-ffffff.svg',
        linkSocial:'https://www.youtube.com'
      }
  ],
    this.netflixModel = {
      nav: {
        logo: {
          src:'../../../assets/LOGO/2560px-Netflix_2015_logo.svg.png',
          alt:"Logo Netflix"
        }
      },
      films: {
        title:'Las 10 más populares en España hoy',
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
          }
        ]
       },
    }

    this.terrorFilms = {
      title:'Películas de terror',
        imageGallery:[
          {
            src:'../../../assets/Terror/apostol.jpg',
            alt:'Apostol'
          },
          {
            src:'../../../assets/Terror/calleterror.jpg',
            alt:'La calle del terror 2'
          },
          {
            src:'../../../assets/Terror/infiernoagua.webp',
            alt:'Infierno bajo el agua'
          },
          {
            src:'../../../assets/Terror/insidious2.webp',
            alt:'Insidius 2'
          },
          {
            src:'../../../assets/Terror/life.webp',
            alt:'Life'
          },
          {
            src:'../../../assets/Terror/malasana.webp',
            alt:'Malasaña'
          },
          {
            src:'../../../assets/Terror/multiple.webp',
            alt:'Multiple'
          },
        ]
    
      // }
    }

    this.scifiFilms = {
      title:'Ciencia ficción futurista',
      imageGallery:[
        {
          src:'../../../assets/Sci-fi/6dia.webp',
          alt:'El sexto día'
        },
        {
          src:'../../../assets/Sci-fi/12monos.webp',
          alt:'12 monos'
        },
        {
          src:'../../../assets/Sci-fi/afterearth.webp',
          alt:'After earth'
        },
        {
          src:'../../../assets/Sci-fi/colverparadox.jpg',
          alt:'The cloverfield paradox'
        },
        {
          src:'../../../assets/Sci-fi/core.webp',
          alt:'Core'
        },
        {
          src:'../../../assets/Sci-fi/deepimpact.webp',
          alt:'Deep Impact'
        },
        {
          src:'../../../assets/Sci-fi/doom.webp',
          alt:'Doom'
        },
      ]
    }

    this.dramaFilms = {
      title:'Dramas TV para hacer una maratón',
      imageGallery:[
        {
          src:'../../../assets/Drama/1917.webp',
          alt:'1917'
        },
        {
          src:'../../../assets/Drama/arrival.webp',
          alt:'La llegada'
        },
        {
          src:'../../../assets/Drama/clublucha.webp',
          alt:'El club de la lucha'
        },
        {
          src:'../../../assets/Drama/corazones.webp',
          alt:'Corazones de acero'
        },
        {
          src:'../../../assets/Drama/culpable.jpg',
          alt:'Culpable'
        },
        {
          src:'../../../assets/Drama/millaverde.webp',
          alt:'La milla verde'
        },
        {
          src:'../../../assets/Drama/naufrago.webp',
          alt:'Naufrago'
        },
      ]
    }

    this.comediaFilms = {
      title:'Comedias',
      imageGallery:[
        {
          src:'../../../assets/Comedia/casi300.webp',
          alt:'Casi 300'
        },
        {
          src:'../../../assets/Comedia/cazafantasmas.webp',
          alt:'Cazafantasmas'
        },
        {
          src:'../../../assets/Comedia/dictador.webp',
          alt:'El dictador'
        },
        {
          src:'../../../assets/Comedia/erasehollywood.webp',
          alt:'Erase una vez Hollywood'
        },
        {
          src:'../../../assets/Comedia/family guy.webp',
          alt:'Family guy'
        },
        {
          src:'../../../assets/Comedia/juerga.webp',
          alt:'Juerga hasta el fin'
        },
        {
          src:'../../../assets/Comedia/laterminal.webp',
          alt:'La terminal'
        },
      ]
    }

   }

  

  ngOnInit(): void {
  }

}
