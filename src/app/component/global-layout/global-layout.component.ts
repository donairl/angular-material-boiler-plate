import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-global-layout',
  templateUrl: './global-layout.component.html',
  styleUrls: ['./global-layout.component.css']
})
export class GlobalLayoutComponent implements OnInit {
  showFiller = false;
  isLoggedIn$: Observable<boolean>;  
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn; // {2}
  }

  onLogout(){
    this.authService.logout();                      // {3}
  }

}
