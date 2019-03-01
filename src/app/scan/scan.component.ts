import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.css']
})
export class ScanComponent implements OnInit, OnDestroy {
  @ViewChild('video') video: ElementRef;
  @ViewChild('canvas') canvas: ElementRef;

  videoElement: HTMLVideoElement;
  canvasElement: HTMLCanvasElement;
  stream: MediaStream;

  constructor() {}

  ngOnInit() {
    this.videoElement = this.video.nativeElement;
    this.canvasElement = this.canvas.nativeElement;
    this.initCamera();
  }

  ngOnDestroy() {
    if (this.stream) {
      this.stream.stop();
    }
  }

  async initCamera() {
    navigator.getUserMedia =
      navigator.getUserMedia || navigator.mediaDevices.getUserMedia;

    navigator.getUserMedia(
      {
        video: {
          facingMode: { ideal: 'environment' }
        }
      },
      res => {
        this.stream = res;
        this.videoElement.srcObject = this.stream;
      },
      err => {
        alert(err);
      }
    );
  }
}
