import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {


searchItem= new FormControl('');

addEventForm= new FormGroup({
  log: new FormControl('',[Validators.required, Validators.minLength(3)]),
  psw: new FormControl(''),
  contact: new FormGroup({
          email: new FormControl(''),
          phone: new FormControl(''), 
          adresse: new FormControl('')
        }),
  Skills: new FormArray([
    new FormControl('', Validators.required)
  ])
})


constructor(private formB: FormBuilder){}
myFormB!: FormGroup;
ngOnInit(): void {
  this.myFormB=this.formB.group({
    log: ['', [Validators.required, Validators.minLength(3)]],
    psw: ['', [Validators.required, Validators.minLength(6)]],
    contact: this.formB.group({
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      adresse: ['', [Validators.required]]
    }),
    Skills: this.formB.array([
      this.formB.control('', Validators.required)
    ])
  });
}

addEvent(){
  console.log(this.addEventForm);
  
}

get Skills(): FormArray{
  return this.addEventForm.get('Skills') as FormArray;
}

addSkill(){
  this.Skills.push(new FormControl('', Validators.required));
}
}
