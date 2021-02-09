import { Ekwipunek } from "./ekwipunek";
import { Partia } from "./partia";
import { Trudnosc } from "./trudnosc";

export class Cwiczenia {
      cwiczenie_id:number;
      nazwa_cwiczenia:string;
      url_film:string;
      trudnosc:Trudnosc;
     ekwipunek:Array<Ekwipunek>
      url_zdjecia:string;
      partia:Partia;
      wskazowki:string;
}
