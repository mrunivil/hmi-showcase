import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit {

  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  initCamera() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.mediaDevices.getUserMedia;

    navigator.getUserMedia({
      video: {
        facingMode: 'environment'
      }
    }, (res) => {
      console.log({ result: res });
    }, err => {
      alert(err);
    });

  }

}
