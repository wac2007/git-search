import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-readme-container',
  templateUrl: './readme-container.component.html',
})
export class ReadmeContainerComponent {
  @Input() readmeTemplate: String;
}
