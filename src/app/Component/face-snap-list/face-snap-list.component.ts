import { Component, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/Models/face-snap.model';
import { FaceSnapService } from 'src/app/Service/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];

  constructor(private faceSnapService: FaceSnapService) {
    this.printFs();
  }

  printFs():FaceSnap[]{

    this.faceSnaps = this.faceSnapService.getAllFaceSnap();
    return this.faceSnaps;

  }

  ngOnInit(): void { }

}
