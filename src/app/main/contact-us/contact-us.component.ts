import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  endpoint: any;
  formdata: any;
  http : HttpClient;
  phone: any = '';
  constructor(http : HttpClient, private formBuilder: FormBuilder, private toastr: ToastrService) { 
    this.http = http;
    // this.email = "hpierce@example.com";
    // this.name = "Hayden Pierce";
    // this.message = "Hello, this is Hayden.";
  }

  ngOnInit(): void {
    this.endpoint = "send.php";
    this.formdata = this.formBuilder.group({ 
      firstName: new FormControl("",  Validators.required),
      lastName: new FormControl(""),
      email: new FormControl(""),
      phone: new FormControl("", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
      comments: new FormControl("",  Validators.required)
    }); 
  }
  get m(){
    return this.formdata.controls;
  }

  sendEmail(result:any){
    this.http.post(this.endpoint, result)
        .subscribe(
            response => {
              this.toastr.success("Your message was sent successfully","Success")
            }
        )
  }
  // onSubmit(FormData: any) {
  //   console.log(FormData)
  //   this.contact.PostMessage(FormData)
  //   .subscribe(response => {
  //   location.href = 'https://mailthis.to/confirm'
  //   console.log(response)
  //   }, error => {
  //   console.warn(error.responseText)
  //   console.log({ error })
  //   })

}
