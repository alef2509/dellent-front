import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sequencia-form',
  templateUrl: './sequencia-form.component.html',
  styleUrls: ['./sequencia-form.component.css']
})
export class SequenciaFormComponent {

  numero: number | undefined;
  resultado: string | undefined;
  erro: string | undefined;

  constructor(private http: HttpClient) { }

  consultarSequencia() {
    this.http.get<any>(`http://localhost:8487/api/dellent/sequencia/consultar/${this.numero}`)
      .subscribe(
        data => {
          this.resultado = data.resultado;
          this.erro = undefined;
        },
        error => {
          this.resultado = undefined;
          this.erro = error.error.mensagem;
        }
      );
  }

  limpar() {
    this.numero = 0;
    this.resultado = '';
    this.erro = '';
  }

}

