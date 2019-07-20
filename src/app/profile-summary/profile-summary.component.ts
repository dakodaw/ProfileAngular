import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.css']
})
export class ProfileSummaryComponent implements OnInit {
  // private _title: string;
  // private _firstSectionText: string;
  // private _secondSectionText: string;

  @Input() title: string;
  @Input() firstSectionText: string;
  @Input() secondSectionText: string;
  

  constructor() {
    
   }

  ngOnInit() {
  }

}
