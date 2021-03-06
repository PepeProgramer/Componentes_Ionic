import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {
  fechaNacimiento: Date = new Date();
  customPickerOptions;
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) => {
          console.log(evento.day.value);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false; // esto hace que no salga del datetime
        }
      }]
  };
  }

  cambiarFecha(event) {
    console.log('ionchange', event);
    console.log('Date', new Date(event.detail.value));
  }
}
