import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SinglePageComponent} from '../single-page/single-page.component';
import {ReadPageComponent} from '../read-page/read-page.component';
import {AppComponent} from '../app.component';

const routes: Routes = [{
  path: 'new-books',
  component: SinglePageComponent
}, {
  path: 'read-books',
  component: ReadPageComponent
}, {
  path: '',
  component: AppComponent
}];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
