import { IUser } from "./iuser";

export class User implements IUser {
    name: string;
    surname: string;
    dateOfBirth: Date;
    wzrost: number;
    kraj: string;
    miasto: string;
    ulica: string;
    phoneNumber: number;
    notatka: string;
  constructor(    name: string,
    surname: string,
    dateOfBirth: Date,
    wzrost: number,
    kraj: string,
    miasto: string,
    ulica: string,
    phoneNumber: number,
    notatka: string){
        this.name=name;
        this.surname=surname;
        this.dateOfBirth=dateOfBirth; 
       this. wzrost=wzrost;
        this.kraj=kraj;
        this.miasto=miasto;
        this.ulica=ulica;
        this.phoneNumber=phoneNumber 
        this.notatka=notatka
    }
}
