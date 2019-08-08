
let gameStart = {

	score: 0,
	nextQuestionIndex: 0,
	
	runGame() {
		
		if(!this.isQuestionExists()) {
			console.log(`Игра окончена, ваш счёт ${this.score}`);
			this.nextQuestionIndex = 0;
			this.score = 0;
			if(confirm('Хотите сыграть ещё раз?')) {
				this.runGame();
			}
			return;
		}
		
		let result = leader.askQuestion(questionArr[this.nextQuestionIndex]);
		if(result) {
			this.score++;
		}

		this.nextQuestionIndex++;
		this.runGame();

	},

	isQuestionExists() {
		return questionArr[this.nextQuestionIndex] !== undefined;
	},

	init() {
		alert('Добро пожаловать в игру!');
		this.runGame();
	}, 
};

gameStart.init();
