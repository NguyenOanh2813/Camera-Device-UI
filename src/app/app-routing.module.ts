import { HomeComponent } from './component/pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDeviceComponent } from './component/pages/list-device/list-device.component';


const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'list-device', component: ListDeviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }