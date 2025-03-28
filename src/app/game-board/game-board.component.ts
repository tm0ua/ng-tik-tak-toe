import { Component } from '@angular/core';

interface MyTable {
  [key: string]: string;
}

@Component({
  selector: 'app-game-board',
  standalone: true,
  imports: [],
  templateUrl: './game-board.component.html',
  styleUrl: './game-board.component.less'
})
export class GameBoardComponent {
  public player: string = 'X';
  public nextPlayer: string = 'O';
  public winner: string = 'None';
  private myTable: MyTable = {};

  public onItemClick(element: HTMLButtonElement) {
    // do nothing if square is already used.
    if (element.innerText !== '') {
      console.log('returned');
      return;
    }

    // set square to current player (i.e. X or O).
    element.innerText = this.player;

    // update the game table.
    this.myTable[element.id] = this.player;

    // update current player to next player.
    let temp: string = this.player;
    this.player = this.nextPlayer;
    this.nextPlayer = temp;

    // check for winner.
    this.checkGame();
  }

  public reset() {
    let squares: NodeListOf<Element> = document.querySelectorAll('button.square');
    squares.forEach((square) => (square as HTMLButtonElement).innerText = '');

    this.player = 'X';
    this.nextPlayer = 'O';
    this.winner = 'None';
    this.myTable = {};
  }

  private checkGame () {
    // top row wins.
    if (
      this.myTable['1:1'] !== undefined && this.myTable['1:1'] === this.myTable['1:2'] && this.myTable['1:2'] === this.myTable['1:3']
    ) {
      this.winner = this.myTable['1:1'] + ' wins top row!';
    }

    // middle row wins.
    if (
      this.myTable['2:1'] !== undefined && this.myTable['2:1'] === this.myTable['2:2'] && this.myTable['2:2'] === this.myTable['2:3']
    ) {
      this.winner = this.myTable['2:1'] + ' wins middle row!';
    }

    // bottom row wins.
    if (
      this.myTable['3:1'] !== undefined && this.myTable['3:1'] === this.myTable['3:2'] && this.myTable['3:2'] === this.myTable['3:3']
    ) {
      this.winner = this.myTable['3:1'] + ' wins bottom row!';
    }

    // first column wins.
    if (
      this.myTable['1:1'] !== undefined && this.myTable['1:1'] === this.myTable['2:1'] && this.myTable['2:1'] === this.myTable['3:1']
    ) {
      this.winner = this.myTable['1:1'] + ' wins first column!';
    }

    // second column wins.
    if (
      this.myTable['1:2'] !== undefined && this.myTable['1:2'] === this.myTable['2:2'] && this.myTable['2:2'] === this.myTable['3:2']
    ) {
      this.winner = this.myTable['1:2'] + ' wins second column!';
    }

    // third column wins.
    if (
      this.myTable['1:3'] !== undefined && this.myTable['1:3'] === this.myTable['2:3'] && this.myTable['2:3'] === this.myTable['3:3']
    ) {
      this.winner = this.myTable['1:3'] + ' wins third column!';
    }

    // reverse diagonal wins.
    if (
      this.myTable['1:1'] !== undefined && this.myTable['1:1'] === this.myTable['2:2'] && this.myTable['2:2'] === this.myTable['3:3']
    ) {
      this.winner = this.myTable['1:1'] + ' wins diagonal!';
    }

    // forward diagonal wins.
    if (
      this.myTable['1:3'] !== undefined && this.myTable['1:3'] === this.myTable['2:2'] && this.myTable['2:2'] === this.myTable['3:1']
    ) {
      this.winner = this.myTable['1:3'] + ' wins diagonal!';
    }
  }

  /**
   * TODO:
   *  - Reset button needs to clear game board.
   *  - Check game status after each player goes.
   *  - Display winner.
   */
}
