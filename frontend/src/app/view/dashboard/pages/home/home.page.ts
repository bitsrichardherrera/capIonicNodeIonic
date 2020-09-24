import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public data: any[] ;

  constructor(private http: HttpService) {}

  ngOnInit() {
    this.http.getTelephones()
    .subscribe( (resp: any) => {
      this.data = resp.data;
    });
  }

}