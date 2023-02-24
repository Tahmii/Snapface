import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './Component/face-snap-list/face-snap-list.component';
import { SingleFaceSnapComponent } from './Component/single-face-snap/single-face-snap.component';
import { LandingPageComponent } from './Page/landing-page/landing-page.component';

const routes: Routes = [

  {path:'', component: LandingPageComponent},
  {path: 'facesnaps/:id', component: SingleFaceSnapComponent},
  {path: 'facesnaps', component: FaceSnapListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
