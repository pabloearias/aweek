import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  providers: [EmailService]
})
export class ContactComponent implements OnInit{
  options: any = [
    {note: 'Navegando por Internet'},
    {note: 'Recomendación de un conocido'},
    {note: 'Por pura suerte'},
  ];

  contactForm!: FormGroup;

  constructor(private emailService: EmailService) {}

  ngOnInit() {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      note: new FormControl(''),
      subject: new FormControl(''),
      mail: new FormControl('')
    });
  }

  onSubmit()  {
    console.log("Si entra");
    console.log(this.contactForm);
    this.emailService.sendMessage(this.contactForm);
  }
}