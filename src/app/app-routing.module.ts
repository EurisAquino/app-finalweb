import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';
import { ShowComponent } from './components/show/show.component';
import { LoginComponent } from './components/login/login.component';
import { MensajeComponent } from './components/mensaje/mensaje.component';

const routes: Routes = [
  { path: 'show', component:ShowComponent },
  { path: 'create', component:CreateComponent },
  { path: 'edit/:id', component:EditComponent },
  { path: '', component:LoginComponent},
  { path: 'mensaje', component:MensajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

