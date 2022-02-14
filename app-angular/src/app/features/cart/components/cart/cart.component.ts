import { Observable, Subscription } from 'rxjs';
import { Movie } from '../../../../models/movie.model';
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterViewInit, OnDestroy {

  cart: Movie[] | any = [];
  private subscription: Subscription | undefined;

  constructor(
    private cartService: CartService
  ) {
    // console.log('CARRITO - CONSTRUCTOR');

  }
  ngAfterViewInit(): void {
    // console.log('CARRITO - AFTER VIEW INIT')
  }
  ngOnDestroy(): void {
    // console.log('CARRITO - ON DESTROY');
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    // console.log('CARRITO - ON INIT')

    this.subscription = this.cartService.getList()
      .subscribe(data => {
        this.cart = data;
        console.log(data);
      })
  }

  removeMovie(movie: Movie): void {
    this.subscription = this.cartService.removeMovie(movie)
      .subscribe(response => {
        console.log(response);
        if (response.status !== 'OK') {

          Swal.fire({
            title: "Error",
            icon: "error",
            text: "No se borro la pelicula"
          })
          console.log('No se borro la pelicula');
        }
        else {
          Swal.fire({
            title: "Pelicula Eliminada",
            icon: "success",
            text: response.msg
          })
          this.cart = response.cartContent;
        }
      })
  }
  emptyCart(): void {
    this.subscription = this.cartService.deleteAll()
      .subscribe(response => {
        console.log(response);
        if (response.status === 'OK')
        {
          Swal.fire({
            title: "Carrito Vacio",
            icon: "success",
            text: response.msg
          })
          this.cart = response.cartContent;
        }
        // location.reload();
      })
  }

}
