import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FaceSnap } from '../Models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  constructor() { }

  getAllFaceSnap(): FaceSnap[]{

    return this.faceSnaps;

  }

  // getFacesnapById(faceSnapId:number){
  //   const facesnap = this.faceSnaps.find(facesnap => facesnap.id === faceSnapId)
  // }

  likeSnap(faceSnapId: number, snapType: "snap" | "unsnap"): void{

    const faceSnap = this.getFacesnapById(faceSnapId);
    snapType === "snap" ? faceSnap.snaps ++ : faceSnap.snaps--;

  }

  getFacesnapById(faceSnapId: number): FaceSnap{

    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

    if (!faceSnap) {
      throw new Error("Facesnap not found");
    }

    else{
      return faceSnap
    }

  }

  addFaceSnap(formValue: { title: string, description: string, imageUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
        ...formValue,
        snaps: 0,
        createDate: new Date(),
        id: this.faceSnaps[this.faceSnaps.length - 1].id + 1
    };
    this.faceSnaps.push(faceSnap);
}


  faceSnaps : FaceSnap[] = [

    {
      id:1,
      title:"Carapuce",
      description:"Le roi de l'eau",
      imageUrl:"https://www.pokepedia.fr/images/thumb/3/39/Carapuce_de_Sacha.png/300px-Carapuce_de_Sacha.png",
      snaps:7,
      createDate: new Date()

    },
    {
      id:5,
      title:"Sangoku",
      description:"Super sayen",
      imageUrl:"https://i.pinimg.com/originals/bf/b4/7e/bfb47ecb7d41a211a73c62c54bd71c10.jpg",
      localisation:"Nevada",
      snaps:94,
      createDate: new Date(),

    },

    {
      id:3,
      title:"Inspecteur Gadget",
      description:"Go go gadjet au clio",
      imageUrl:"https://www.disneyphile.fr/wp-content/uploads/2019/10/inspecteur-gadget.jpg",
      localisation:"Paris",
      snaps:58,
      createDate: new Date(),

    },


    {
      id:3,
      title:"Dracofeu",
      description:"Le roi des pokemon de feu",
      imageUrl:"https://www.breakflip.com/uploads2/Misty/2020/Pokemon-GO/battre-m%C3%A9ga-dracaufeu-y-pokemon-go.jpg",
      localisation:"Toulouse",
      snaps:145,
      createDate: new Date(),

    },
    {
      id:4,
      title:"Vegeta",
      description:"Majin",
      imageUrl:"https://www.origamigne.com/shop/wp-content/uploads/2018/02/Vegeta_origamigne_Migne_Huynh.jpg",
      localisation:"Mexico",
      snaps:333,
      createDate: new Date(),

    },
    {
      id:2,
      title:"Pikachut",
      description:"Le roi des pokemon electrique",
      imageUrl:"https://static.posters.cz/image/1300/affiches-et-posters/pokemon-pikachu-neon-i71936.jpg",
      localisation: "Marseille",
      snaps:178,
      createDate: new Date()

    },
    {
      id:6,
      title:"Zoro",
      description:"Sabre man",
      imageUrl:"https://i.ytimg.com/vi/yReLRjwbN94/maxresdefault.jpg",
      localisation:"Ottawa",
      snaps:75,
      createDate: new Date(),

    },
    {
      id:4,
      title:"Ronflex",
      description:"Le roi du someil",
      imageUrl:"https://www.pokemontrash.com/images/news/1534957742044.jpg",
      snaps:1445,
      createDate: new Date()
    },
    {
      id:7,
      title:"Naruto",
      description:"Le roi des ninja",
      imageUrl:"https://static.hitek.fr/img/up_m/83334681/narutouzumaki2121.jpg",
      localisation:"Tokyo",
      snaps:175,
      createDate: new Date(),

    },

  ]
}
