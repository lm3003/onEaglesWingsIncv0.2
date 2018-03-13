import {ContactUsModel} from "./contact-us.model";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable()
export class ContactUsService{
    constructor(private http: HttpClient){

    }

    postContactUSForm(contactUSModel: ContactUsModel){
        console.log(JSON.stringify(contactUSModel));
        const headers = new HttpHeaders().set('Content-Type','application/json');
        return this.http.post('http://localhost:3000/contact-us',JSON.stringify(contactUSModel),
            {headers:headers, observe: 'response',responseType:'text'})
            .map((response) => {
            return response;
            })
            .catch((error) => {
            console.log(error);
            return Observable.throw(error.json())
            });
    }
}