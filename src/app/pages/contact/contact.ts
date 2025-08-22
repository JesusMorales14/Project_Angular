import { Component } from '@angular/core';
import { ContactHome } from "./contact-home/contact-home";

@Component({
  selector: 'app-contact',
  imports: [ContactHome],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {

}
