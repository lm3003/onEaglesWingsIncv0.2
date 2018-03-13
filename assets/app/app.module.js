import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header-component";
import { routing } from "./app.routing";
import { FooterComponent } from "./footer/footer.component";
import { FormsModule } from "@angular/forms";
import { SpecialEventsAndNewsComponent } from "./special-events-and-news/special-events-and-news.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { DonateComponent } from "./donate/donate.component";
import { ContactUsService } from "./contact-us/contact-us.service";
import { HttpClientModule } from "@angular/common/http";
import { AlertsModule } from "angular-alert-module";
import { AboutUsModule } from "./about-us/about-us.module";
import { OurStoriesModule } from "./our-stories/our-stories.module";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    return AppModule;
}());
export { AppModule };
