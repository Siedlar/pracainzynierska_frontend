import { HistoriaCwiczen } from "./historia-cwiczen";
import { TypTreningu } from "./typ-treningu";

export class HistoriaTreningu {
    czasTrwania:number;
    dataTreningu:Date;
    historiatreningu_id:number;
    notatka:string;
    typTreningu:TypTreningu;
    historiaCwiczen:Array<HistoriaCwiczen>= [];
}
