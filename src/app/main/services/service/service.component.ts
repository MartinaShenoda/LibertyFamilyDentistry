import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  SERVICES = [
    {
      service: "Dental Crowns",
      paragraph: {
        p1: "At Liberty Family Dentistry we can cover a tooth that is broken, decayed, or misshapen by providing a custom dental crown. \
        If you would like to receive a dental crown, please come see Dr. Magi. Contact us today at <a href='tel:(931)304-8447'>931-304-8447</a> to schedule your appointment.",
        
        p2: "A dental crown, or cap, is a restoration that can be used for a number of purposes. One of the most common uses of a dental crown is to restore a tooth that is significantly damaged or decayed. \
        The crown is custom made to fit over the entire tooth, starting at the gum line, in order to restore the tooth to its original shape and size. Dental crowns can be made of gold, porcelain, or porcelain fused to metal; \
        porcelain crowns are popular because they match the natural color and appearance of your teeth. Our dentist will help you determine which type of dental crown is right for your smile.",

        p3:"Your smile may benefit from a crown if a tooth is damaged or decayed to the point that a dental filling will not provide a successful restoration. Crowns can also be used for a number of other restorative and aesthetic purposes, including: <br>"
      },
      list: {
        l1: "protect a tooth following root canal treatment",
        l2: "To anchor and attach a dental bridge",
        l3: "To cover and complete a dental implant",
        l4: "To enhance the beauty of your smile",
        l5: "To improve a misshapen tooth",
        l6: "To strengthen a tooth that is fractured or weakened",
        l7: "To support a large filling when little natural tooth structure remains",
        l8: "To find out whether a dental crown is right for you, we welcome you to contact us today!",
      }
    }
  ]


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
