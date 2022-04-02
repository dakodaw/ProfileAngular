import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-test-instructions',
  templateUrl: './budget-test-instructions.component.html',
  styleUrls: ['./budget-test-instructions.component.scss']
})
export class BudgetTestInstructionsComponent implements OnInit {
  public summaryTitle: string = "Budget";
  public summaryPart1: string = "Technologies Used: C# .NET webAPIs, HTML, CSS, JavaScript, and JQuery";
  public summaryPart2: string = "This is a WebApp built to host a budget system to keep track of personal budget information.";
  public linkToWebsite : string = "https://dakoda-willden.ddns.net/Projects/BudgetTest/Budget";
  public linkToCode : string = "https://github.com/dakodaw/BudgetTest";
  constructor() { }

  ngOnInit() {
  }

}
