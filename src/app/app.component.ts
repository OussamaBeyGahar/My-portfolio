import { Component } from '@angular/core';

import { Container,Main } from 'tsparticles';
import { ISourceOptions } from 'tsparticles';
import { LandingComponent } from './componenets/landing/landing.component';
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('HeaderAnimation', [
      transition('* => *', [
        query('img',style({ transform: 'translateX(-200%)'})),
        query('img',
          stagger('600ms', [
            animate('900ms', style({ transform: 'translateX(0)'}))
        ]))
      ])
    ])
  ]
})
export class AppComponent {

  title = 'my-portfolio';
  id = "tsparticles";
  particlesUrl ="../assets/Particales.json";
  options: ISourceOptions = {
    background: {

        color: {
            value: "white"
        }

    },
    fpsLimit: 60,
    interactivity: {

        detectsOn: "canvas",
        events: {
            onClick: {
                enable: true,
                mode: "push"
            },
            onHover: {
                enable: true,
                mode: "repulse"
            },
            resize: true
        },
        modes: {
            bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 30,
                
            },
            push: {
                quantity: 4
            },
            repulse: {
                distance: 100,
                duration: 0.4
            }
        }

    },
    particles: {

        color: {
            value: "#a9a9a9"
        },
        links: {
            color: "#a9a9a9",
            distance: 200,
            enable: true,
            opacity: 0.7,
            width: 1.5
        },
        collisions: {
            enable: true
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 2,
            straight: false
        },
        number: {
            density: {
                enable: true,
                value_area: 800
            },
            value: 80
        },
        opacity: {
            value: 1
        },
        shape: {
            type: "diamond"
        },
        size: {
            random: true,
            value: 3
        }

    },
    detectRetina: true
};


  particlesLoaded(container: Container): void {
    console.log(container);
}

particlesInit(main: Main): void {
    console.log(main);
    
    // Starting from 1.19.0 you can add custom presets or shape here, using the current tsParticles instance (main)
}
    
}
