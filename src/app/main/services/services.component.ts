import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  CARDS = [
    {service: "Dental Crowns", icon:"../../../assets/img/tooth-icons/crown-tooth.svg", width:"90", text:"Loss of tooth structure can be caused by Decay or trauma and it can compromise function and esthetics. Dental crowns are caps placed on top of damaged teeth. Crowns are used to protect, cover and restore the shape of your teeth when fillings don’t solve the problem."},
    // Extensive loss of tooth structure can best be replaced with a restoration that covers your entire tooth as in a crown.  This “full coverage” restoration can strengthen your tooth and in the hands of an expert can provide a long-lasting esthetic and functional result."},
    {service: "Dental Exams And Cleaning", icon:"../../../assets/img/tooth-icons/exam-tooth.svg", width:"90", text:"There are two parts to your dentist visit at Liberty Family Dentistry – examination and cleaning. Your exam will check for cavities, plaque, and tartar on your teeth."},
    {service: "Dental Implants",  icon:"../../../assets/img/tooth-icons/implant-tooth.svg", width:"100", text:"Dental Implants are made of titanium and have special coatings that encourage the fusing of human bone. The top of each implant has an internal screw channel so that crowns, bridges, and or dentures can be screwed in place."},
    {service: "Dental Fillings",  icon:"../../../assets/img/tooth-icons/filling-tooth.svg", width:"100", text:"Dental fillings are by far the most well known way to fix a broken or decayed tooth. Fillings are minimally invasive and help to preserve most of the tooth’s structure while providing a restoration that is almost indistinguishable from the natural tooth."},
    {service: "Dental Bridges",  icon:"../../../assets/img/tooth-icons/crown-tooth.svg", width:"100", text:"If you have missing teeth, including front teeth, a dental bridge is a safe and low-risk way that can help restore the look and function of your teeth."},
    {service: "Invisalign", icon:"../../../assets/img/tooth-icons/star-tooth.svg", width:"90", text:"Invisalign is an orthodontic treatment option that can help you achieve a smile that is straighter and healthier with no braces or wires. Invisalign offers a nearly invisible way to improve your smile by gradually, gently realigning your teeth."},
    {service: "Tooth Extractions", icon:"../../../assets/img/tooth-icons/tooth.svg", width:"90", text:"While many of us do our best to keep our teeth healthy, sometimes a tooth needs to be taken out to keep you healthy. In these cases, an extraction is necessary."},
    {service: "Teeth Whitening", icon:"../../../assets/img/tooth-icons/clean-tooth.svg", width:"90", text:"Let our team help you determine what whitening process is right for you, based on the current color and condition of your teeth."},
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

  goToSubpage(service: string){
    var newRoute; 
    // if (service.indexOf('& ') > 0 ){
    //   service = service.replace("& ","")
    // }
   
    newRoute = service.toLowerCase().replace(/ /g,"-")
    this.router.navigateByUrl("/services/"+newRoute)
  }

}
