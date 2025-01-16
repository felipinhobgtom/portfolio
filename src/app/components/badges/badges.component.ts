import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badges',
  imports: [],
  templateUrl: './badges.component.html',
  styleUrl: './badges.component.scss'
})
export class BadgesComponent {
  @Input()
  nomeClasse: string = "";
}
