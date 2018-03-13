import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {OurStoriesComponent} from "./our-stories.component";
import {OurStories2Component} from "./our-stories-2/our-stories-2.component";
import {OurStoriesSidebarComponent} from "./our-stories-sidebar/our-stories-sidebar.component";
import {ImageGalleryComponent} from "./image-gallery/image-gallery.component";
import {EventVidoesComponent} from "./event-videos/event-vidoes.component";
import {OurStoriesRouting} from "./our-stories.routing";

@NgModule({
    imports: [
        CommonModule,
        OurStoriesRouting
    ],
    declarations: [
        OurStoriesComponent,
        OurStories2Component,
        OurStoriesSidebarComponent,
        ImageGalleryComponent,
        EventVidoesComponent
    ]
})
export class OurStoriesModule{

}