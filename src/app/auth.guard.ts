import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './autentication.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService)
  const router = inject(Router)
  
  if ( auth.isAuthenticated()){
    return true
  }
  else{
    return router.parseUrl('/register')
  }
};
