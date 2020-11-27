import { Component, OnInit } from '@angular/core';
import { History } from 'src/history';
import { SharedService } from '../shared.service';
@Component({
  selector: 'History',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  selectedVideo: History | undefined;
  
  constructor(private service:SharedService) { }

  HistoryList:any=[];

  ngOnInit(): void{
    this.refreshHistoryList();
  }
  

  refreshHistoryList(){
    this.service.getHistoryList().subscribe(data=>{
      this.HistoryList=data;
    });
  }

  onSelect(video: History): void {
  this.selectedVideo = video;
}
}

