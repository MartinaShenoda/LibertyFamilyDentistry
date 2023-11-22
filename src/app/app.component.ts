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
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
    if(this._router.url == "contact-us"){
      this.isOn=true;
    }

  }
  
}
