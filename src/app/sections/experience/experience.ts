import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EXPERIENCE } from '../../data/resume.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { Tilt } from '../../shared/tilt.directive';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, Icon, Tilt],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class ExperienceSection {
  protected readonly jobs = EXPERIENCE;
}
