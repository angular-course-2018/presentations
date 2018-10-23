import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Hero } from '../models/hero.mode';

@Injectable()
export class HeroesService {
    private heroes = new Map<string, Hero>([
        ['323', { name: 'Batman', img: '/assets/batman.png' }],
        ['122', {name: 'Wonder Woman', img: '/assets/wonder-woman.png' }],
    ]);

    getHero$(id) {
        return of(this.heroes.get(id));
    }
}
