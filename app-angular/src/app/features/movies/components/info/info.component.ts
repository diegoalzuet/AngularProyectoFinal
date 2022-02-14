import { CartService } from 'src/app/features/cart/services/cart.service';
import { Subscription } from 'rxjs';
import { MovieService } from './../../services/movie.service';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit, AfterViewInit, OnDestroy {

  movie: Movie | any;
  private subscription: Subscription | undefined;

  constructor(
    private activateRoute: ActivatedRoute,
    private moviesService: MovieService,
    private cartService: CartService,
    private router: Router
  ) { }
  ngAfterViewInit(): void {
    console.log('MOVIE DETAIL - AFTER VIEW INIT')
  }
  ngOnDestroy(): void {
    console.log('MOVIE DETAIL - ON DESTROY')
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    console.log('MOVIE DETAIL - ON INIT')
    this.subscription = this.moviesService.getDetail(this.activateRoute.snapshot.params['id'])
      .subscribe(movie => {
        this.movie = movie
      });

    this.subscription = this.cartService.getList()
      .subscribe(movies => console.log(movies)
      )
  }

  addMovieToCart() {
    this.subscription = this.cartService.addMovieToCart(this.movie)
      .subscribe(response => {
        console.log(response);
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
