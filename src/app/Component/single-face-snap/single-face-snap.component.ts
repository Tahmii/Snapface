import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from 'src/app/Models/face-snap.model';
import { FaceSnapService } from 'src/app/Service/face-snap.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(){ }

  constructor(private faceSnapService: FaceSnapService, private router:ActivatedRoute){

    this.buttonText = "Oh snaps !";

    const snapId = + this.router.snapshot.params["id"];
    this.faceSnap = this.faceSnapService.getFacesnapById(snapId);

  }

  onSnap() {

    if (this.buttonText === "Oh snaps !") {

      this.faceSnapService.likeSnap(this.faceSnap.id, "snap");
      this.buttonText = 'Oops, unSnap!';

    } else {

      this.faceSnapService.likeSnap(this.faceSnap.id, "unsnap");
      this.buttonText = "Oh snaps !";

    }
  }

}

