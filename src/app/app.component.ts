import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  signedIn = false;
  signedin$: BehaviorSubject<boolean>;
  constructor(private authService: AuthService) {
    this.signedin$ = this.authService.signedIn$;
  }
  title = 'emailclient';

  ngOnInit() {
    this.authService.checkAuth().subscribe();
  }
  
}
