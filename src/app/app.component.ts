import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ford-fusion-template';
  form!: FormGroup;

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9-_]{3,40}$/)
      ]
        ),
      surname: new FormControl('', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9-_]{3,40}$/)
    ]),
      cpf: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{11}$/)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{11}$/)
      ]),
    });

    this.form.get('surname')?.disable()
  }

  getErrorMessage(controlName: string) {
    const control = this.form.get(controlName);
    if (control) {
      if (control.errors?.['pattern']) {
        return 'Campo preenchido incorretamente';
      }
      if (control.errors?.['required']) {
        return 'Campo vazio, insira os dados para continuar';
      }
    }
    return '';
  }

}
