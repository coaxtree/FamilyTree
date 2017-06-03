import { Routes, RouterModule }  from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { TreeComponent } from "app/pages/tree/tree.component";

// noinspection TypeScriptValidateTypes
export const routes: Routes = [

    {
    path: '',
    component: TreeComponent
  }

];

export const treerouting: ModuleWithProviders = RouterModule.forChild(routes);
