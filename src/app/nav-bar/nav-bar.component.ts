import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

 ngOnInit(): void {
  //  window.addEventListener('scroll', this.scroll, true)
 }

  // scroll = (): void => {

  //   let scrollHeigth;

  //   if(window.innerWidth < 350){
  //   scrollHeigth = 150;
  //   }else if(window.innerWidth < 500 && window.innerWidth > 350){
  //   scrollHeigth = 250;
  //   }else if(window.innerWidth < 700 && window.innerWidth > 500){
  //   scrollHeigth = 350;
  //   }else if(window.innerWidth < 1000 && window.innerWidth > 700){
  //   scrollHeigth = 500;
  //   }else{
  //     scrollHeigth = 650;
  //   }

  //   if(window.scrollY >= scrollHeigth){
  //     document.body.style.setProperty('--navbar-scroll', "white");
  //     document.body.style.setProperty('--navbar-scroll-text', "#2b3340");
  //     document.body.style.setProperty('--navbar-scroll-shadow', "0px 4px 6px -5px #000000");
  //   }else if(window.scrollY < scrollHeigth){
  //     document.body.style.setProperty('--navbar-scroll', "transparent");
  //     document.body.style.setProperty('--navbar-scroll-text', "black");
  //     document.body.style.setProperty('--navbar-scroll-shadow', "none");
  //   }
  // }

}
