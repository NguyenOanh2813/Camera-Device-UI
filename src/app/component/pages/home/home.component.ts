import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/services/server.service';
import { Devices } from 'src/app/models/devices';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    ipBegin: string = "";
    ipEnd: string = "";

  // public ipForm = new FormGroup({
  //   ipBegin: new FormControl(''),
  //   ipEnd: new FormControl(''),
  // });

    public devices: Devices[] = [];

    constructor(
        private httpServer: ServerService
    ) { }

    ngOnInit(): void {
    }

    list_device_show = [];

    public getDevice(){
        this.httpServer.getListSkylightDevice().subscribe((data) => {
            console.warn(this.ipBegin.substr(10))
            for(let unitData of data){
                if (Number(unitData['ipAddress'].substr(10)) >= Number(this.ipBegin.substr(10)) && 
                    Number(unitData['ipAddress'].substr(10)) <= Number(this.ipEnd.substr(10))){
                    //console.warn(unitData['ipAddress'])
                    console.log(unitData)
                    this.list_device_show.push(unitData)
                }
            }
            this.devices = this.list_device_show
        })
    }
}
