import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OurStories2Component } from "./our-stories-2/our-stories-2.component";
import { ImageGalleryComponent } from "./image-gallery/image-gallery.component";
import { EventVidoesComponent } from "./event-videos/event-vidoes.component";
var OUR_STORIES_ROUTES = [
    { path: '', redirectTo: 'our-stories-2', pathMatch: 'full' },
    { path: 'our-stories-2', component: OurStories2Component },
    { path: 'image-gallery', component: ImageGalleryComponent },
    { path: 'event-videos', component: EventVidoesComponent }
];
var OurStoriesRouting = /** @class */ (function () {
    function OurStoriesRouting() {
    }
    return OurStoriesRouting;
}());
export { OurStoriesRouting };
