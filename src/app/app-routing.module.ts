import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'login', pathMatch:'full'
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./feature-modules/login/login.module').then((m) => m.LoginModule),
  },
  {
    path:'signup',
    loadChildren:() =>
    import('./feature-modules/signup/signup.module').then((m)=>m.SignupModule),
  },
  {
    path:'forget-password',
    loadChildren:() =>
    import('./feature-modules/forget-password/forget-password.module').then((m) => m.ForgetPasswordModule)
  },
  {
    path:'dashboard',
    loadChildren:() =>
    import('./feature-modules/dashboard/dashboard.module').then((m)=>m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
