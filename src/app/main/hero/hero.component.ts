import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  page: string = "/"
  subpage: string = ""
  constructor(private router: Router, private route: ActivatedRoute) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.page = val.url
        if(this.page.includes("/services/")){
          this.grabSubPage(this.page)
        }
      }
    });
  }

  grabSubPage(page: any): string{
    var temp;
    this.subpage = this.page.split("/")[2]

    
    temp = this.subpage.replace(/\-/g," ").split(" ")
    for (let i =0; i < temp.length; i++){            
      temp[i] = temp[i][0].toUpperCase() + temp[i].substring(1)
    }
    this.subpage = ""
    for (var word in temp){
      this.subpage += temp[word] + " "
    }
    return this.subpage
  }
  ngOnInit(): void {
  }

}
