import { Component, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'liberty-family-dentistry';
  router: string;
  isOn = false;
  constructor(private _router: Router){
    this.router = _router.url; 
  }
  ngOnInit() {
    this.router = this._router.url; 
    console.log(this.router)
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    console.log(changes)
    if(this._router.url == "contact-us"){
      this.isOn=true;
    }
    console.log(this.isOn)
    console.log(window.location.href)
  }
  
}
