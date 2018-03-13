import { ContactUsModel } from "./contact-us.model";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';
import { HttpClient, HttpHeaders } from "@angular/common/http";
var ContactUsService = /** @class */ (function () {
    function ContactUsService(http) {
        this.http = http;
    }
    ContactUsService.prototype.postContactUSForm = function (contactUSModel) {
        console.log(JSON.stringify(contactUSModel));
        var headers = new HttpHeaders().set('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/contact-us', JSON.stringify(contactUSModel), { headers: headers, observe: 'response', responseType: 'text' })
            .map(function (response) {
            return response;
        })
            .catch(function (error) {
            console.log(error);
            return Observable.throw(error.json());
        });
    };
    return ContactUsService;
}());
export { ContactUsService };
