# LazyDemoWorkspace

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.3.

## Development server

Build the libs:
* `ng build counter-store-lib` 
* `ng build counter-route-lib`

This will generate libs in `dist`
 
Build the custom element:
* `npm run build:counter-controls-element`

This will generate the element in `dist` and concatenate the output in a single file copied to `demo-app/src/assets/counter-controls-element.js` (which is then loaded by `demo-app/src/index.html`)


Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. 

## Sources

https://www.techiediaries.com/angular/angular-9-web-components-custom-elements-shadow-dom/
https://blog.angulartraining.com/tutorial-how-to-create-custom-angular-elements-55aea29d80c5
https://medium.com/angular-in-depth/how-to-compile-your-angular-components-library-into-web-components-47ff0ac73bd7
https://medium.com/capital-one-tech/upgrading-with-angular-elements-eb3185e26382
https://www.softwarearchitekt.at/aktuelles/6-steps-to-your-angular-based-microfrontend-shell/
https://www.softwarearchitekt.at/aktuelles/your-options-for-building-angular-elements/
https://medium.com/@tomastrajan/why-and-how-to-lazy-load-angular-libraries-a3bf1489fe24
https://medium.com/@tomastrajan/the-best-way-to-lazy-load-angular-elements-97a51a5c2007
