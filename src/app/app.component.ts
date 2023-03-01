import { Component, OnInit } from '@angular/core';
import { filter, first, interval, map, Observable, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  interval$!: Observable<string >;
  // redTrainsCalled = 0;
  // yellowTrainsCalled = 0;

  // logger(text: string){
  //   console.log(`Log: ${text}`);
  //   }

  ngOnInit(){

    //   interval(500).pipe(
  //     take(10),
  //     map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
  //     tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
  //     exhaustMap(color => this.getTrainObservable$(color)),
  //     tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
  //   ).subscribe();
  // }

  // getTrainObservable$(color: 'rouge' | 'jaune') {
  //   const isRedTrain = color === 'rouge';
  //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
  //   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
  //   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
  //   return of({ color, trainIndex }).pipe(
  //     delay(isRedTrain ? 5000 : 6000)
  //   );
  // }

  // translateColor(color: 'rouge' | 'jaune') {
  //   return color === 'rouge' ? 'red' : 'yellow';




  //--------------------------------------------------------------
  //this.interval$ = interval(1000).pipe(
    //   filter(
    //     value => value % 3 ===0
    //   ),
    //   map(
    //     value=> value % 2 === 0 ?
    //     `Je suis ${value} et je suis paire`:
    //     `Je suis ${value} et je impaire`
    //   ),
    //   tap(
    //     text =>  this.logger(text)
    //   )
    // )

  }

}

