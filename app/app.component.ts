import { Component, ViewChild ,HostListener} from '@angular/core';
import { SelectItem, Dropdown } from 'primeng/api';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 5';

  cars: SelectItem[];
  selectedCar: string = 'BMW';

  counter = 0;

  @ViewChild('dd') dropdown: Dropdown;

  constructor() {
    this.cars = [
        /*
            {
              label: '<>',
              value: "",
              title: true,
              titleLabel: "Descripción",
              titleValue: "Nombre"
            },
            */
            {label: "(TODO)", value: "(TODO)"},
            {label: "ción descripción bien pero bien larga para ver como se muestra en la lista 1", value: "ción"},
            {label: 'Audi descripción bien pero bien larga para ver como se muestra en la lista 2', value: 'aAudi'},
            {label: 'BMW descripción bien pero bien larga para ver como se muestra en la lista 3', value: 'bBMW'},
            {label: 'Fiat descripción bien pero bien larga para ver como se muestra en la lista 4', value: 'cFiat'},
            {label: 'Ford', value: 'dFord', disabled: true},
            {label: 'Honda', value: 'eHonda'},
            {label: 'Jaguar', value: 'fJaguar'},
            {label: 'Mercedes', value: 'gMercedes'},
            {label: 'Renault', value: 'hRenault valor largo'},
            {label: 'VW', value: 'iVW'},
            {label: 'Volvo', value: 'jVolvo'},
            {label: 'a b', value:"ala"},
            {label: 'a c', value:"ola"}
        ];
  }
 @HostListener("window:scroll", ['$event'])
  onWindowScroll() {
     if(this.dropdown.panelVisible){
         this.dropdown.hide();
     }
  }

}
