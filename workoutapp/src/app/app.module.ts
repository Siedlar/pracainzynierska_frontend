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
import { JednoCwiczenieComponent } from './dashboard/rutynyicwiczenia/jedno-cwiczenie/jedno-cwiczenie.component';
import { DodajCwiczenieComponent } from './dashboard/rutynyicwiczenia/dodaj-cwiczenie/dodaj-cwiczenie.component';
 import {SzczegolyTreninguComponent} from './dashboard/rutynyicwiczenia/listarutyn/szczegoly-treningu/szczegoly-treningu.component'
import { WagaComponent } from './dashboard/statystyki/statystykipomiarow/partia/waga/waga.component';
import { BicepsComponent } from './dashboard/statystyki/statystykipomiarow/partia/biceps/biceps.component';
import { UdoComponent } from './dashboard/statystyki/statystykipomiarow/partia/udo/udo.component';
import { TaliaComponent } from './dashboard/statystyki/statystykipomiarow/partia/talia/talia.component';
import { BrzuchComponent } from './dashboard/statystyki/statystykipomiarow/partia/brzuch/brzuch.component';
import { PrzedramieComponent } from './dashboard/statystyki/statystykipomiarow/partia/przedramie/przedramie.component';
import { LydkaComponent } from './dashboard/statystyki/statystykipomiarow/partia/lydka/lydka.component';
import { SzyjaComponent } from './dashboard/statystyki/statystykipomiarow/partia/szyja/szyja.component';
import { KlatkaComponent } from './dashboard/statystyki/statystykipomiarow/partia/klatka/klatka.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BmiComponent } from './dashboard/statystyki/bmi/bmi.component';
import { JedenTreningComponent } from './dashboard/trening/jeden-trening/jeden-trening.component';
import {MatDialogModule} from '@angular/material/dialog';
import { WybierzCwiczenieComponent } from './dashboard/trening/wybierz-cwiczenie/wybierz-cwiczenie.component';
import { DodajTreningwTrakcieComponent } from './dashboard/trening/dodaj-treningw-trakcie/dodaj-treningw-trakcie.component';
import { WybierzCwiczeniewTrakcieComponent } from './dashboard/trening/wybierz-cwiczeniew-trakcie/wybierz-cwiczeniew-trakcie.component';
import { MatTableModule } from '@angular/material/table';


const routes: Routes = [
  { path: '', component: WelcomepageComponent ,
 },
  { path: 'login', component: LoginComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  
  { path: 'zarejestruj', component: ZarejestrujComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate: [AuthGuardService],
children:[
  { path: 'szczegoly-treningu', component: SzczegolyTreninguComponent },
  { path: 'jeden-trening', component: JedenTreningComponent },
  { path: 'zmien-haslo', component: ChangePassComponent },
  { path: 'dodaj-cwiczenie', component: DodajCwiczenieComponent },
  { path: 'zmien-email', component: ChangeEmailComponent },
  { path: 'zmien-login', component: ChangeLoginComponent },
  { path: 'usun-konto', component: UsunKontoComponent },
  { path: '', component: InformacjeComponent },
  { path: 'zmien-informacje', component: ZmieninformacjeComponent },
  { path: 'dodaj-trening-w-trakcie', component: DodajTreningwTrakcieComponent },
  { path: 'dodaj-trening', component: DodajtreningComponent },
  { path: 'historia-treningu', component: HistoriatreningowComponent },
  { path: 'dodaj-pomiar', component: DodajpomiarComponent },
  { path: 'historia-pomiarow', component: HisotriapomiarowComponent },
  { path: 'bmi', component: BmiComponent },
  { path: 'rekordy', component: RekordyComponent },
  { path: 'statystyki-pomiarow', component: StatystykipomiarowComponent, children:[
    {path: 'waga', component:WagaComponent },
    {path: 'biceps', component:BicepsComponent },
    {path: 'lydka', component:LydkaComponent },
    {path: 'przedramie', component:PrzedramieComponent },
    {path: 'szyja', component:SzyjaComponent },
    {path: 'talia', component:TaliaComponent },
    {path: 'udo', component:UdoComponent },
    {path: 'klatka', component:KlatkaComponent },
    {path: 'brzuch', component:BrzuchComponent },
  ]},
  { path: 'statystyki-treningow', component: StatystykitreningowComponent},
  { path: 'lista-cwiczen', component: ListacwiczenComponent ,},
  { path: 'cwiczenie', component: JednoCwiczenieComponent ,},
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
    ZmieninformacjeComponent,
    JednoCwiczenieComponent,
    DodajCwiczenieComponent,
    WagaComponent,
    BicepsComponent,
    UdoComponent,
    TaliaComponent,
    BrzuchComponent,
    PrzedramieComponent,
    LydkaComponent,
    SzyjaComponent,
    KlatkaComponent,
    BmiComponent,
    JedenTreningComponent,
    WybierzCwiczenieComponent,
    DodajTreningwTrakcieComponent,
    WybierzCwiczeniewTrakcieComponent,
    SzczegolyTreninguComponent,
  

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
    MatPaginatorModule,
    ChartsModule,
    MatDialogModule,
    MatTableModule,

  ],
 
  providers: [UserServiceService,AuthGuardService,authInterceptorProviders],
  bootstrap: [AppComponent],
  entryComponents: [
    WybierzCwiczenieComponent,
    WybierzCwiczeniewTrakcieComponent,
  ],
})

export class AppModule {
  
 }
