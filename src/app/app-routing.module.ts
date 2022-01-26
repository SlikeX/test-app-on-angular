import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { StartMainComponent } from './start-main/start-main.component';
import { ToysMainComponent } from './toys-main/toys-main.component';
import { CardComponent } from './card/card.component'
import { TreeMainComponent } from './tree-main/tree-main.component';

const routes: Routes = [
  {path: '', component: StartMainComponent},
  {path: 'toys', component: ToysMainComponent},
  {path: 'tree', component: TreeMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
