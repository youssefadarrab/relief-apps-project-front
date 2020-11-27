import { Component, OnInit } from '@angular/core';
import { Bookmark } from 'src/bookmark';
import { SharedService } from '../shared.service';


@Component({
  selector: 'Bookmarks',
  templateUrl: './bookmarks.component.html',
  styleUrls: ['./bookmarks.component.css']
})
export class BookmarksComponent implements OnInit {
  selectedBookmark: Bookmark | undefined;
  
  constructor(private service:SharedService) { }
  
  BookmarkList:any=[];

  ngOnInit(): void{
    this.refreshBookmarkList();
  }

  
  refreshBookmarkList(){
    this.service.getBookmarkList().subscribe(data=>{
      this.BookmarkList=data;
    });
  }

  onSelect(bookmark: Bookmark): void {
  this.selectedBookmark = bookmark;
}
}





