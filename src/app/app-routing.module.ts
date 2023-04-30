import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateDataComponent } from './create-data/create-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ListDataComponent } from './list-data/list-data.component';

const routes: Routes = [
  { path: 'create-review', component: CreateDataComponent },
  { path: 'list-review', component: ListDataComponent },
  { path: 'edit-review/:id', component: EditDataComponent },
  { path: '', redirectTo: '/create-review', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
