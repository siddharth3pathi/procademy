import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [
    { id: 1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', image: 'https://cdn-icons-png.flaticon.com/512/9097/9097898.png' },
    { id: 2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: 'https://cdn-icons-png.flaticon.com/512/3567/3567356.png' },
    { id: 3, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: 'https://cdn-icons-png.flaticon.com/512/2586/2586488.png' },
    { id: 4, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', image: 'https://cdn-icons-png.flaticon.com/512/9097/9097898.png' },
    { id: 5, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', image: 'https://cdn-icons-png.flaticon.com/512/3567/3567356.png' },
    { id: 6, name: 'APPLE iPhone 12', price: '1855', color: 'Black', available: 'Not Available', image: 'https://cdn-icons-png.flaticon.com/512/2586/2586488.png' }
  ]

  getTotalProducts() {
    return this.products.length;
  }
  getAvailableProducts() {
    return this.products.filter(item => item.available === "Available").length;
  }
  getNotAvailableProducts() {
    return this.products.filter(item => item.available === "Not Available").length;
  }

  productCountRadioButton: string = "All";

  onFilterRadioButtonChanged(data: string) {
    this.productCountRadioButton = data
  }

  searchText: string = '';

  onSearchTextEntered(searchedValue: string) {
    this.searchText = searchedValue;
  }
}
