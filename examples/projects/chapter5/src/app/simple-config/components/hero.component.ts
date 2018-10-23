import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../services/heroes.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.mode';
import { Location } from '@angular/common';

@Component({
    selector: 'app-hero',
    template: `
        <h1>{{ hero?.name }}</h1>
        <img height="200px" [src]="hero?.img" [alt]="hero?.name" />
        <br>
        <button (click)="goBack()">go back</button>
    `
})
export class HeroComponent implements OnInit {
    hero: Hero;

    constructor(
        private heroesService: HeroesService,
        private route: ActivatedRoute,
        private location: Location,
    ) { }

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.heroesService.getHero$(params.get('id')))
        ).subscribe(hero => {
            this.hero = hero;
        });
    }

    goBack() {
        this.location.back();
    }
}
