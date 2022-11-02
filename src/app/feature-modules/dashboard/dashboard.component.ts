import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public totalItem : number = 0;
  public searchTerm !: string;
  constructor(private cartService: CartService, private title:Title, private meta:Meta) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
    })
    this.title.setTitle('SEO PROJECT')
    this.meta.addTag({name:'author' , content:'Sneaker Store'})
    this.meta.updateTag({name:'keywords' , content:'shop , Sneaker , accessories'})
    this.meta.updateTag({name:'description' , content:' Creating sneaker website'})
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
//
}
