import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { ClimateModel } from 'src/app/models/climate.model';
import { ClimateService } from 'src/app/services/climete.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-climate-config',
  templateUrl: './climate-config.component.html',
  styleUrls: ['./climate-config.component.css'],
})
export class ClimateConfigComponent {
  products!: string[];
  tabs: { title: string; content: string }[] = [];
  temp?: number;
  climateQ: ClimateModel[] = [];
  climatesQ: any[] = [];
  climateC: ClimateModel[] = [];
  climatesC: any[] = [];
  climateG: ClimateModel[] = [];
  climatesG: any[] = [];
  time?: Date;

  API_KEY = '28c9a369f132111726aaa6aa34268128';

  constructor(private router: Router, private climateService: ClimateService) {
    this.findPosition();
    this.findClimates();
  }

  findPosition() {
    fetch(
      `    https://api.openweathermap.org/data/2.5/weather?q=${'Quito'}&appid=${
        this.API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        this.climatesQ.push(data);
      });

    fetch(
      `    https://api.openweathermap.org/data/2.5/weather?q=${'Cuenca'}&appid=${
        this.API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        this.climatesC.push(data);
      });

    fetch(
      `    https://api.openweathermap.org/data/2.5/weather?q=${'Guayaquil'}&appid=${
        this.API_KEY
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.climatesG.push(data);
      });
  }

  findClimates() {
    this.climateService.findClimates().subscribe((res) => {
      res.forEach((element: any) => {
        if (element.city == 'Quito') {
          console.log(element.city);
          this.climateQ.push(element);
        }

        if (element.city == 'Cuenca') {
          console.log(element.city);
          this.climateC.push(element);
        }

        if (element.city == 'Guayaquil') {
          console.log(element.city);
          this.climateG.push(element);
        }
      });
    });
  }

  deleteClimate(id: string) {
    Swal.fire({
      title: 'Eliminar lote?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Eliminar',
      denyButtonText: `Cancelar`,
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id);
        this.climateService.remove(id).subscribe(() => {
          Swal.fire('Eliminado!', '', 'success');
          window.location.reload();
        });
      } else if (result.isDenied) {
        Swal.fire('Cancelado', '', 'info');
      }
    });
  }

  updateClimate(id: string) {
    localStorage.setItem('id', JSON.stringify(id));
    this.router.navigate(['dashboard/climate-form']);
  }

  takeData(time: any) {
    this.climateService.create(time).subscribe((res) => {
      location.reload();
    });
  }

  crear(climate: any) {
    climate.forEach((element: any) => {
      console.log(element.city);
      localStorage.setItem('city', JSON.stringify(element.city));
    });
    this.router.navigate(['dashboard/climate-form']);
  }

  save(file: string) {
    this.climateService.pdfTake('Tomas meteorologicas');
  }

}
