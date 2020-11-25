import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/bookmark';
import { BOOKMARKS } from 'src/bookmarks';
@Component({
  selector: 'app-bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  bookmarks = BOOKMARKS;
  selectedBookmark: Bookmark | undefined;
  
  constructor() { }

  ngOnInit(): void{
  }

  onSelect(bookmark: Bookmark): void {
  this.selectedBookmark = bookmark;
}
}





