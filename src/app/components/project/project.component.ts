import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})

export class ProjectComponent {
  @Input() projectTitle?: string;
  @Input() projectDescription?: string;
  @Input() projectLink?: string;
  @Input() projectGithubName?: string;
  @Input() updatedDate?: string;
}