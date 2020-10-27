import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import '../../../assets/smtp.js';
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  errors: string[] = [];
  form;
  submitted = false;
  success = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
      this.form = this.fb.group({
          name: [null, Validators.required],
          email: [null, Validators.required],
          phone: [null, Validators.required],
          message: [null, Validators.required],
      });
  }

  onSubmit() {
    this.errors = [];

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'contatoselmarservicos@gmail.com',
      Password: 'C05FFB9F6D63D594782902654CE84D46F0C2',
      To: 'jonatas.almeida14@usp.br; victor.marxstudio@gmail.com',
      From: `contatoselmarservicos@gmail.com`,
      Subject: 'Novo pedido de Contato - Victor Julio',
      Body: `
      <i>Novo pedido de contato no site João victorrr.</i> <br/> <b>Nome: </b>${this.form.value.name} <br /> <b>Email: </b>${this.form.value.email}<br /> <b>Telefone: </b>${this.form.value.phone}<br /> <b>Mensagem:</b> <br /> ${this.form.value.message} <br><br> <b>~Fim da Mensagem.~</b> `
    }).then((result) => {
      if (result === 'OK') {
        this.success = true;
      }
    });

    this.submitted = true;
    const data = this.form.value;

    // C6DFDA10FB0FCA0D80069B72F0DB555E8148
  }
}
