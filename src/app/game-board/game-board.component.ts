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
  public nextPlayer = "O";
  public winner = "None"

  onItemClick(element: HTMLButtonElement) {
    if (element.innerText !== '') {
      console.log('returned');
      return;
    }

    // set square to current player (i.e. X or O) 
    element.innerText = this.player;

    // update current player to next player
    let temp = this.player;
    this.player = this.nextPlayer;
    this.nextPlayer = temp;
  }
}
