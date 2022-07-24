import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGaurdService } from './service/auth-gaurd.service';
import { UserDashComponent } from './user-dash/user-dash.component';
import { DevicesComponent } from './devices/devices.component';

const routes: Routes = [
  {path: 'users', component: UserListComponent, canActivate:[AuthGaurdService]},
  {path: 'create-user', component: CreateUserComponent, canActivate:[AuthGaurdService]},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'update-user/:id', component: UpdateUserComponent, canActivate:[AuthGaurdService]},
  {path: 'user-details/:id', component: UserDetailComponent, canActivate:[AuthGaurdService]},
  {path: 'login', component: LoginComponent },
  {path: 'logout', component: LogoutComponent,canActivate:[AuthGaurdService]  },
  {path: 'overview', component: UserDashComponent,canActivate:[AuthGaurdService]  },
  {path: 'devices', component: DevicesComponent,canActivate:[AuthGaurdService]  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
