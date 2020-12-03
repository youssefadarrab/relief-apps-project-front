import { Component, OnInit, Input } from '@angular/core';
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

  AddBookComp:boolean=false;
  book:any;

  ngOnInit(): void{
    this.refreshBookmarkList();
  }
  
  refreshBookmarkList(){
    this.service.getBookmarkList().subscribe(data=>{
      this.BookmarkList=data;
    });
  }

  addClick(){
    this.book={
      DepartmentId:0,
      DepartmentName:""
    }
    this.AddBookComp=true;

  }

  onSelect(bookmark: Bookmark): void {
  this.selectedBookmark = bookmark;
}
}





