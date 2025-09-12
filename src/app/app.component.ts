import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AboutComponent } from "./components/about/about/about.component";
import { ProjectProComponent } from "./components/projectPro/project-pro/project-pro.component";
import { ProjectPersoComponent } from "./components/projectPerso/project-perso/project-perso.component";
import { StackComponent } from "./components/stack/stack.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, AboutComponent, ProjectProComponent, ProjectPersoComponent, StackComponent],
  template: `
<div class="bg-gradient-to-tl from-white via-gray-600 to-gray-900">
  <app-header/>
  <app-about/>
  <app-stack/>
  <app-project-pro/>
  <app-project-perso id="projectPerso"/>
    <app-footer/>
</div>`,
  styles: `
  `
})
export class AppComponent {
  title = 'Portfolio';
}