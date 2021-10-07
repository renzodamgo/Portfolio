import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CamComponent } from './projects/cam/cam.component';

const routes: Routes = [
  {
    path: "",component:AppComponent,
  },
  {
    path: "projects",children:[
      {path:"camupc",component:CamComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
