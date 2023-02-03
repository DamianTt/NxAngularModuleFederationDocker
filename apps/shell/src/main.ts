import { setRemoteDefinitions } from '@nrwl/angular/mf';
import { environment } from './environments/environment';

fetch(
  environment.production
    ? '/shell/assets/module-federation.manifest.json'
    : '/assets/module-federation.manifest.dev.json'
)
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
