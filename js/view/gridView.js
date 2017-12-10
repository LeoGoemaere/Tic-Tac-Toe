class Boxs {
	constructor(boxs, grid, gridElement, players, scores, winOverlay, horizontalLine, verticalLine) {
		this.boxs = boxs;
		this.grid = grid;
		this.gridElement = gridElement;
		this.players = players;
		this.scores = scores;
		this.winOverlay = winOverlay;
		this.horizontalLine = horizontalLine;
		this.verticalLine = verticalLine;
		this.xStart = true;
		this.xPlayed = this.xStart;
	}
	cross(index) {
		this.xPlayed = false;
		this.boxs[index].classList.add('cross');
		this.boxs[index].classList.remove('circle');
		this.oToPlay();
	}
	circle(index) {
		this.xPlayed = true;
		this.boxs[index].classList.add('circle');
		this.boxs[index].classList.remove('cross');
		this.xToPlay();
	}
	xToPlay() {
		this.players.classList.remove('oTurn');
		this.players.classList.add('xTurn');
	}
	oToPlay() {
		this.players.classList.add('oTurn');
		this.players.classList.remove('xTurn');
	}
	winnerIs() {
		this.gridElement.className = `grid ${this.grid.winnerLine}`;
		this.winOverlay.className = `win-overlay active ${this.grid.winnerPlayer}Win`;
	}
	drawGame() {
		this.winOverlay.className = `win-overlay active drawGame`;
	}
	clearView() {
		for (let i = 0; i < this.horizontalLine.length; i++) {
			this.horizontalLine[i].classList.remove('horizontal');
			this.verticalLine[i].classList.remove('vertical');
			window.setTimeout(() => {
				this.horizontalLine[i].classList.add('horizontal');
				this.verticalLine[i].classList.add('vertical');
			}, 1)
		}
		for (let i = 0; i < this.boxs.length; i++) {
			this.boxs[i].classList.remove('cross', 'circle');
		}
		this.xPlayed = this.xStart;
		this.xPlayed ? this.xToPlay() : this.oToPlay();
		this.gridElement.className = 'grid';
		this.winOverlay.className = 'win-overlay';
	}
}

