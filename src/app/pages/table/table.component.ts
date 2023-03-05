import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { DataSourceProduct } from './data-source';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'actions']
  total = 0;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      res => {
        this.dataSource.init(res);
        this.total = this.dataSource.getTotal();
      }
    )
  }

  update(product: Product) {
    this.dataSource.update(product.id, {
      price: 20
    })
  }
}
