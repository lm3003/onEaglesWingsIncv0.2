import { Component } from '@angular/core';
import { AlertsService } from "angular-alert-module";
var AppComponent = /** @class */ (function () {
    function AppComponent(alerts) {
        this.alerts = alerts;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.alerts.setDefaults('timeout', 0);
    };
    return AppComponent;
}());
export { AppComponent };
