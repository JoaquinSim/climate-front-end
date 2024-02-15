import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClimateModel } from 'src/app/models/climate.model';
import { ClimateService } from 'src/app/services/climete.service';
import { Time } from '@angular/common';
import { AuthGuard } from 'src/app/auth.guard';

@Component({
  selector: 'app-climate',
  templateUrl: './climate.component.html',
  styleUrls: ['./climate.component.css'],
})
export class ClimateComponent {
  API_KEY = '28c9a369f132111726aaa6aa34268128';
  access!: boolean;
  climates: any[] = [];
  climatesQ: any;
  climatesC: any;
  climatesG: any;
  date = new Date();
  day = this.date.toLocaleString('es-ES', { weekday: 'short' });
  dia = this.date.getDate();
  img! : string;

  dataQ: any;
  optionsQ: any;

  dataC: any;
  optionsC: any;

  dataG: any;
  optionsG: any;

  month: string[] = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];

  tempQOptions: {} = {};
  humidityQOptions: {} = {};
  rainQOptions: {} = {};

  tempCOptions: {} = {};
  humidityCOptions: {} = {};
  rainCOptions: {} = {};

  tempGOptions: {} = {};
  humidityGOptions: {} = {};
  rainGOptions: {} = {};

  constructor(
    private router: Router,
    private climateService: ClimateService,
    private auth: AuthGuard
  ) {
    this.authCheck();
    this.findClimate();

    this.dataQuito();
    this.dataCuenca();
    this.dataGuayaquil();
  }

  login() {
    this.router.navigate(['login']);
  }

  inicio() {
    this.router.navigate(['dashboard/climate']);
  }

  authCheck() {
    if (this.auth.canActivate() === true) {
      this.access = false;
    } else {
      this.access = true;
    }
  }

  //Clima Quito
  dataQuito() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    let temp: string[] = [];
    let hum: string[] = [];
    let fecha: Date;
    let pre: string[] = []
    let fechaFormateada: string[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.reverse()
      this.climates.forEach((data) => {
        if (data.city === 'Quito') {
          fecha = new Date(data.time);
          fechaFormateada.push(JSON.stringify(fecha.getDate()));
          temp.push(data.temperature);
          hum.push(data.humidity);
          pre.push(data.volumen);
        }
      });
      this.dataQ = {
        labels: fechaFormateada,
        datasets: [
          {
            label: 'Temperatura',
            data: temp,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4,
          },
          {
            label: 'Humedad',
            data: hum,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.4,
          },
          {
            label: 'Precipitación',
            data: pre,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--green-500'),
            tension: 0.4,
          },
        ],
      };
      this.optionsQ = {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    });
  }

  //Clima Cuenca
  dataCuenca() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    let temp: string[] = [];
    let hum: string[] = [];
    let fecha: Date;
    let pre: string[] = []
    let fechaFormateada: string[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.reverse()
      this.climates.forEach((data) => {
        if (data.city === 'Cuenca') {
          fecha = new Date(data.time);
          fechaFormateada.push(JSON.stringify(fecha.getDate()));
          temp.push(data.temperature);
          hum.push(data.humidity);
          pre.push(data.volumen);
        }
      });
      this.dataC = {
        labels: fechaFormateada,
        datasets: [
          {
            label: 'Temperatura',
            data: temp,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4,
          },
          {
            label: 'Humedad',
            data: hum,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.4,
          },
          {
            label: 'Precipitación',
            data: pre,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--green-500'),
            tension: 0.4,
          },
        ],
      };
      this.optionsC = {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    });
  }

  //Clima guayaquil
  dataGuayaquil() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue(
      '--text-color-secondary'
    );
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
    let temp: string[] = [];
    let hum: string[] = [];
    let fecha: Date;
    let pre: string[] = []
    let fechaFormateada: string[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.reverse()
      this.climates.forEach((data) => {
        if (data.city === 'Guayaquil') {
          fecha = new Date(data.time);
          fechaFormateada.push(JSON.stringify(fecha.getDate()));
          temp.push(data.temperature);
          hum.push(data.humidity);
          pre.push(data.volumen);
        }
      });
      this.dataG = {
        labels: fechaFormateada,
        datasets: [
          {
            label: 'Temperatura',
            data: temp,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4,
          },
          {
            label: 'Humedad',
            data: hum,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--pink-500'),
            tension: 0.4,
          },
          {
            label: 'Precipitación',
            data: pre,
            fill: false,
            borderColor: documentStyle.getPropertyValue('--green-500'),
            tension: 0.4,
          },
        ],
      };
      this.optionsG = {
        stacked: false,
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
          legend: {
            labels: {
              color: textColor,
            },
          },
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            ticks: {
              color: textColorSecondary,
            },
            grid: {
              color: surfaceBorder,
            },
          },
        },
      };
    });
  }

  findClimate() {
    fetch(
      `    https://api.openweathermap.org/data/2.5/weather?q=${'Quito'}&appid=${
        this.API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        data.rain = parseFloat(JSON.stringify(data.rain).substring(6, 10))
        data.main.temp = data.main.temp - 273.15
        if(data.main.temp > 24){
          this.img = 'https://cdn-icons-png.flaticon.com/512/5367/5367718.png'
        }else{
          this.img = 'https://cdn.icon-icons.com/icons2/2211/PNG/512/weather_winter_cloud_cold_icon_134158.png'
        }
        this.climatesQ = data;
      });

    fetch(
      `    https://api.openweathermap.org/data/2.5/weather?q=${'Cuenca'}&appid=${
        this.API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        data.main.temp = data.main.temp - 273.15
        this.climatesC = data;
      });

    fetch(
      `    https://api.openweathermap.org/data/2.5/weather?q=${'Guayaquil'}&appid=${
        this.API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        data.main.temp = data.main.temp - 273.15
        this.climatesG = data;
      });
  }

  saveClimate(city: string, file: string) {
    this.climateService.pdf(city, 'Clima actual');
  }
}
