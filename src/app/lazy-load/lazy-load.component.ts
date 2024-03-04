import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lazy-load',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>lazy-load works!</p>
    <a routerLink="/non-lazy-load">non lazy load route</a>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window: load)': 'onWindowLoad()',
  },
})
export class LazyLoadComponent {
  protected onWindowLoad(): void {
    console.log('lazy-load.component window loaded');
  }
}
