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
  date = new Date()
  day = this.date.toLocaleString('es-ES', { weekday: 'short' });
  dia = this.date.getDate();

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
    this.findClimate()

    this.tempQData();
    this.humidityQData();
    this.rainQData();

    this.tempCData();
    this.humidityCData();
    this.rainCData();

    this.tempGData();
    this.humidityGData();
    this.rainGData();
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
  tempQData(): {} {
    let month: string = '';
    const dpsQ: any[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.forEach((data) => {
        var fecha = new Date(data.time);
        for (let i = 0; i < this.month.length; i++) {
          if (parseInt(data.time.substr(6, 1)) == i) {
            month = this.month[i - 1];
          }
        }
        var fechaFormateada = fecha.getDate();
        if (data.city === 'Quito') {
          dpsQ.push({
            x: fechaFormateada,
            y: data.temperature,
          });
          this.tempQOptions = {
            zoomEnabled: true,
            exportEnabled: true,
            axisY: {
              title: 'Grados de temperatura C°',
            },
            theme: 'light2',
            data: [
              {
                type: 'line',
                xValueFormatString: 'MMM DD, YYYY',
                name: 'Temperatura',
                dataPoints: dpsQ,
              },
            ],
            title: {
              text: `Historico temperatura mes de ${month}`,
            },
          };
        }
      });
    });
    return this.tempQOptions;
  }

  humidityQData() {
    let month: string = '';
    const hpsQ: any[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.forEach((data) => {
        var fecha = new Date(data.time);
        for (let i = 0; i < this.month.length; i++) {
          if (parseInt(data.time.substr(6, 1)) == i) {
            month = this.month[i - 1];
          }
        }
        var fechaFormateada = fecha.getDate();
        if (data.city === 'Quito') {
          hpsQ.push({
            x: fechaFormateada,
            y: data.humidity,
          });
          this.humidityQOptions = {
            zoomEnabled: true,
            exportEnabled: true,
            axisY: {
              title: 'Porcentaje de humedad %',
            },
            theme: 'light2',
            data: [
              {
                type: 'line',
                xValueFormatString: 'MMM DD, YYYY',
                name: 'Porcentaje',
                dataPoints: hpsQ,
              },
            ],
            title: {
              text: `Historico humedad mes de ${month}`,
            },
          };
        }
      });
    });

    return this.humidityQOptions;
  }

  rainQData() {
    let month: string = '';
    const rpsQ: any[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.forEach((data) => {
        var fecha = new Date(data.time);
        for (let i = 0; i < this.month.length; i++) {
          if (parseInt(data.time.substr(6, 1)) == i) {
            month = this.month[i - 1];
          }
        }
        var fechaFormateada = fecha.getDate();
        if (data.city === 'Quito') {
          rpsQ.push({
            x: fechaFormateada,
            y: data.temperature,
          });
          this.rainQOptions = {
            zoomEnabled: true,
            exportEnabled: true,
            axisY: {
              title: 'Grados de temperatura C°',
            },
            theme: 'light2',
            data: [
              {
                type: 'line',
                xValueFormatString: 'MMM DD, YYYY',
                name: 'Temperatura',
                dataPoints: rpsQ,
              },
            ],
            title: {
              text: `Historico precipitación mes de ${month}`,
            },
          };
        }
      });
    });
    return this.rainQOptions;
  }

  //Clima Cuenca
  tempCData(): {} {
    let month: string = '';
    const dpsC: any[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.forEach((data) => {
        var fecha = new Date(data.time);
        for (let i = 0; i < this.month.length; i++) {
          if (parseInt(data.time.substr(6, 1)) == i) {
            month = this.month[i - 1];
          }
        }
        var fechaFormateada = fecha.getDate();
        if (data.city === 'Cuenca') {
          dpsC.push({
            x: fechaFormateada,
            y: data.temperature,
          });
          this.tempCOptions = {
            zoomEnabled: true,
            exportEnabled: true,
            axisY: {
              title: 'Grados de temperatura C°',
            },
            theme: 'light2',
            data: [
              {
                type: 'line',
                xValueFormatString: 'MMM DD, YYYY',
                name: 'Temperatura',
                dataPoints: dpsC,
              },
            ],
            title: {
              text: `Historico temperatura mes de ${month}`,
            },
          };
        }
      });
    });
    return this.tempCOptions;
  }

  humidityCData() {
    let month: string = '';
    const hpsC: any[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.forEach((data) => {
        var fecha = new Date(data.time);
        for (let i = 0; i < this.month.length; i++) {
          if (parseInt(data.time.substr(6, 1)) == i) {
            month = this.month[i - 1];
          }
        }
        var fechaFormateada = fecha.getDate();
        if (data.city === 'Cuenca') {
          hpsC.push({
            x: fechaFormateada,
            y: data.humidity,
          });
          this.humidityCOptions = {
            zoomEnabled: true,
            exportEnabled: true,
            axisY: {
              title: 'Porcentaje de humedad %',
            },
            theme: 'light2',
            data: [
              {
                type: 'line',
                xValueFormatString: 'MMM DD, YYYY',
                name: 'Porcentaje',
                dataPoints: hpsC,
              },
            ],
            title: {
              text: `Historico humedad mes de ${month}`,
            },
          };
        }
      });
    });

    return this.humidityCOptions;
  }

  rainCData() {
    let month: string = '';
    const rpsC: any[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.forEach((data) => {
        var fecha = new Date(data.time);
        for (let i = 0; i < this.month.length; i++) {
          if (parseInt(data.time.substr(6, 1)) == i) {
            month = this.month[i - 1];
          }
        }
        var fechaFormateada = fecha.getDate();
        if (data.city === 'Cuenca') {
          rpsC.push({
            x: fechaFormateada,
            y: data.temperature,
          });
          this.rainCOptions = {
            zoomEnabled: true,
            exportEnabled: true,
            axisY: {
              title: 'Grados de temperatura C°',
            },
            theme: 'light2',
            data: [
              {
                type: 'line',
                xValueFormatString: 'MMM DD, YYYY',
                name: 'Temperatura',
                dataPoints: rpsC,
              },
            ],
            title: {
              text: `Historico Presipitaciones mes de ${month}`,
            },
          };
        }
      });
    });
    return this.rainCOptions;
  }

  //Clima guayaquil
  tempGData(): {} {
    let month: string = '';
    const dpsG: any[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.forEach((data) => {
        var fecha = new Date(data.time);
        for (let i = 0; i < this.month.length; i++) {
          if (parseInt(data.time.substr(6, 1)) == i) {
            month = this.month[i - 1];
          }
        }
        var fechaFormateada = fecha.getDate();
        if (data.city === 'Guayaquil') {
          dpsG.push({
            x: fechaFormateada,
            y: data.temperature,
          });
          this.tempGOptions = {
            zoomEnabled: true,
            exportEnabled: true,
            axisY: {
              title: 'Grados de temperatura C°',
            },
            theme: 'light2',
            data: [
              {
                type: 'line',
                xValueFormatString: 'MMM DD, YYYY',
                name: 'Temperatura',
                dataPoints: dpsG,
              },
            ],
            title: {
              text: `Historico temperatura mes de ${month}`,
            },
          };
        }
      });
    });
    return this.tempGOptions;
  }

  humidityGData() {
    let month: string = '';
    const hpsG: any[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.forEach((data) => {
        var fecha = new Date(data.time);
        for (let i = 0; i < this.month.length; i++) {
          if (parseInt(data.time.substr(6, 1)) == i) {
            month = this.month[i - 1];
          }
        }
        var fechaFormateada = fecha.getDate();
        if (data.city === 'Guayaquil') {
          hpsG.push({
            x: fechaFormateada,
            y: data.humidity,
          });
          this.humidityGOptions = {
            zoomEnabled: true,
            exportEnabled: true,
            axisY: {
              title: 'Porcentaje de humedad %',
            },
            theme: 'light2',
            data: [
              {
                type: 'line',
                xValueFormatString: 'MMM DD, YYYY',
                name: 'Porcentaje',
                dataPoints: hpsG,
              },
            ],
            title: {
              text: `Historico humedad mes de ${month}`,
            },
          };
        }
      });
    });

    return this.humidityGOptions;
  }

  rainGData() {
    let month: string = '';
    const rpsG: any[] = [];
    this.climateService.findClimates().subscribe((res) => {
      this.climates = res;
      this.climates.forEach((data) => {
        var fecha = new Date(data.time);
        for (let i = 0; i < this.month.length; i++) {
          if (parseInt(data.time.substr(6, 1)) == i) {
            month = this.month[i - 1];
          }
        }
        var fechaFormateada = fecha.getDate();
        if (data.city === 'Guayaquil') {
          rpsG.push({
            x: fechaFormateada,
            y: data.temperature,
          });
          this.rainGOptions = {
            zoomEnabled: true,
            exportEnabled: true,
            axisY: {
              title: 'Grados de temperatura C°',
            },
            theme: 'light2',
            data: [
              {
                type: 'line',
                xValueFormatString: 'MMM DD, YYYY',
                name: 'Temperatura',
                dataPoints: rpsG,
              },
            ],
            title: {
              text: `Historico Presipitaciones mes de ${month}`,
            },
          };
        }
      });
    });
    return this.rainGOptions;
  }

  findClimate() {
    fetch(
      `    https://api.openweathermap.org/data/2.5/weather?q=${'Quito'}&appid=${
        this.API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        this.climatesQ = data;
        console.log(this.climatesQ.main)
      });

      fetch(
        `    https://api.openweathermap.org/data/2.5/weather?q=${'Cuenca'}&appid=${
          this.API_KEY
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          this.climatesC = data;
        });


        
      fetch(
        `    https://api.openweathermap.org/data/2.5/weather?q=${"Guayaquil"}&appid=${
          this.API_KEY
        }`
      )
        .then((response) => response.json())
        .then((data) => {
          this.climatesG = data;
        });
  }

  saveClimate(city:string, file:string){
    this.climateService.pdf(city, 'Clima actual')
  }
}
