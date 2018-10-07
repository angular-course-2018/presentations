AngularJS - the good parts
Declarative
Reusable code *
Testable

AngularJS - the bad parts
You can write in typescript, but it's not native
Not really modular
Non tree shakable -> large bundle size
$digest...


Moduling our app
module per functional feature: NgModule


Moduling out UI - Components!
Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.
- Reusable 
- Isolated 
- Composable 

Angular Components
give examples: (minimal: template, css, selector + show 1 way binding since they already familiar with it)
1. create button once, use everywhere
2. button doesn't know anything about ouuter world
3. compose a new component - fancy button


Architecture:
Splitting the ui: Modules -> Components tree
Parent / Child

Communication between components: 
1. Input
2. Output

Generic placeholder: 
1. show the problem
2. Content projection: <ng-content

Other component options (component decorator options) ?

Testing components:
1. Jest + Testbed - shallow render + test
2. snapshot test a component

