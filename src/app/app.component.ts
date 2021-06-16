import { LoaderService } from './shared/service/loader.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private readonly loaderService: LoaderService) {
    this.loaderService.setUser(localStorage.getItem('aiwUserData'));
  }

}
