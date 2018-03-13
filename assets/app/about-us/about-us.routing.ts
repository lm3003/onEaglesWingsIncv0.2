import {RouterModule, Routes} from "@angular/router";
import {HistoryComponent} from "./history/history.component";
import {BoardOfDirectorsComponent} from "./board-of-directors/board-of-directors.component";
import {AboutUs2Component} from "./about-us-2/about-us-2.component";
import {NgModule} from "@angular/core";

const ABOUT_US_ROUTES: Routes = [
    {path:'', redirectTo: 'about-us-2', pathMatch: 'full'},
    {path:'about-us-2', component: AboutUs2Component},
    {path:'history', component: HistoryComponent},
    {path:'board-of-directors', component: BoardOfDirectorsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(ABOUT_US_ROUTES)],
    exports: [RouterModule]
})
export class AboutUsRouting{

}

