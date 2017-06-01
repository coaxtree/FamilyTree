import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const appRoutes: Routes = [
   { path: '', redirectTo: '', pathMatch: 'full' },
   { path : '**', redirectTo: '' }

];

//export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: false });
