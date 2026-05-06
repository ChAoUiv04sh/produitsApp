import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../interface/produit';

@Component({
  selector: 'app-ajouter-produit',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent {
  produit: Partial<Produit> = {
    nom: '',
    categorie: '',
    prix: 0,
    stock: 0,
    description: ''
  };
  erreur: string = '';
  succes: boolean = false;

  constructor(
    private produitService: ProduitService,
    private router: Router
  ) {}

  ajouter() {
    this.produitService.ajouterProduit(this.produit as Produit).subscribe({
      next: () => {
        this.succes = true;
        setTimeout(() => {
          this.router.navigate(['/produits']);
        }, 2000);
      },
      error: () => {
        this.erreur = 'Erreur lors de l\'ajout de nouveau produit';
      }
    });
  }
}
