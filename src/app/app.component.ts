import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  template: `
    <app-child />
    <router-outlet />
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window: load)': 'onWindowLoad()',
  },
})
export class AppComponent {
  title = 'angular-inconsistent-window-onload';

  protected onWindowLoad(): void {
    console.log('app.component window loaded');
  }
}
