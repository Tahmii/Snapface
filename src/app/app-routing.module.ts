import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './Component/face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './Component/single-face-snap/single-face-snap.component';
import { LandingPageComponent } from './Page/landing-page/landing-page.component';
import { NewFaceSnapComponent } from './Page/new-face-snap/new-face-snap.component';

const routes: Routes = [

  {path:'', component: LandingPageComponent},
  {path: 'facesnaps/:id', component: SingleFaceSnapComponent},
  {path: 'facesnaps', component: FaceSnapListComponent},
  {path:'create', component: NewFaceSnapComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
