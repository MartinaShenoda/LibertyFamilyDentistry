import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {
  ABOUT = [
    {
      info: "Dr. Magi Sargious moved to the Nashville area in 2010 and attended Middle Tennessee State University where she earned her Bachelor degree in science and minor in health in 2013. She completed her Doctorate in dental surgery(DDS) at Meharry Medical College School of Dentistry."
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
