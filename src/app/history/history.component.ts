import { Component, OnInit } from '@angular/core';
import { History } from 'src/history';
import { HISTORY_LIST } from 'src/history_list';
@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history_list = HISTORY_LIST;
  selectedVideo: History | undefined;
  
  constructor() { }

  ngOnInit(): void{
  }

  onSelect(video: History): void {
  this.selectedVideo = video;
}
}

