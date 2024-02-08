import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthHttpService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authHttpService: AuthHttpService,
    private route: Router
  ) {
    this.form = this.newForm();
  }

  
  newForm(): FormGroup {
    return this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.login();
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Verifique todos los campos',
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    }
  }

  login() {
    this.authHttpService.login(this.form.value).subscribe(
      (response) => {
        this.loading = true;

        setTimeout(() => {
            this.loading = false
            sessionStorage.setItem(
              'accessToken',
              JSON.stringify(response.data.accessToken)
              
            );
            this.route.navigate(['dashboard/climate']);
        }, 1000);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  back(){
    this.route.navigate(['']);
  }
}
