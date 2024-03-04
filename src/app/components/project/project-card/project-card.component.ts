import { Component, Input, input} from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
})

export class ProjectCardComponent {
  @Input() projectGithubName?:string = '';
  @Input() projectLink?:string = '';
  @Input() updatedDate?:string = '';
  userImage:string = 'https://avatars.githubusercontent.com/u/89225210?v=4'
  githubReferenceLink:string = 'https://github.com/mujapira';
}
