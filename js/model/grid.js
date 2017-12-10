function spacecamel(s){
    return s.replace(/([a-z])([A-Z])/g, '$1 $2').toLowerCase();
}

class Grid {
	constructor() {
		this.grid = new Array(9).fill(null);
		this.isWinner = false;
		this.winnerLine;
		this.winnerPlayer;
		this.xPoints = 0;
		this.oPoints = 0;
	}
	winCalculate(square) {
		const object = {
		  horiTop: [0, 1, 2],
		  horiMiddle: [3, 4, 5],
		  horiBottom: [6, 7, 8],
		  vertiLeft: [0, 3, 6],
		  vertiMiddle: [1, 4, 7],
		  vertiRight: [2, 5, 8],
		  obliqueLeft: [0, 4, 8],
		  obliqueRight: [2, 4, 6]
		};
		for (let key in object) {
			const [a, b, c] = object[key];
			if (square[a] === square[b] && square[b] === square[c] && square[c] != null) {
				this.winnerPlayer = this.grid[c]; // Stock the winner player into constructor
				this.isWinner = true;
				this.winnerLine = spacecamel(key);
			}
		}
	}
	xWin(winnerPlayer) {
		if (winnerPlayer === "x") {
			return true;
		} else if (winnerPlayer === "o") {
			return false;
		} else {
			return null;
		}
	}
	fullChecked(element) {
		return element === "x" || element === "o";
	}
	clearGrid() {
		this.grid = new Array(9).fill(null);
		this.winnerLine = undefined;
		this.winnerPlayer = "";
		this.isWinner = false;
	}
} 
