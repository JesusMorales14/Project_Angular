import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; 
import { Product } from './pages/product/product';
import { Services } from './pages/services/services';

export const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' }, // redirige a /inicio
  { path: 'inicio', component: Home },
  { path: 'services', component: Services },
  { path: 'product', component: Product },
  { path: '**', redirectTo: 'inicio' } // cualquier ruta inexistente va a inicio
];