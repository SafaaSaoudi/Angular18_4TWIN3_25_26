import { Injectable } from '@angular/core';
import { Event } from '../Model/event';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  listEvents: Event[] = [
    {id:1,titre:"Concert de Rock",description:"Un concert de rock avec des groupes locaux.",date:new Date("2026-11-15"),lieu:"Salle des Fêtes",prix:30,organisateurId:1,imageUrl:"images/concert.jpg",nbPlaces:100,nbLikes:45},
    {id:2,titre:"Exposition d'Art",description:"Une exposition d'art contemporain.",date:new Date("2024-12-01"),lieu:"Galerie d'Art",prix:15,organisateurId:2,imageUrl:"images/expo.webp",nbPlaces:50,nbLikes:30},
    {id:3,titre:"Atelier de Cuisine",description:"Apprenez à cuisiner des plats italiens.",date:new Date("2025-11-20"),lieu:"Centre Culinaire",prix:50,organisateurId:3,imageUrl:"images/cuisine.webp",nbPlaces:20,nbLikes:10}
  ];
  constructor(private http: HttpClient) { }

  getAllEvents(): Event[] {
    return this.listEvents;
  }

  getEventById(id: number): Event | undefined {
    return this.listEvents.find(event => event.id === id);
    }
  deleteEvent(id: number): void {
    this.listEvents = this.listEvents.filter(event => event.id !== id);
    this.listEvents.pop();
  }
}