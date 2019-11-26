import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/model/credit.class';
import { CreditService } from 'src/app/service/credit.service';

@Component({
  selector: 'app-credit-list',
  templateUrl: './credit-list.component.html',
  styleUrls: ['./credit-list.component.css']
})
export class CreditListComponent implements OnInit {
  title: string = "Credit-List";
  credits: Credit[] = [];

  constructor(private creditSvc: CreditService) { }

  ngOnInit() {
    console.log("Calling credits...");
    this.creditSvc.list().subscribe(jr => {
      console.log("jr:",jr);
      this.credits = jr.data as Credit[];
      console.log("credits", this.credits);
    });
  }

}
