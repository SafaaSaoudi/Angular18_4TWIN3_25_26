import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { ListEventsComponent } from './Layout/list-events/list-events.component';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './Layout/event-details/event-details.component';
import { AddEventComponent } from './Layout/add-event/add-event.component';

const routes: Routes = [
  { path: '', redirectTo: '/Acc', pathMatch: 'full' },
  { path: 'Acc', component: HomeComponent },
  { path: 'events', component: ListEventsComponent,
    children:[
      {path: 'eventdetails/:param', component:EventDetailsComponent},
      {path: 'add', component:AddEventComponent}
    ]
   },
   {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  
  { path: '**', component: NotFoundComponent } //Last route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
