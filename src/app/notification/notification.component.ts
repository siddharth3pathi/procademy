import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success noti" [hidden]="displayNotification">
                This website uses cookies to provide better user experience.
                <div class="close"><button class="btn" (click)="closeNotification()">X</button></div>
            </div>`,
  styles: [".noti{text-align:center;}", "p{font-size: 14px;}", ".close{float: right; margin-top: -8px;}"]
})
export class NotificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayNotification : boolean = false;

  closeNotification(){
    this.displayNotification=true;
  }
}
