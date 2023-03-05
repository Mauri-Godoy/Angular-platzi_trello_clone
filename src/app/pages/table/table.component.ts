import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { DataSourceProduct } from './data-source';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html'
})
export class TableComponent implements OnInit {

  dataSource = new DataSourceProduct();
  columns: string[] = ['id', 'title', 'price', 'actions']
  total = 0;
  input = new FormControl('', { nonNullable: true })
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAll().subscribe(
      res => {
        this.dataSource.init(res);
        this.total = this.dataSource.getTotal();
      }
    )

    this.input.valueChanges
      .pipe(debounceTime(300))
      .subscribe(value =>
        this.dataSource.find(value)
      );
  }

  update(product: Product) {
    this.dataSource.update(product.id, {
      price: 20
    })
  }
}
