import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProduitService } from '../services/produit.service';
import { Produit } from '../interface/produit';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  produit: Produit | null = null;
  erreur: string = '';

  constructor(
    private route: ActivatedRoute,
    private produitService: ProduitService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.produitService.getProduitById(id).subscribe({
        next: (data: any) => {
          this.produit = data;
        },
        error: () => {
          this.erreur = 'Produit non trouvé';
        }
      });
    } else {
      this.erreur = 'ID du produit invalide';
    }
  }
}
