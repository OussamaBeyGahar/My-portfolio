import { NgParticlesModule } from 'ng-particles';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './componenets/about/about.component';
import { ResumeComponent } from './componenets/resume/resume.component';
import { ContactComponent } from './componenets/contact/contact.component';
import { LandingComponent } from './componenets/landing/landing.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'resume', component: ResumeComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'landing', component: LandingComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ResumeComponent,
    ContactComponent,
    LandingComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgParticlesModule,
    [RouterModule.forRoot(routes),
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  ],
  exports :[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
