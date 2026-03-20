//% block="Minigames" color=#00FFFF icon="\uf11b"
namespace minigames {
    function showHand(hand: Hands): void {
        if (hand === 0) basic.showLeds("00000\n11111\n11111\n11111\n00000");
        else if (hand === 1) basic.showLeds("11111\n11111\n11111\n11111\n11111");
        else basic.showIcon(IconNames.Scissors);
    }
    /**
     * Starts a rock paper scissors gme
     * Press button A for selecting your hand and button B for accepting the hand
     */
    //% block="play rock paper scissors"
    export function rockPaperScissors(): void {
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
                showHand(cpu);
                basic.pause(2000);
                if ((hand - 1) % 3 === cpu)) {
                    basic.showIcon(IconNames.Happy);
                    wins++;
                } else if ((hand + 1) % 3 === cpu) {
                    basic.showIcon(IconNames.Sad);
                    losses++;
                } else {
                    basic.showLeds("00000\n01010\n00000\n11111\n00000");
                    draws++;
                }
                basic.pause(1000);
                turn = true;
            }
        });
        basic.forever((): void => {
            if (wins + losses + draws !== 5) {
                if (turn) showHand(hand);
            } else {
                turn = false;
                if (wins > losses || draws > losses) basic.showString("YOU WON!");
                else basic.showString("YOU LOST!");
                wins = 0;
                losses = 0;
                draws = 0;
                turn = true;
            }
        });
    }
}
