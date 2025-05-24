import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ProjectsComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    FontAwesomeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
