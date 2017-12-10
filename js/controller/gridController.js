class GridController {
	constructor(grid, boxs) {
		this.grid = grid;
		this.boxs = boxs;
	}
	play(index) {
		const box = this.boxs.boxs[index];
		if 	(box.classList.contains('circle') ||
			box.classList.contains('cross') || 
			this.grid.isWinner)
			return; 	// If an box are already clicked or there is a winner we stop the function

		this.updateGrid(index);
		this.boxs.xPlayed ? this.boxs.cross(index) : this.boxs.circle(index);
		this.grid.winCalculate(this.grid.grid);
		this.gameOver();
		this.scoreCalculator();
	}
	updateGrid(index) {
		const squares = this.grid.grid.slice();
		squares[index] = this.boxs.xPlayed ? 'x' : 'o';
		this.grid.grid = squares;
	}
	gameOver() {
		if (this.grid.winnerLine != undefined) {
			this.boxs.winnerIs();
		} else {
			if (this.grid.grid.every(this.grid.fullChecked)) {
				this.boxs.drawGame();
			}
		}
	}
	scoreCalculator() {
		const xWinner = this.grid.xWin(this.grid.winnerPlayer);
		if (xWinner && xWinner != null) {
			this.grid.xPoints = this.grid.xPoints + 1;
			const xScore = this.grid.xPoints;
			this.boxs.scores[0].innerHTML = xScore;
		} else if (!xWinner && xWinner != null) {
			this.grid.oPoints = this.grid.oPoints + 1;
			const oScore = this.grid.oPoints;
			this.boxs.scores[1].innerHTML = oScore;
		}
	}

	initView() {
		this.boxs.xStart ? this.boxs.xToPlay() : this.boxs.oToPlay();
	}
	clear() {
		this.grid.clearGrid();
		this.boxs.clearView();
	}
} 

