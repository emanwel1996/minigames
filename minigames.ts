//% block="Minigames" color=#00FFFF icon="\uf11b"
namespace minigames {
    function showHand(hand: Hands) {
        if (hand == 0) basic.showLeds()
    }
    /**
     * Starts a rock paper scissors gme
     * Press button A for selecting your hand and button B for accepting the hand
     */
    //% block="play rock paper scissors"
    export function rockPaperScissors(): void {
        // assignation
        let hand: Hands = 0;
        let cpu: Hands;
        let turn: boolean = true;
        let wins: number = 0;
        let losses: number = 0:
        let draws: number = 0;
        input.onButtonPressed(Button.A, (): void => {
            if (turn) hand = (hand + 1) % 3;
        });
        input.onButtonPressed(Button.B, (): void => {
            if (turn) {
                turn = false;
                cpu = randint(0, 2);
                music.play(music.stringPlayable("E D G F B A C5 B ", 120), music.PlaybackMode.UntilDone);
            }
        });
    }
}
