import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PROJECTS } from '../../data/resume.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { Tilt } from '../../shared/tilt.directive';

@Component({
  selector: 'app-projects',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, Icon, Tilt],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  protected readonly projects = PROJECTS;
}
