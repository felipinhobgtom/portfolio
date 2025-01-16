import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent implements OnInit {
  @ViewChild('social', { static: true }) social!: ElementRef<HTMLDivElement>;
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    this.initialAnimations();
  }

  initialAnimations(): void {
    gsap.from(this.social.nativeElement.childNodes, {
      duration: 0.4,
      opacity: 0,
      y: -35,
      stagger: 0.05,
      delay: 0.1,
    });
  }
}
