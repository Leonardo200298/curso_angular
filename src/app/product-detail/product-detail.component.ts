import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, productList } from '../product/products.mock';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
[x: string]: any;

  product?:Product | any;
  productsList: Product[] = productList;
  loading:boolean = true;

  constructor (private _route: ActivatedRoute){}
  ngOnInit(): void {
    setTimeout(() => {
      this._route.params.subscribe(params =>{
        this.product = this.productsList.find(product => product.id == params['productId']);
        this.loading = false;
      })
      
    }, 1500);
  }
}
