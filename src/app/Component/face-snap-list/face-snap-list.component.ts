import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import {take, takeUntil, tap} from 'rxjs/operators'
import { FaceSnap } from 'src/app/Models/face-snap.model';
import { FaceSnapService } from 'src/app/Service/face-snap.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

    faceSnaps!: FaceSnap[];
    // destroy$!:Subject<boolean>

  constructor(private faceSnapService: FaceSnapService) {
    this.printFs();
  }

  ngOnInit(): void {
    // this.destroy$ = new Subject<boolean>();
    // interval(1000).pipe(
    //   takeUntil(this.destroy$),
    //   tap(console.log)).subscribe();
  }

  printFs():FaceSnap[]{
    this.faceSnaps = this.faceSnapService.getAllFaceSnap();
    return this.faceSnaps;
  }

  // ngOnDestroy(): void {
  //   this.destroy$.next(true);
  // }

}
