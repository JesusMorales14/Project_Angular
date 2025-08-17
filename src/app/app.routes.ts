import { Routes } from '@angular/router';
import { Home } from './pages/home/home'; 
import { About } from './pages/about/about';
import { Product } from './pages/product/product';
import { Contact } from './pages/contact/contact';
import { Services } from './pages/services/services';

export const routes: Routes = [
  { path: '', component: Home, pathMatch: 'full' }, 
  { path: 'about', component: About },
  { path: 'services', component: Services },
  { path: 'product', component: Product },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' } 
];