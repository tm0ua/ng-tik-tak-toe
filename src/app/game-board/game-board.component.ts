import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.less'
})
export class GameBoardComponent {
  public player = 'X';
  public nextPlayer = 'O';
  public winner = 'None';

  public onItemClick(element: HTMLButtonElement) {
    // do nothing if square is already used.
    if (element.innerText !== '') {
      console.log('returned');
      return;
    }

    // set square to current player (i.e. X or O).
    element.innerText = this.player;

    // update current player to next player.
    let temp = this.player;
    this.player = this.nextPlayer;
    this.nextPlayer = temp;
  }

  public reset() {
    let squares = document.querySelectorAll('button.square');
    squares.forEach((square) => (square as HTMLButtonElement).innerText = '');

    this.player = 'X';
    this.nextPlayer = 'O';
    this.winner = 'None';
  }

  /**
   * TODO:
   *  - Reset button needs to clear game board.
   *  - Check game status after each player goes.
   *  - Display winner.
   */
}
