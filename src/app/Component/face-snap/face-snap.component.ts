import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from 'src/app/Models/face-snap.model';
import { FaceSnapService } from 'src/app/Service/face-snap.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  constructor(private faceSnapService: FaceSnapService){
    this.buttonText = "Oh snaps !";
  }

  ngOnInit(){ }

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

