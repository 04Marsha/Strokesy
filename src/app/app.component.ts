import { Component } from '@angular/core';
import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(
          ':enter, :leave',
          [
            style({
              position: 'absolute',
              width: '100%',
              top: 0,
              left: 0,
            }),
          ],
          { optional: true },
        ),
        query(
          ':enter',
          [
            style({
              transform: 'translateX(100%)',
              opacity: 1,
            }),
          ],
          { optional: true },
        ),
        query(
          ':leave',
          [
            animate(
              '300ms ease-in-out',
              style({
                transform: 'translateX(100%)',
                opacity: 0,
              }),
            ),
          ],
          { optional: true },
        ),
        query(
          ':enter',
          [
            animate(
              '300ms ease-in-out',
              style({
                transform: 'translateX(0)',
                opacity: 1,
              }),
            ),
          ],
          { optional: true },
        ),
      ]),
    ]),
  ],
})
export class AppComponent {
  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}
