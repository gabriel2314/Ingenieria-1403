import { Component } from '@angular/core';

@Component({
  selector: 'contact-component',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name!:string;
  email!:string;
  message!:string;

  constructor(){

  }

 

  submitForm(){
    //Send Message
    alert('Mensaje Enviado!');
  }
}
