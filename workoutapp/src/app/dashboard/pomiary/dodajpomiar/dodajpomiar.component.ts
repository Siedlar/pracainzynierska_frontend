import { SimplePlaceholderMapper } from '@angular/compiler/src/i18n/serializers/serializer';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PomiarService } from 'src/app/service/pomiar.service';

@Component({
  selector: 'app-dodajpomiar',
  templateUrl: './dodajpomiar.component.html',
  styleUrls: ['./dodajpomiar.component.css']
})
export class DodajpomiarComponent implements OnInit {
successful =false;
  dynamicForm: FormGroup;
  submitted = false;
    constructor(private formBuilder: FormBuilder, private pomiarService:PomiarService) { }

  ngOnInit(): void {
  console.log(  history.state.pomiar);
  if(history.state.pomiar){
    this.dynamicForm = this.formBuilder.group({
      id: [history.state.pomiar.id],
   data: [history.state.pomiar.data, Validators.required],
       waga:[history.state.pomiar.waga, Validators.required],
      biceps:[history.state.pomiar.biceps, Validators.required],
     udo:[history.state.pomiar.udo, Validators.required],
    talia:[history.state.pomiar.talia, Validators.required],
    brzuch:[history.state.pomiar.brzuch, Validators.required],
    przedramie:[history.state.pomiar.przedramie, Validators.required],
     lydka:[history.state.pomiar.lydka, Validators.required],
     szyja:[history.state.pomiar.szyja, Validators.required],
     klatka:[history.state.pomiar.klatka, Validators.required],
  })
  }else{
    this.dynamicForm = this.formBuilder.group({
      data: ['', Validators.required],
    //   waga:[''],
    //   biceps:[''],
    //   udo:[''],
    // talia:[''],
    // brzuch:[''],
    // przedramie:[''],
    //  lydka:[''],
    //  szyja:[''],
    // klatka:[''], 
  })
  }}
  
  onSubmit(){
    console.log(this.dynamicForm.value)
    this.submitted = true;

    // stop here if form is invalid
    if (this.dynamicForm.invalid) {
      console.log("puse pola")
        return;
    }
    console.log(this.dynamicForm.value)
    this.pomiarService.savePomiar(this.dynamicForm.value).subscribe(
      data=>
      {console.log("Pomiar został zapisany")
      this.successful=true;
      },error=>{console.log("Nie udało się zapisac pomiaru, spróbuj ponownie")}
    )
  }
  remove(name){
    this.dynamicForm.removeControl(name);
  }
  add(name){
    this.dynamicForm.addControl(name,new FormControl('',Validators.required));
  }
  get f() { return this.dynamicForm.controls; }
}
