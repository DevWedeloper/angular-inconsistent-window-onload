import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: ` <p>child works!</p> `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window: load)': 'onWindowLoad()',
  },
})
export class ChildComponent {
  protected onWindowLoad(): void {
    console.log('child.component window loaded');
  }
}
