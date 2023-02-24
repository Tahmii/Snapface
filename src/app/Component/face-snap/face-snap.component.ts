import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from 'src/app/Models/face-snap.model';
import { FaceSnapService } from 'src/app/Service/face-snap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap!: FaceSnap;
  buttonText!: string;

  ngOnInit(){ }

  constructor(private faceSnapService: FaceSnapService, private router: Router){
    this.buttonText = "Oh snaps !";
  }

  onViewFaceSnap(){
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`)
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

