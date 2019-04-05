
$('body').css('background-color', 'gainsboro');
$('#mulligan').css('margin-left', '35px');

let addDieBtn = document.getElementById('generate-dice');
$(addDieBtn).click(generateDie)
let diceOnBoard = []

class D6 {
    constructor() {
        this.rollD6();
        this.div = $('<div class="die">' + this.rollOutcome + '</div>');
        $('#dice-tower').append(this.div)

        //styling
        
        $('.die').css('background-color', 'rebeccaPurple');
        $('.die').css('height', '100px');
        $('.die').css('width', '100px');
        $('.die').css('float', 'left');
        $('.die').css('margin', '20px');  
    }
    rollD6() {
        this.rollOutcome = Math.floor(Math.random() * 6 + 1);
    }
}

//roll function
function generateDie() {
    let newD6 = new D6()
    diceOnBoard.push(newD6);
    console.log(diceOnBoard);
}
//re-roll function in progress
//will need to be used for mulligan button
function mulligan() {
    
}


