import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {AboutUsComponent} from "./about-us.component";
import {AboutUs2Component} from "./about-us-2/about-us-2.component";
import {AboutUsSidebarComponent} from "./about-us-sidebar/about-us-sidebar.component";
import {BoardOfDirectorsComponent} from "./board-of-directors/board-of-directors.component";
import {HistoryComponent} from "./history/history.component";
import {AboutUsRouting} from "./about-us.routing";


@NgModule({
    declarations: [
        AboutUsComponent,
        AboutUs2Component,
        AboutUsSidebarComponent,
        BoardOfDirectorsComponent,
        HistoryComponent
    ],
    imports: [
        CommonModule,
        AboutUsRouting
    ],
})
export class AboutUsModule{

}