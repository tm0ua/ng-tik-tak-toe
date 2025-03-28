import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';

export const routes: Routes = [
    { path: 'start', component: StartComponent },

    // example: lazy load component.
    { path: 'game-board', loadComponent: () => import('./game-board/game-board.component').then((m) => m.GameBoardComponent) },
];
