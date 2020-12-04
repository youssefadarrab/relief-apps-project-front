import { Component, OnInit } from '@angular/core';
import { HistoryComponent } from 'src/app/history/history.component'
@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {
  input_link: string | undefined;
  constructor() {  }

  ngOnInit(): void {
  }
  book:any;
  
  addClick(){
    this.book={
      BookmarkId:0,
      BookmarkLink:""
    }
  }
}
