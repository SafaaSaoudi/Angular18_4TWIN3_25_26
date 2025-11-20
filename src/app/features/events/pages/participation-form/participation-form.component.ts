import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-participation-form',
  templateUrl: './participation-form.component.html',
  styleUrl: './participation-form.component.css'
})
export class ParticipationFormComponent {
prix=0;

constructor(private R: ActivatedRoute){}


ngOnInit(): void {
this.prix = this.R.snapshot.params['prix'];
}

onSubmit(F:NgForm){
  console.log(F.controls['prixTotal'].value);
}

}
