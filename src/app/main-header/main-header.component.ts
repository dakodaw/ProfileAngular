import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  public showNavOptions: boolean = false;
  public showBudgetSubOptions: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  
  openNav(){
    this.showNavOptions = true;
  }

  closeNav(){
    this.showNavOptions = false;
    this.showBudgetSubOptions = false;
  }

  showHideBudgetOptions(){
    this.showBudgetSubOptions = !this.showBudgetSubOptions;
  }

}
