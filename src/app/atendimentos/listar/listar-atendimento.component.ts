import { Component, OnInit } from '@angular/core';
import { AtendimentoService, Atendimento } from '../shared';

@Component({
  selector: 'app-listar-atendimento',
  templateUrl: './listar-atendimento.component.html',
  styleUrls: ['./listar-atendimento.component.css']
})
export class ListarAtendimentoComponent implements OnInit {

  atendimentos: Atendimento[];

  constructor(private atendimentoService: AtendimentoService) { }

  ngOnInit(){
    this.atendimentos = this.listarAtendimentos();
  }
  listarAtendimentos(): Atendimento[]{
    return this.atendimentoService.listarAtendimentos();
  }

  
  alterarStatus(atendimento: Atendimento): void {
    if (confirm('Deseja remover realmente o paciente "' + atendimento.nome + '"?')) {
      this.atendimentoService.alterarStatus(atendimento.id);
      this.atendimentos = this.listarAtendimentos();
    } else {
      this.atendimentos = this.listarAtendimentos();
    }

  }

  remover($event: any, atendimento: Atendimento): void{
    $event.preventDefault();
    if (confirm('Deseja realmente remover o paciente "' + atendimento.nome + '"?')) {
      this.atendimentoService.remover(atendimento.id);
      this.atendimentos = this.listarAtendimentos();
    }else {
      this.atendimentos = this.listarAtendimentos();
    }

  }

}