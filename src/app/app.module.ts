import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/auth/login/login.component';
import { ClimateComponent } from './modules/core/climate/climate.component';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ClimateConfigComponent } from './modules/core/dashboard/climate-config/climate-config.component';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ClimateConfigFormComponent } from './modules/core/dashboard/climate-config-form/climate-config-form.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { HeaderComponent } from './modules/core/dashboard/header/header.component';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { ListboxModule } from 'primeng/listbox';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClimateComponent,
    ClimateConfigComponent,
    ClimateConfigFormComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
    PasswordModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    TableModule,
    CardModule,
    InputNumberModule,
    CanvasJSAngularChartsModule,
    TabViewModule,
    AccordionModule,
    DividerModule,
    DropdownModule,
    ListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
