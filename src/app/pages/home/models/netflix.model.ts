export interface NetflixModel {
    nav: Nav;
    hero: Hero;
    films: Films;
}

export interface Nav {
    logo:Img;
}

export interface Hero {
    title:string;
    imageGallery: Img[];
}

export interface Films {
    title:string;
    imageGallery: Img[];  
}
export interface Img {
    src:string;
    alt:string;
}