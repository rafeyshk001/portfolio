import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MARQUEE, SKILL_GROUPS } from '../../data/resume.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { Tilt } from '../../shared/tilt.directive';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, Icon, Tilt],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  protected readonly groups = SKILL_GROUPS;
  // Duplicated so the marquee can loop seamlessly.
  protected readonly marquee = [...MARQUEE, ...MARQUEE];
}
