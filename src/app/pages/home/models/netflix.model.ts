export interface NetflixModel {
    nav: Nav;
    // hero: Hero;
    films: Films;
}

export interface Nav {
    logo:Img;
}

export interface Hero {
    title:string;
    texto: string;
}

export interface Films {
    title:string;
    imageGallery: Img[];  
}
export interface Img {
    src:string;
    alt:string;
}

export interface Social {
    icoSocial:string,
    linkSocial:string
}

export interface LinksSocial {
    link:string,
    url:string
}