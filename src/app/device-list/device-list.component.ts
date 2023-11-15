import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.scss'],
})
export class DeviceListComponent implements OnInit {
  devicesForm = new FormGroup({
    audio: new FormControl(''),
    speaker: new FormControl(''),
  });
  deviceList: MediaDeviceInfo[] = [];

  constructor() {}

  ngOnInit(): void {
    const option = {audio: true, video: {width: 120, height: 80}};
    navigator.mediaDevices.getUserMedia(option).then((stream) => {
      this.updateDeviceList();

      navigator.mediaDevices.ondevicechange = (event) => {
        this.updateDeviceList();
      }
    });
  }

  updateDeviceList() {
      // navigator.mediaDevices.enumerateDevices().then((devices)=> {
      //   console.log(devices);
      //   this.deviceList = devices;
      // })
      return from(navigator.mediaDevices.enumerateDevices().then((devices)=> {
        return devices;
      }));
  }
}
