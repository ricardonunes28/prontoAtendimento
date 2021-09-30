import { Routes } from '@angular/router';
import { EditarAtendimentoComponent } from './editar';
import { CadastrarAtendimentoComponent } from './cadastrar';
import { ListarAtendimentoComponent } from './listar';

export const AtendimentoRoutes: Routes = [
    {
        path: 'atendimentos',
        redirectTo: 'atendimentos/listar'
    },
    {
        path: 'atendimentos/listar',
        component: ListarAtendimentoComponent
    },
    {
        path: 'atendimentos/cadastrar',
        component: CadastrarAtendimentoComponent
    },
    {
        path: 'atendimentos/editar/:id',
        component: EditarAtendimentoComponent
    }

];