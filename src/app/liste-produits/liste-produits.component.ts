import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../interface/produit';

@Component({
  selector: 'app-liste-produits',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  produits: Produit[] = [];
  erreur: string = '';
  isAdmin: boolean = false;

  constructor(private produitService: ProduitService) {
    this.isAdmin = localStorage.getItem('role') === 'admin';
  }

  ngOnInit() {
    this.getProduits();
  }

  getProduits() {
    this.produitService.getProduits().subscribe({
      next: (data: any) => {
        this.produits = data;
      },
      error: () => {
        this.erreur = 'Erreur lors du chargement des produits';
      }
    });
  }

  supprimerProduit(id: number) {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitService.supprimerProduit(id).subscribe({
        next: () => {
          this.getProduits();
        },
        error: () => {
          this.erreur = 'Erreur lors de la suppression';
        }
      });
    }
  }
}
