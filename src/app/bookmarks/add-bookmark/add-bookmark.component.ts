import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.css']
})
export class AddBookmarkComponent implements OnInit {

  constructor(private service:SharedService) { }
  
  @Input() book:any;
  BookmarkId:string | undefined;
  BookmarkLink:string | undefined;
  
  ngOnInit(): void {
    this.BookmarkId=this.book.BookmarkId;
    this.BookmarkLink=this.book.BookmarkLink;
  }
  
  addBookmark(){
    var val = {BookmarkId:this.BookmarkId,
                BookmarkName:this.BookmarkLink};
    this.service.addBookmark(val).subscribe(res=>{
      alert(res.toString());
    });
  }

}
