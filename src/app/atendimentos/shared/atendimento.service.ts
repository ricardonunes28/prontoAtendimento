import { Injectable } from '@angular/core';
import { Atendimento } from './atendimentos.model';

@Injectable(
  
)
export class AtendimentoService {

  constructor() { }

  listarAtendimentos(): Atendimento[]{
    const atendimentos = localStorage['atendimentos']; // local que esta sendo salvo, após fazendo verificação 
    return atendimentos ? JSON.parse(atendimentos): [];
  }

  cadastrar(atendimento: Atendimento): void{ // passando para o metodo cadastrar, o que eu quero cadastrar !
    const atendimentos = this.listarAtendimentos(); // pegando todos os elemntos cadastrados e colocamos em const tarefas.
    atendimento.id = new Date().getTime(); // pegando a data real, para considerar aquele id como unico 
    atendimentos.push(atendimento); // empilhamento das tarefas
    localStorage['atendimentos'] = JSON.stringify(atendimentos) // transformando de string para object novamente
  }

  //editando
  buscarPorId(id: number): Atendimento{ // buscando por id
    const atendimentos : Atendimento[] = this.listarAtendimentos(); 
    return atendimentos.find(Atendimento => Atendimento.id === id); 
  }

  //Salvar edição
  atualizar(atendimento: Atendimento): void{ 
    const atendimentos : Atendimento[] = this.listarAtendimentos(); 
    atendimentos.forEach((obj,index,objs)=>{ 
      if (atendimento.id === obj.id){
        objs[index] = atendimento;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos); // minha lista de tarefas , foi atualizada.
  }

  alterarStatus(id: number):void{
    const atendimentos : Atendimento[] = this.listarAtendimentos();
    atendimentos.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }

  remover(id: number):void{
    const atendimentos : Atendimento[] = this.listarAtendimentos();
    atendimentos.forEach((obj, index, objs)=>{
      if(id === obj.id){
        objs[index].status = !obj.status;
      }
    });
    localStorage['atendimentos'] = JSON.stringify(atendimentos);
  }


}
