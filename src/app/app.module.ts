import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/pages/home/home.component';
import { ListDeviceComponent } from './component/pages/list-device/list-device.component';
import { ServerService } from './services/server.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ServerService],
  bootstrap: [AppComponent]

})
export class AppModule { }
