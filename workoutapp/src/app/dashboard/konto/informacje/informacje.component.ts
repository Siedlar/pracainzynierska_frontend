import { Component, OnInit } from '@angular/core';
import { error } from 'protractor';
import { UserServiceService } from 'src/app/service/user-service.service';
import { IUser } from 'src/app/types/iuser';
import { User } from 'src/app/types/user';

@Component({
  selector: 'app-informacje',
  templateUrl: './informacje.component.html',
  styleUrls: ['./informacje.component.css']
})
export class InformacjeComponent implements OnInit {
user:IUser;
login:string;
email:string;
selectedFile: File;
retrievedImage: any;
  retrieveResonse: any;
  base64Data: any;
  message: string;
  constructor(private userService:UserServiceService) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem("email");
    this.login=sessionStorage.getItem("username");
    this.userService.getUserInfo().subscribe(
      data=>{
        this.user=new User(data.name,data.surname,data.dateOfBirth,data.wzrost,data.kraj,data.city,data.ulica,data.phoneNumber,data.notatka)
        console.log(data)
      },error=>{
       
      }
    )
   

    this.getImage();
   
    }
    public onFileChanged(event) {
      //Select File
      this.selectedFile = event.target.files[0];
      console.log(this.selectedFile);
    }
  getImage(){
    this.userService.getImage().subscribe(
      res => {
        this.retrieveResonse = res;
        this.base64Data = this.retrieveResonse.picByte;
        this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;

      })}

      uploadImage(){
        const uploadImageData = new FormData();
        uploadImageData.append('imageFile', this.selectedFile, this.selectedFile.name);
        this.userService.onUpload(uploadImageData).subscribe(
          data=>{
            this.message=data.message;
            window.location.reload();
          }
        )
      }
      onImgError(event) { 
        event.target.src = 'assets/profil.png';
    }
    
 
    }
