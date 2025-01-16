import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-text-container',
  imports: [],
  templateUrl: './text-container.component.html',
  styleUrl: './text-container.component.scss',
})
export class TextContainerComponent {
  constructor(private sanitizer: DomSanitizer) {}

  @Input()
  title: string = '';

  private description: string = '';
  sanitizedDesc: SafeHtml = '';

  @Input()
  set desc(description: string) {
    if (description) {
      this.description = description;
      this.sanitizedDesc = this.sanitizer.bypassSecurityTrustHtml(
        this.description
      );
    }
  }

  get desc(): string {
    return this.description;
  }
}
