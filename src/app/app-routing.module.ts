import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminTestComponent } from './test-components/admin-test/admin-test.component';
import { ModTestComponent } from './test-components/mod-test/mod-test.component';
import { UserTestComponent } from './test-components/user-test/user-test.component';
import { Role } from './_model/Role';
import { AuthGuard } from './_security/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'test/user',
    component: UserTestComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.User, Role.Moderator, Role.Admin]}
  },
  {
    path: 'test/mod',
    component: ModTestComponent,
    canActivate: [AuthGuard],
    data: {roles: [Role.Admin, Role.Moderator]}
  },
  {
    path: 'test/admin',
    canActivate: [AuthGuard],
    data: {roles: [Role.Admin]},
    component: AdminTestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
