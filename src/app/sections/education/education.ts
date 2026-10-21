import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CERTIFICATES, EDUCATION } from '../../data/resume.data';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Reveal, Icon],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  protected readonly education = EDUCATION;
  protected readonly certificates = CERTIFICATES;
}
