import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  CARDS = [
    {service: "Dental Crowns", icon:"../../../assets/img/tooth-icons/crown-tooth.svg", width:"90"},
    {service: "Dental Exam & Check-Ups", icon:"../../../assets/img/tooth-icons/exam-tooth.svg", width:"90"},
    {service: "Dental Implants",  icon:"../../../assets/img/tooth-icons/implant-tooth.svg", width:"100"},
    {service: "Invisalign", icon:"../../../assets/img/tooth-icons/star-tooth.svg", width:"90"},
    {service: "Tooth Extractions", icon:"../../../assets/img/tooth-icons/tooth.svg", width:"90"},
    {service: "Teeth Whitening", icon:"../../../assets/img/tooth-icons/clean-tooth.svg", width:"90"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
