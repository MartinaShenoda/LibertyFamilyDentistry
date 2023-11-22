import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  page: string = "/"
  constructor(private router: Router, private route: ActivatedRoute) { 
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.page = val.url
      }
    });
  }
  
  ngOnInit(): void {
  }

}
