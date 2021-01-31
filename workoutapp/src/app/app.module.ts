import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpParams} from '@angular/common/http'
import { AppComponent } from './app.component';
import { WelcomepageComponent } from './welcomepage/welcomepage.component';
import { NavigationbarComponent } from './welcomepage/navigationbar/navigationbar.component';
import { FooterComponent } from './welcomepage/footer/footer.component';
import { HeaderComponent } from './welcomepage/header/header.component';
import { JakdzialaComponent } from './welcomepage/jakdziala/jakdziala.component';
import { OpinieComponent } from './welcomepage/opinie/opinie.component';
import { DzialaniaaplikacjiComponent } from './welcomepage/dzialaniaaplikacji/dzialaniaaplikacji.component';
import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { ZarejestrujComponent } from './zarejestruj/zarejestruj.component';
import { NiepamietaszhaslaComponent } from './niepamietaszhasla/niepamietaszhasla.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { KlatkaComponent } from './dashboard/cwiczenia/klatka/klatka.component';
import { BarkiComponent } from './dashboard/cwiczenia/barki/barki.component';
import { PlecyComponent } from './dashboard/cwiczenia/plecy/plecy.component';
import { BrzuchComponent } from './dashboard/cwiczenia/brzuch/brzuch.component';
import { NogiComponent } from './dashboard/cwiczenia/nogi/nogi.component';
import { BicepsComponent } from './dashboard/cwiczenia/biceps/biceps.component';
import { TricepsComponent } from './dashboard/cwiczenia/triceps/triceps.component';
import { KontoComponent } from './dashboard/konto/konto.component';
import { UserServiceService } from './service/user-service.service';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthGuardService } from './service/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeximateModule } from 'ngx-teximate';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatPaginatorModule} from '@angular/material/paginator';
import { authInterceptorProviders } from './auth.interceptor';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ValidateEqualModule } from 'ng-validate-equal';
import { ChangeEmailComponent } from './dashboard/konto/change-email/change-email.component';
import { ChangeLoginComponent } from './dashboard/konto/change-login/change-login.component';
import { ChangePassComponent } from './dashboard/konto/change-pass/change-pass.component';
import { UsunKontoComponent } from './dashboard/konto/usun-konto/usun-konto.component';
import { DodajtreningComponent } from './dashboard/trening/dodajtrening/dodajtrening.component';
import { HistoriatreningowComponent } from './dashboard/trening/historiatreningow/historiatreningow.component';
import { DodajpomiarComponent } from './dashboard/pomiary/dodajpomiar/dodajpomiar.component';
import { HisotriapomiarowComponent } from './dashboard/pomiary/hisotriapomiarow/hisotriapomiarow.component';
import { RekordyComponent } from './dashboard/statystyki/rekordy/rekordy.component';
import { StatystykitreningowComponent } from './dashboard/statystyki/statystykitreningow/statystykitreningow.component';
import { StatystykipomiarowComponent } from './dashboard/statystyki/statystykipomiarow/statystykipomiarow.component';
import { ListacwiczenComponent } from './dashboard/rutynyicwiczenia/listacwiczen/listacwiczen.component';
import { ListarutynComponent } from './dashboard/rutynyicwiczenia/listarutyn/listarutyn.component';
import { StworzprzykladowarutyneComponent } from './dashboard/rutynyicwiczenia/stworzprzykladowarutyne/stworzprzykladowarutyne.component';
import { InformacjeComponent } from './dashboard/konto/informacje/informacje.component';
import { ZmieninformacjeComponent } from './dashboard/konto/zmieninformacje/zmieninformacje.component';

const routes: Routes = [
  { path: '', component: WelcomepageComponent ,
 },
  { path: 'login', component: LoginComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  
  { path: 'zarejestruj', component: ZarejestrujComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuardService],
children:[
  { path: 'zmien-haslo', component: ChangePassComponent },
  { path: 'zmien-email', component: ChangeEmailComponent },
  { path: 'zmien-login', component: ChangeLoginComponent },
  { path: 'usun-konto', component: UsunKontoComponent },
  { path: '', component: InformacjeComponent },
  { path: 'zmien-informacje', component: ZmieninformacjeComponent },
  { path: 'dodaj-trening', component: DodajtreningComponent },
  { path: 'historia-treningu', component: HistoriatreningowComponent },
  { path: 'dodaj-pomiar', component: DodajpomiarComponent },
  { path: 'historia-pomiarow', component: HisotriapomiarowComponent },
  { path: 'rekordy', component: RekordyComponent },
  { path: 'statystyki-pomiarow', component: StatystykipomiarowComponent },
  { path: 'statystyki-treningow', component: StatystykitreningowComponent },
  { path: 'lista-cwiczen', component: ListacwiczenComponent },
  { path: 'lista-rutyn', component: ListarutynComponent },
  { path: 'stworz-rutyne', component: StworzprzykladowarutyneComponent },

]},

  { path: 'niepamietaszhasla', component: NiepamietaszhaslaComponent },
  { path: '**', redirectTo: '' }
]
@NgModule({
  declarations: [
    AppComponent,
    WelcomepageComponent,
    NavigationbarComponent,
    FooterComponent,
    HeaderComponent,
    JakdzialaComponent,
    OpinieComponent,
    DzialaniaaplikacjiComponent,
    ZarejestrujComponent,
    NiepamietaszhaslaComponent,
    DashboardComponent,
    LoginComponent,
    KlatkaComponent,
    BarkiComponent,
    PlecyComponent,
    BrzuchComponent,
    NogiComponent,
    BicepsComponent,
    TricepsComponent,
    KontoComponent,
    ChangePasswordComponent,
    UsunKontoComponent,
    ChangePassComponent,
    ChangeEmailComponent,
    ChangeLoginComponent,
    DodajtreningComponent,
    HistoriatreningowComponent,
    DodajpomiarComponent,
    HisotriapomiarowComponent,
    RekordyComponent,
    StatystykitreningowComponent,
    StatystykipomiarowComponent,
    ListacwiczenComponent,
    ListarutynComponent,
    StworzprzykladowarutyneComponent,
    InformacjeComponent,
    ZmieninformacjeComponent
  ],
  imports: [
    BrowserAnimationsModule,  
    TeximateModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
    ValidateEqualModule,
    MatPaginatorModule
  ],
 
  providers: [UserServiceService,AuthGuardService,authInterceptorProviders],
  bootstrap: [AppComponent]
})

export class AppModule {
  
 }
