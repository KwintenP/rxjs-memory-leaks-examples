import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonService } from '../../services/pokemon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, shareReplay, switchMap, take, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokemon-detail',
  template: `
        {{activatedRoute?.params['observers'].length}}
        <button mat-raised-button="primary" (click)="toOverview()">To overview</button>
        <button mat-raised-button="primary" (click)="previous()">Previous</button>
        <button mat-raised-button="primary" (click)="next()">Next</button>
        {{pokemon$ | async | json}}
    `,
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemon$: Observable<Pokemon>;
  private id$: Observable<string>;

  constructor(
    private pokemonService: PokemonService,
    public activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id$ = this.activatedRoute.params.pipe(map(params => params['id']));

    this.id$.subscribe(console.log, console.log, () => console.log('complete'));

    console.log('qsdfqsdf', this.activatedRoute.params['observers'].length);

    this.pokemon$ = this.id$.pipe(
      switchMap(id => this.pokemonService.getPokemonById(id))
    );
  }

  previous() {
    this.id$.pipe(take(1)).subscribe(id =>
      this.router.navigate([`../${+id - 1}`], {
        relativeTo: this.activatedRoute
      })
    );
  }

  next() {
    this.id$.pipe(take(1)).subscribe(id =>
      this.router.navigate([`../${+id + 1}`], {
        relativeTo: this.activatedRoute
      })
    );
  }

  toOverview() {
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
}
