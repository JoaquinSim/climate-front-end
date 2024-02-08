import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { ClimateComponent } from './modules/core/climate/climate.component';
import { ClimateConfigComponent } from './modules/core/dashboard/climate-config/climate-config.component';
import { ClimateConfigFormComponent } from './modules/core/dashboard/climate-config-form/climate-config-form.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: ClimateComponent},
  {path: 'login', component: LoginComponent},
  {path: 'dashboard/climate', component: ClimateConfigComponent, canActivate: [AuthGuard]},
  {path: 'dashboard/climate-form', component: ClimateConfigFormComponent, canActivate: [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
