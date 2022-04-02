import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-summary',
  templateUrl: './profile-summary.component.html',
  styleUrls: ['./profile-summary.component.scss']
})
export class ProfileSummaryComponent implements OnInit {
  // private _title: string;
  // private _firstSectionText: string;
  // private _secondSectionText: string;

  @Input() title: string;
  @Input() firstSectionText: string;
  @Input() secondSectionText: string;
  @Input() linkToWebsite : string;
  @Input() linkToCode : string;


  constructor() {

   }

  ngOnInit() {
  }


}
