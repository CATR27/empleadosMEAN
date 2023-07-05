import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearEmpleadoComponent } from './pages/crear-empleado/crear-empleado.component';
import { ListarEmpleadosComponent } from './pages/listar-empleados/listar-empleados.component';
import { EditarEmpleadoComponent } from './pages/editar-empleado/editar-empleado.component';

const routes: Routes = [
  {path: '', pathMatch:'full',redirectTo:'crear-empleado'},
  {path: 'crear-empleado', component: CrearEmpleadoComponent},
  {path: 'editar-empleado/:id',component: EditarEmpleadoComponent},
  {path: 'listar-empleados',component: ListarEmpleadosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
