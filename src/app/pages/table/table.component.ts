import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  products: Product[] = [];
  columns: string[] = ['id', 'title', 'price']
  total = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      res => {
        this.products = res;
        this.total = this.products.map(item => item.price).reduce((price, total) => price + total, 0)
      }
    )
  }
}
