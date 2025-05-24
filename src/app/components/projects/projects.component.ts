import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCode, faRocket } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  faCode = faCode;
  faRocket = faRocket;

  projects = [
    {
      title: 'GitHub Portfolio',
      description: 'My central hub for code, showcasing front-end, back-end, and full-stack projects.',
      url: 'https://github.com/justin-Attinoto-Coder',
      icon: faCode
    }
    // Add more projects here, e.g.:
    // {
    //   title: 'Project Name',
    //   description: 'Description of the project.',
    //   url: 'https://project-link.com',
    //   icon: faRocket
    // }
  ];
}
