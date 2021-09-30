import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtendimentoRoutes } from './atendimentos/atendimentos-routing.module';

export const router : Routes = [
    {
        path: '',
        redirectTo: 'atendimentos/listar',
        pathMatch:'full' //redireciona direto para pasta raiz
    },
    ...AtendimentoRoutes
];

@NgModule({
    imports :[ RouterModule.forRoot(router)],
    exports :[ RouterModule]
})

export class AppRoutingModule {}
