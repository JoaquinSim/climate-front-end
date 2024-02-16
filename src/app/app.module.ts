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
import { HeaderComponent } from './modules/core/dashboard/header/header.component';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { ChartModule } from 'primeng/chart';
import { SplitterModule } from 'primeng/splitter';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ToastModule } from 'primeng/toast';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';
import { ImageModule } from 'primeng/image';
import { TriStateCheckboxModule } from 'primeng/tristatecheckbox';

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
    TabViewModule,
    AccordionModule,
    DividerModule,
    DropdownModule,
    SplitterModule,
    ChartModule,
    ConfirmDialogModule,
    InputSwitchModule,
    ToastModule,
    FieldsetModule,
    PanelModule,
    FormsModule,
    ChipsModule,
    ImageModule,
    TriStateCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
