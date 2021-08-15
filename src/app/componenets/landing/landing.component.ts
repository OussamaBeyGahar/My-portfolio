import { Component, OnInit } from '@angular/core';
import { Container,Main } from 'tsparticles';
import { ISourceOptions } from 'tsparticles';
import { FaSymbol } from '@fortawesome/fontawesome-svg-core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  

})
export class LandingComponent implements OnInit {
  id = "tsparticles";
  particlesUrl ="../../assets/Particales.json"
  particlesLoaded(container: Container): void {
    console.log(container);
}

particlesInit(main: Main): void {
    console.log(main);
    
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
}

  constructor() { }

  ngOnInit(): void {
  }

}
