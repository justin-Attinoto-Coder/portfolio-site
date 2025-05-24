import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ProjectsComponent } from './projects/projects.component';

@Component({
  selector: 'app-root',
  template: `
    <app-header></app-header>
    <app-projects></app-projects>
  `,
  styles: [],
  imports: [HeaderComponent, ProjectsComponent]
})
export class AppComponent {}
