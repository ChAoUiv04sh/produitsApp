import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'accueil', component: AppComponent, canActivate: [authGuard] },
  { path: 'produits', component: ListeProduitsComponent, canActivate: [authGuard] },
  { path: 'produits/:id', component: DetailProduitComponent, canActivate: [authGuard] },
  { path: 'ajouter', component: AjouterProduitComponent, canActivate: [adminGuard] },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: '/error' }
];
