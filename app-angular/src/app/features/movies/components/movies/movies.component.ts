import { Router } from '@angular/router';
import { Movie } from '../../../../models/movie.model';
import { Component, Input, OnInit, AfterViewInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../../services/movie.service';
import { CartService } from 'src/app/features/cart/services/cart.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  movies: Movie[] = [];
  cart: Movie[] = [];

  private subscription: Subscription | undefined;

  constructor(
    private movieService: MovieService,
    private cartService: CartService,
    private router: Router
  ) {
    // console.log('MOVIES - CONSTRUCTOR')
    localStorage['carrito'] ? this.cart = JSON.parse(localStorage['carrito']) : console.log('carrito vacio');

  }

  ngOnInit(): void {
    // console.log('MOVIES - ON INIT')
    this.subscription = this.movieService.getList().subscribe(movies => this.movies = movies);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('MOVIES - ON CHANGES', changes)
  }

  ngAfterViewInit(): void {
    // console.log('MOVIES - AFTER VIEW INIT');
  }

  ngOnDestroy(): void {
    console.log('MOVIES - ON DESTROY');
    this.subscription?.unsubscribe();
  }

  showDetail(id: string) {
    this.router.navigate(['peliculas', id]);
  }

  addToCart(movie : Movie) {
    console.log(movie);
    this.subscription = this.cartService.addMovieToCart(movie)
      .subscribe(response => {

        if(response.status!=='OK'){
          console.log('No se agrego la pelicula');
          alert('NO SE AGREGO LA PELICULA, YA ESTA EN EL CARRITO')
        }
        else{
          console.log('Se agrego la pelicula');
          this.router.navigate(['carrito']);
        }
      });

  }
}
