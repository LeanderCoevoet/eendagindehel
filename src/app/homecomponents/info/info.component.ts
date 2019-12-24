import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  PARIJSROUBAIX = "04 April 2020";

  events = [
    {
      id: 0,
      title: 'Verwelkoming in Ganzendreef 2 te Lokeren',
      content: 'In afwachting van iedereen zijn aanwezigheid is er een verwelkoming met bubbels en een hapje.',
      date: '7:45 '+this.PARIJSROUBAIX,
      icon: 'https://image.flaticon.com/icons/svg/214/214335.svg'
    },
    {
      id: 1,
      title: 'Stipt vertrek',
      content: 'We vertrekken naar onze eerste stopplaats.',
      date: '8:30 '+this.PARIJSROUBAIX,
      icon: 'https://image.flaticon.com/icons/svg/1006/1006517.svg'
    },
    {
      id: 2,
      title: 'Aankomst 1ste stopplaats',
      content: 'Hier nemen we een ontbijt. Het ontbijt is traditie gewijs spek met eieren.',
      date: '11:15 '+this.PARIJSROUBAIX,
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    },
    {
      id: 3,
      title: 'Vertrek naar de Carrefour de l’arbre',
      content: 'Na de passage vertrekken we richting de Carrefour de l’arbre voor de ultieme sfeerbeleving van de kasseiklassieker. Tijdens de busrit kan de koers gevolgd worden via Sporza op uw smartphone.',
      date: '13:30 '+this.PARIJSROUBAIX,
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    },
    {
      id: 4,
      title: 'Aankomst op de Carrefour de l’arbre',
      content: 'Ter plaatse kan u de koers op groot scherm beleven of dompel u onder tussen de wielerliefhebbers om van de sfeer te genieten!',
      date: '14:30 '+this.PARIJSROUBAIX,
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    },
    {
      id: 5,
      title: 'Avondmaal',
      content: 'Na de laatste renner keren we terug naar de bus om na te kaarten en te kokkerellen.',
      date: '17:15 '+this.PARIJSROUBAIX,
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    },
    {
      id: 6,
      title: 'Terugreis naar Lokeren',
      content: 'Geen getreur want we zorgen nog voor de nodige animatie aan boord van de bus.',
      date: '20:00 '+this.PARIJSROUBAIX,
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    },
    {
      id: 7,
      title: 'Aankomst in Lokeren',
      content: 'Dan zit deze geweldige dag erop.',
      date: '21:00 '+this.PARIJSROUBAIX,
      icon: 'https://image.flaticon.com/icons/svg/1141/1141771.svg'
    }
  ];

  constructor() { }

  ngOnInit() {
  }
}
