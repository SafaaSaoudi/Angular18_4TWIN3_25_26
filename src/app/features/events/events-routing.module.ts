import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events.component';
import { AddEventComponent } from './pages/add-event/add-event.component';
import { ListEventsComponent } from './pages/list-events/list-events.component';
import { EventDetailsComponent } from './pages/event-details/event-details.component';

const routes: Routes = [
 // { path: '', component: EventsComponent },
  { path: '', component: ListEventsComponent, children:[
    { path: 'eventdetails/:param', component: EventDetailsComponent },
    { path: 'add', component: AddEventComponent }
  ] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventsRoutingModule { }
