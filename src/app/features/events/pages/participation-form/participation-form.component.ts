import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Participation } from '../../../../Model/participation';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrl: './participation-form.component.css'
})
export class ParticipationFormComponent {
prix=0;
idEvent!: number;
particip!: Participation;
constructor(private R: ActivatedRoute, private Route:Router){}


ngOnInit(): void {
this.prix = this.R.snapshot.params['prix'];
this.idEvent = this.R.snapshot.params['idEvent'];
}

onSubmit(F:NgForm){
  //console.log(F.controls['prixTotal'].value);
  alert("Participation effectuée avec succès !");
  //recupérer les données du formulaire et les envoyer au backend
// 
this.particip = new Participation(
  1,
  11,
  this.idEvent,
  F.controls['email'].value,
  F.controls['nbrePlaces'].value, 
  'pending'

);
console.log(this.particip);
this.Route.navigate(['/events']);

}

}
