import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-subscription',
    templateUrl: './subscription.component.html',
    styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {

    _counter = 1;
    constructor() {
    }

    ngOnInit() {

        const aantalSelect = document.getElementById('aantal');
        aantalSelect.addEventListener('blur', (e: Event) => {
            this.validateAantal()
        }
            , false);


        const form = document.getElementById('inschrijving');
        form.addEventListener('submit', (e: Event) => {
            this.validateForm(e)
        }, false);
    }

    validateAantal() {
        const inhoud = (<HTMLInputElement>document.getElementById('aantal')).value;

        while (this._counter !== +inhoud) {


            if (this._counter < +inhoud) {

                this._counter++;
                const oClone = document.getElementById('invul').cloneNode(true);

                (<HTMLInputElement>oClone).id = 'invul' + this._counter;
                document.getElementById('aanvullen').appendChild(oClone);

            } else if (this._counter > +inhoud) {

                const delteteClone = document.getElementById('invul' + this._counter);

                this._counter--;

                delteteClone.parentNode.removeChild(delteteClone);
            }
        }
    }


    validateForm(event) {


        if (!this.validateNaam() || !this.valideerEmail() || !this.valideerAdres1() || !this.valideerAdres2()) {
            event.preventDefault();

        }
        this.validateNaam();
        this.valideerEmail();

        this.valideerAdres1();
        this.valideerAdres2();
        this.valideerGsm();
    }

    valideerGsm() {
        const gsm = (<HTMLInputElement>document.getElementById('gsm')).value;
        const feedback = document.getElementById('gsmFout');
        feedback.innerHTML = '';
        if (!this.isvalideerGsm(gsm)) {
            feedback.innerHTML = 'gsmnummer bestaat uit deze structuur xxxx xx xx xx';
            return false;
        } else {
            feedback.innerHTML = '';
        }
        return true;
    }


    validateNaam() {
        const inhoud = (<HTMLInputElement>document.getElementById('naam')).value;
        const voornaam = (<HTMLInputElement>document.getElementById('voornaam')).value;
        const feedback = document.getElementById('naamFout');


        if (!(inhoud.length < 2 || voornaam.length < 2)) {
            feedback.innerHTML = '';
            return true;
        } else {
            feedback.innerHTML = 'Uw voornaam/achternaam moet minstens 2 tekens lang zijn';
            return false;
        }
    }

    valideerEmail() {
        const email = (<HTMLInputElement>document.getElementById('email')).value;
        const feedback = document.getElementById('emailFout');
        feedback.innerHTML = '';
        if (!this.isGeldigEmailAdres(email)) {
            feedback.innerHTML = 'voorbeeld@mail.com';
            return false;
        } else {
            feedback.innerHTML = '';
        }
        return true;

    }

    isGeldigEmailAdres(email) {
        const patt = new RegExp('@[a-z].[a-z]');
        return patt.test(email);
    }




    isvalideerGsm(gsm) {
        const patt = new RegExp('/^((\+|00)32\s?|0)4(60|[789]\d)(\s?\d{2}){3}$/');
        return patt.test(gsm);
    }


    valideerAdres1() {
        const straat = (<HTMLInputElement>document.getElementById('naam')).value;
        const straatnummer = (<HTMLInputElement>document.getElementById('voornaam')).value;
        const feedback = document.getElementById('adres1Fout');

        if (straat.length < 2) {
            feedback.innerHTML = 'Uw straat moet ingevuld zijn';
            return false;
        } else if (+straatnummer > 0 && +straatnummer < 999) {
            feedback.innerHTML = 'Uw nummer moet tussen 1 en 999 zijn';
            return false;
        } else {
            feedback.innerHTML = '';
        }
        return true;
    }

    valideerAdres2() {
        const postcode = (<HTMLInputElement>document.getElementById('postcode')).value;
        const stad = (<HTMLInputElement>document.getElementById('stad')).value;
        const feedback = document.getElementById('adres2Fout');

        if (stad.length < 2) {
            feedback.innerHTML = 'Uw stad moet ingevuld zijn';
            return false;
        } else if (!this.isvalideerPostcode(postcode)) {
            feedback.innerHTML = 'postcode bestaat uit 4 cijfers';
            return false;
        } else {
            feedback.innerHTML = '';
        }

        return true;
    }


    isvalideerPostcode(postcode) {
        if (postcode.length === 4) {
            return true;
        } else {
            return false;
        }
    }
}


