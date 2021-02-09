import { Cwiczenia } from "./cwiczenia";
import { JednoCwiczenie } from "./jedno-cwiczenie";

export class HistoriaCwiczen {
    cwiczenie:Cwiczenia;
    czasTrwaniaCwiczenia:number;
    historiacwiczen_id:number;
    jednoCwiczenie:Array<JednoCwiczenie>
}
