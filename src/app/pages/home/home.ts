import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Info } from './info/info';
import { Team } from "./team/team";
import { About } from "./about/about";
import { Awards } from './awards/awards';
import { InfBusiness } from './inf-business/inf-business';
import { Alliance } from "./alliance/alliance";

@Component({
  selector: 'app-home',
  imports: [CommonModule, Info, Team, About, Awards, InfBusiness, Alliance],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}