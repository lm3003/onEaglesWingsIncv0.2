import { AboutUsComponent } from "./about-us/about-us.component";
import { RouterModule, Routes } from "@angular/router";
import { OurStoriesComponent } from "./our-stories/our-stories.component";
import { SpecialEventsAndNewsComponent } from "./special-events-and-news/special-events-and-news.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { DonateComponent } from "./donate/donate.component";
var APP_ROUTES = [
    { path: '', redirectTo: '/about-us/about-us-2', pathMatch: 'full' },
    { path: 'about-us', component: AboutUsComponent, loadChildren: './about-us/about-us.module#AboutUsModule' },
    { path: 'our-stories', component: OurStoriesComponent, loadChildren: './our-stories/our-stories.module#OurStoriesModule' },
    { path: 'special-events-and-news', component: SpecialEventsAndNewsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'donate', component: DonateComponent }
];
export var routing = RouterModule.forRoot(APP_ROUTES);
