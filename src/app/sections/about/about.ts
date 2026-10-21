import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ABOUT, PROFILE } from '../../data/resume.data';
import { CountUp } from '../../shared/count-up.directive';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, CountUp, Icon],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly about = ABOUT;
  protected readonly profile = PROFILE;
}
