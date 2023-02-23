import { Injectable } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapService {

  constructor() { }

  getAllFaceSnap(): FaceSnap[]{

    return this.faceSnaps;

  }

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
      id:2,
      title:"Pikachut",
      description:"Le roi des pokemon electrique",
      imageUrl:"https://static.posters.cz/image/1300/affiches-et-posters/pokemon-pikachu-neon-i71936.jpg",
      localisation: "Marseille",
      snaps:178,
      createDate: new Date()

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
      title:"Ronflex",
      description:"Le roi du someil",
      imageUrl:"https://www.pokemontrash.com/images/news/1534957742044.jpg",
      snaps:1445,
      createDate: new Date()
    }


  ]
}
