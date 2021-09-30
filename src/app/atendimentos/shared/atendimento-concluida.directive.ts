import { Directive, ElementRef,Input, OnInit } from '@angular/core';

@Directive({
  selector: '[AtendimentoConcluida]'
})
export class AtendimentoConcluidaDirective implements OnInit {
  @Input() AtendimentoConcluida : boolean; // recebendo a informação do html se a tarefa esta concluida ou não 


  constructor(private el:ElementRef) { }

  ngOnInit(){
    if(this.AtendimentoConcluida){ // se for verdadeiro 
      this.el.nativeElement.style.color = "#32cd32";
    }
  }
}
