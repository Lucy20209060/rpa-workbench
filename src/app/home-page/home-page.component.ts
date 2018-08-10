import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private http: Http) {

	}

  ngOnInit() {
    this.makePost();
  }

  makePost():void{ // JSON.stringify(par)
		this.http
			.post('/rpa/user/token/csrf',{})
			.subscribe((res:Response) => {
				const data = res.json();
				console.log(data.data)
			})
	}

}
