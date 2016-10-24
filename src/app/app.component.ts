import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'mb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class AppComponent {
  private title: string = "Movie Bar";

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
