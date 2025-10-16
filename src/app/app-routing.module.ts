import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Layout/home/home.component';
import { NotFoundComponent } from './Layout/not-found/not-found.component';
import { ListEventsComponent } from './features/events/pages/list-events/list-events.component';
import { AppComponent } from './app.component';
import { EventDetailsComponent } from './features/events/pages/event-details/event-details.component';
import { AddEventComponent } from './features/events/pages/add-event/add-event.component';

const routes: Routes = [
  { path: '', redirectTo: '/Acc', pathMatch: 'full' },
  { path: 'Acc', component: HomeComponent },
  // { path: 'events', component: ListEventsComponent,
  //   children:[
  //     {path: 'eventdetails/:param', component:EventDetailsComponent},
  //     {path: 'add', component:AddEventComponent}
  //   ]
  //  },
  //  {path: 'user', loadChildren: () => import('./user/user.module').then(m => m.UserModule)},
  { path: 'events', loadChildren: () => import('./features/events/events.module').then(m => m.EventsModule) },
  { path: 'tickets', loadChildren: () => import('./features/tickets/tickets.module').then(m => m.TicketsModule) },
  { path: 'feedback', loadChildren: () => import('./features/feedback/feedback.module').then(m => m.FeedbackModule) },
  { path: 'users', loadChildren: () => import('./features/users/users.module').then(m => m.UsersModule) },
  
  { path: '**', component: NotFoundComponent } //Last route

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
