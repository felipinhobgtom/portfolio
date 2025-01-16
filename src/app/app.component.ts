import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { TextContainerComponent } from './components/text-container/text-container.component';
import { BadgesComponent } from './components/badges/badges.component';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProfileComponent,
    TextContainerComponent,
    BadgesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'Portfolio';
  ano: Date = new Date();

  @ViewChild('aboutMe', { static: true }) aboutMe!: ElementRef<HTMLDivElement>;
  @ViewChild('symBee', { static: true }) symBee!: ElementRef<HTMLDivElement>;
  @ViewChild('hardSkills', { static: true })
  hardSkills!: ElementRef<HTMLDivElement>;
  @ViewChild('symBeeBadges', { static: true })
  symBeeBadges!: ElementRef<HTMLDivElement>;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.initScrollAnimations();
  }

  initScrollAnimations(): void {
    // gsap.to(this.aboutMe.nativeElement, {
    //   scrollTrigger: {
    //     trigger: this.aboutMe.nativeElement,
    //     scrub: true,
    //     start: '110% center',
    //   } as gsap.plugins.ScrollTriggerInstanceVars,
    //   duration: 1.1,
    //   scale: 1.2,
    //   height: 250
    // });
  }

  handleNav(): void {
    const pdfUrl: string = 'curr.pdf';
    window.open(pdfUrl, '_blank');
  }

  handleEmail(): void {
    const email: string = 'felipinhobgouveia@gmail.com';
    const assunto: string = 'Olá, Felipe!';
    const body: string = 'Gostariamos de entrar em contato.';

    window.open(
      `mailto:${email}?subject=${encodeURIComponent(
        assunto
      )}&body=${encodeURIComponent(body)}`,
      '_self'
    );
  }
}
