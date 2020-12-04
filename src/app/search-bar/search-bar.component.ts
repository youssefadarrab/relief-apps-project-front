import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'searchBar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() addHistory: EventEmitter<any> = new EventEmitter();

  'input_link':string;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const today = new Date();
    const timestamp = today.toDateString;
    const history = {
      HistoryId: 0,
      HistoryLink: this.input_link,
      HistoryTimestamp: timestamp
    }

    this.addHistory.emit(history);
  }
}