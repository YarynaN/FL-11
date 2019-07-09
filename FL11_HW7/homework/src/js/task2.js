let prize = 0;
let prize2 = prize * 2;

const agree = confirm('Do you want to play a game?');
if (agree === false) {
    alert("You did not become a billionaire, but can.");
} else {
    let secretNum = Math.floor(Math.random() * 8);
    let secretNum2 = Math.floor(Math.random() * 12);
    console.log(secretNum);
    const prizes = [100, 50, 25];

    for (let j = 0; j < 3; j++) {

        for (let i = 0; i < 3; i++) {
            console.log(i);
            const guessResponse = prompt('Please, choose a random number between 0 and 8', '');
            const guess = parseInt(guessResponse);

            if (guess === secretNum) {
                prize = prizes[i];
                alert("Congratulation, you won! Your prize is: " + prize + "$. Do you want to continue?");
                // const agreeContinue = confirm('Do you want to continue game?');
                // if (agreeContinue === false){
                //     alert("Thank you for your participation. Your prize is: " + prize + "$");
                }
                // else {
                //     for (let i = 0; i < 3; i++) {
                //         const guessResponse = prompt('Please, choose a random number between 0 and 12', '');
                //         const guess = parseInt(guessResponse);
                //         if (guess === secretNum2) {
                //             prize2 = prizes2[i]+prize;
                //             alert("Congratulation, you won! Your prize is: " + prize2 + "$. Do you want to continue?");
                //             break;
                //         } else {
                //             alert("Thank you for your participation. Your prize is: " + prize2 + "$");
                //             const agreeContinue = confirm('Do you want to continue game?');
                //             if (agreeContinue === false){
                //                 alert("Thank you for your participation. Your prize is: " + prize2 + "$");
                //             }
                //         }
                //     }
                // }
                break;
            }
            else {
                alert("Thank you for your participation. Your prize is: " + prize + "$");
                // const agreeContinue = confirm('Do you want to continue game?');
                // if (agreeContinue === false){
                //     alert("Thank you for your participation. Your prize is: " + prize + "$");
                // }
            }
        const agreeContinue = confirm('Do you want to continue game?');
        if (agreeContinue === false){
            alert("Thank you for your participation. Your prize is: " + prize + "$");
        }
        }
    }
}