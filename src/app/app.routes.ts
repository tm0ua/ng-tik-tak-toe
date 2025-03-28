import { Routes } from '@angular/router';
import { StartComponent } from './start/start.component';
import { GameBoardComponent } from './game-board/game-board.component';

export const routes: Routes = [
    { path: 'start', component: StartComponent },
    { path: 'game-board', component: GameBoardComponent },
];
