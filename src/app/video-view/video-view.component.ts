import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'videoView',
  templateUrl: './video-view.component.html',
  styleUrls: ['./video-view.component.css']
})
export class VideoViewComponent implements OnInit {

  constructor() { }

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
