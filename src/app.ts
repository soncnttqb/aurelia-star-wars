import {Router, RouterConfiguration, PipelineStep, NavigationInstruction, Next, Redirect} from 'aurelia-router';
import {PLATFORM} from 'aurelia-framework';

export class App {
      public router: Router;

      public configureRouter(config: RouterConfiguration, router: Router) {
        config.addAuthorizeStep(AuthorizeStep);
        config.map([
          { route: 'login',  moduleId: PLATFORM.moduleName('components/login'),  title: 'Login', settings: {auth: false} },
          { route: 'star-wars',  moduleId: PLATFORM.moduleName('components/star-wars'),  name: 'star-wars', title: 'Star Wars', settings: {auth: true} },
          { route: 'people/:id',   moduleId: PLATFORM.moduleName('components/people-detail'), name: 'people', settings: {auth: true} },
          { route: 'planet/:id',   moduleId: PLATFORM.moduleName('components/planet-detail'), name: 'planet', settings: {auth: true} },
          { route: 'star-ship/:id',   moduleId: PLATFORM.moduleName('components/starship-detail'), name: 'star-ship', settings: {auth: true} },
          { route: '',  redirect: 'login' }
        ]);

        this.router = router;
      }
}

class AuthorizeStep implements PipelineStep {
  public run(navigationInstruction: NavigationInstruction, next: Next): Promise<any> {
      if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
          const isAuthentication = localStorage.getItem('isAuthentication');
          if (!isAuthentication) {
              return next.cancel(new Redirect('login'));
          }
      }

      return next();
  }
}
