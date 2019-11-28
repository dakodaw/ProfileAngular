import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public summaryTitle: string = "Inventory";
  public summaryPart1: string = "Technologies Used: C# .NET webAPIs, HTML, CSS, JavaScript, and JQuery";
  public summaryPart2: string = "This is a WebApp built to host an inventory system to keep track of technological equipment" 
  + " including computers, monitors, printers, routers, and tablets. A user of this program can assign a piece of equipment to"
  + " an owner in a specific location with information unique to that assignment to that owner. It keeps track of a history for"
  + " a piece of equipment after reassigning it to another owner. There are dropdowns that you can use to sort the data in the"
  + " main table by department, location, asset model, brand, type, location, and any text in the table. You can also dispose"
  + " assets, add new assets, update asset information, and assignments.";
  public linkToWebsite : string = "https://dakoda-willden.ddns.net/Projects/Inventory/WGUCapstone/";
  public linkToCode : string = "https://github.com/dakodaw/Inventory";
  constructor() { }

  ngOnInit() {
  }

}
