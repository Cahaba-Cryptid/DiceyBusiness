
$('body').css('background-color', 'gainsboro');
$('#mulligan').css('margin-left', '35px');
$('#mulligan').css('margin-right', '35px');

let addDieBtn = document.getElementById('generate-dice');
$(addDieBtn).click(generateDie)
let diceOnBoard = []
let diceTotals = 0;


class D6 {
    constructor() {
        this.rollD6();
        this.div = $('<div class="die">' + this.rollOutcome + '</div>');
        $('#dice-tower').append(this.div)
        this.div.css('text-align', 'center');
        this.div.css('line-height', '100px');
        this.div.css('background-color', 'rebeccaPurple');
        this.div.css('height', '100px');
        this.div.css('width', '100px');
        this.div.css('float', 'left');
        this.div.css('margin', '20px');
        this.div.click(() => {
            this.reroll()
            this.div.text(this.rollOutcome)
        })
        //indexOf can be used
        this.div.dblclick(() => {
            diceOnBoard.splice($.inArray(this, diceOnBoard), 1);
            this.div.remove();
        });
    }
    rollD6() {
        this.rollOutcome = Math.floor(Math.random() * 6 + 1);
    }
    reroll() {
        this.rollD6();
    }

}

//roll function
function generateDie() {
    let newD6 = new D6()
    diceOnBoard.push(newD6);
}

//re-roll dice displayed on screen
function mulligan() {
    diceOnBoard.forEach(die => {
        die.rollD6()
        die.div.text(die.rollOutcome)

    });

}

$('#mulligan').click(mulligan);

//starts at end of array
// $('#sum-dice').click(() => {

//     let diceTotals = 0;

//     for (let i = diceOnBoard.length - 1; i >= 0; i--) {
//         diceTotals += (diceOnBoard[i].rollOutcome)
//     }
//     alert(diceTotals);
// });

$('#sum-dice').click(() => {

    let diceTotals = 0;

    for (let i = 0; i < diceOnBoard.length; i++) {
    diceTotals += (diceOnBoard[i].rollOutcome)
    }
    alert(diceTotals);
});





