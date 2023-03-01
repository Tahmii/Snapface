import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { FaceSnap } from 'src/app/Models/face-snap.model';
import { FaceSnapService } from 'src/app/Service/face-snap.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!:RegExp;

  constructor(private formBuilder: FormBuilder, private faceSnapService: FaceSnapService, private router: Router) { }



  ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.snapForm = this.formBuilder.group({
      title:[null, Validators.required],
      description:[null, Validators.required],
      imageUrl:[null, [Validators.required, Validators.pattern(this.urlRegex)]],
      localisation:[null, Validators.required]
    },
    {
      updateOn:'blur'
    }
    );

    //Mettre a jour le formulaire, ValueChange envoie tout l'objet après chaque modification
    //map modifie l'emission de l'observable
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(
        formValue =>({
        ...formValue,
        createDate: new Date(),
        id: 0,
        snaps:0
      }))
    )
  }



  onSubmitForm(){
    this.faceSnapService.addFaceSnap(this.snapForm.value);
    setTimeout(() => {
      this.router.navigateByUrl("/facesnaps")
    }, 2000);
  }

}