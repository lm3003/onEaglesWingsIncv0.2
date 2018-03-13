import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ContactUsService } from "./contact-us.service";
import { ContactUsModel } from "./contact-us.model";
import { AlertsService } from "angular-alert-module";
var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(contactUsService, alerts) {
        this.contactUsService = contactUsService;
        this.alerts = alerts;
    }
    ContactUsComponent.prototype.onSubmit = function () {
        var _this = this;
        var contactUsModel = new ContactUsModel(this.contactUsForm.value.name, this.contactUsForm.value.email, this.contactUsForm.value.subject, this.contactUsForm.value.message);
        this.contactUsService.postContactUSForm(contactUsModel)
            .subscribe(function (data) { return _this.alerts.setMessage("message sent!", 'success'); }, function (error) { return _this.alerts.setMessage('Error occured!!!', 'error'); });
        this.contactUsForm.resetForm();
    };
    return ContactUsComponent;
}());
export { ContactUsComponent };
