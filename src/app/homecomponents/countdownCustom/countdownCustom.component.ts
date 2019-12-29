import {Component, ViewEncapsulation} from '@angular/core';

@Component({
    selector: 'app-countdownCustom',
    templateUrl: './countdownCustom.component.html',
    styleUrls: ['./countdownCustom.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class countdownCustomComponent {
    
    PR2018 = new Date(2020, 3, 11, 7, 30);
    date: any = this.PR2018

    /* config: CountdownConfig = {
        stopTime: this.date,
       className: 'flip-cd',
        repaint: function () {
            let me: any = this,
                content: string;

            me.hands.forEach((hand: any) => {
                if (hand.lastValue !== hand.value) {
                    content = '';
                    let cur = me.toDigitals(hand.value + 1, hand.bits).join(''),
                        next = me.toDigitals(hand.value, hand.bits).join('');

                    hand.node.innerHTML = `
                    <span class="count curr top">${cur}</span>
                    <span class="count next top">${next}</span>
                    <span class="count next bottom">${next}</span>
                    <span class="count curr bottom">${cur}</span>
                `;
                    hand.node.parentElement.className = 'time';
                    setTimeout(() => {
                        hand.node.parentElement.className = 'time flip';
                    });
                }
            });
        },
    }*/
}
