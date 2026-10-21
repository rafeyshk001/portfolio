import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Navbar } from './sections/navbar/navbar';
import { Hero } from './sections/hero/hero';
import { About } from './sections/about/about';
import { ExperienceSection } from './sections/experience/experience';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';
import { Education } from './sections/education/education';
import { Contact } from './sections/contact/contact';
import { Footer } from './sections/footer/footer';
import { ThemeService } from './shared/theme.service';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Navbar, Hero, About, ExperienceSection, Projects, Skills, Education, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  // Instantiate early so the theme is applied on startup.
  protected readonly theme = inject(ThemeService);
}
