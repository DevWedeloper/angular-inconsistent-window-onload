import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-non-lazy-load',
  standalone: true,
  imports: [RouterLink],
  template: `
    <p>non-lazy-load works!</p>
    <a routerLink="/lazy-load">lazy load route</a>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window: load)': 'onWindowLoad()',
  },
})
export class NonLazyLoadComponent {
  protected onWindowLoad(): void {
    console.log('non-lazy-load.component window loaded');
  }
}
