import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base.component';
import { UserService } from 'src/app/service/user.service';
import { SystemService } from 'src/app/service/system.service';
import { User } from 'src/app/model/user.class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent extends BaseComponent implements OnInit {
  title: string = 'User Login';

  constructor(private userSvc: UserService,
              private sysSvc: SystemService,
              private router: Router) {
    super();
   }

  ngOnInit() {
    super.ngOnInit();
  }

  login(): void {
    this.userSvc.login().subscribe(jr => {
      // mimic a login
      this.sysSvc.loggedInUser = jr.data as User;
      this.router.navigateByUrl("/movies/list"); 
    });

  }

}
