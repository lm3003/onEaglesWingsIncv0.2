import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {OurStories2Component} from "./our-stories-2/our-stories-2.component";
import {ImageGalleryComponent} from "./image-gallery/image-gallery.component";
import {EventVidoesComponent} from "./event-videos/event-vidoes.component";


const OUR_STORIES_ROUTES: Routes = [
    {path:'', redirectTo: 'our-stories-2', pathMatch: 'full'},
    {path:'our-stories-2', component: OurStories2Component},
    {path:'image-gallery', component: ImageGalleryComponent},
    {path:'event-videos', component: EventVidoesComponent}
];

@NgModule({
    imports: [RouterModule.forChild(OUR_STORIES_ROUTES)],
    exports: [RouterModule]
})
export class OurStoriesRouting{

}