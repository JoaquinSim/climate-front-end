import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClimateModel } from 'src/app/models/climate.model';
import { ClimateService } from 'src/app/services/climete.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-climate-config-form',
  templateUrl: './climate-config-form.component.html',
  styleUrls: ['./climate-config-form.component.css'],
})
export class ClimateConfigFormComponent {
  id?: any;
  temp?: number;
  climate?: ClimateModel;
  climates: any[] = [];
  form: FormGroup;
  time: any = new Date();
  cities: string[] = []
  city: any;
  API_TOKEN =
    'Qf9AHY-ewtEQ1UFgEXCvhBv1yEIzUUapjPLXm8qog-dAsnWL43kr_E9WeTTENXOnQQ4';
  API_KEY = '28c9a369f132111726aaa6aa34268128';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private climateService: ClimateService
  ) {
    //this.findPosition();
    this.form = this.newForm();
    this.findClimate();
    this.findPosition();
    this.citys()
  }

  newForm(): FormGroup {
    return this.formBuilder.group({
      city: [null, [Validators.required]],
      temperature: [null, [Validators.required]],
      humidity: [null, [Validators.required]],
      velocity: [null, [Validators.required]],
      pressure: [null, [Validators.required]],
    });
  }

  findPosition() {
    this.city = JSON.parse(String(localStorage.getItem('city')));
    fetch(
      `    https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        this.climates.push(data);
        setInterval(() => {
          const climate = {
            city: data.name,
            temperature: data.main.temp - 273.15,
            humidity: data.main.humidity,
            velocity: data.wind.speed,
            pressure: data.main.pressure,
            time: new Date(),
          };
          //this.takeData(climate)
        }, 2000);
      });
  }

  findClimate() {
    this.id = JSON.parse(String(localStorage.getItem('id')));
    this.climateService.findOne(this.id).subscribe((res) => {
      this.climate = res;
      this.form.patchValue(res);
    });
  }

  create(climate: ClimateModel) {
    const clima = {
      city: climate.city,
      temperature: climate.temperature,
      humidity: climate.humidity,
      velocity: climate.velocity,
      pressure: climate.pressure,
      time: new Date(),
    };
    this.climateService.create(clima).subscribe((res) => {
      this.form.reset();
      this.close();
    });
  }

  update(climate: ClimateModel) {
    this.climateService.update(this.id, climate).subscribe(() => {
      this.form.reset();
      this.close();
    });
  }

  close() {
    localStorage.removeItem('id');
    localStorage.removeItem('city');
    this.router.navigate(['dashboard/climate']);
  }

  onSubmit() {
    if (this.id) {
      this.update(this.form.value);
    } else {
      if (this.form.valid) {
        this.create(this.form.value);
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Verifique todos los campos',
          icon: 'error',
          confirmButtonText: 'Cool',
        });
      }
    }
  }

  takeData(time: any) {
    const clima = {
      city: time.name,
      temperature: time.main.temp - 273.15,
      humidity: time.main.humidity,
      velocity: time.wind.speed,
      time: new Date(),
      pressure: time.main.pressure,
      volumen: parseFloat(JSON.stringify(time.rain).substring(6, 10)),
    };
    console.log(clima);
    this.climateService.create(clima).subscribe((res) => {
      this.form.reset();
      this.close();
    });
  }

  citys() {
    this.climateService.getCities().subscribe((res) =>{
      this.cities = res
      this.cities.sort()
    })
  }

}
  