import { Component, OnInit } from '@angular/core';
import { SheetService } from '../services/sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {

  data: any = []; 

  constructor(private service: SheetService, private router: Router) { }

  ngOnInit(){
    this.listReviews();
  }

  listReviews () {
    this.service.listSheet().subscribe({
      next: (res) => {
        console.log(res);
        this.data = res;
      },error: (err) => {
        console.log(err);
      }
    });
  }

  editAGivenReview(id: number){
    this.router.navigate([`/edit-review/${id}`])
  }

  deleteAGivenReview(index: number) {
    console.log(index);
    this.service.deleteReview(index).subscribe( {next: (res)=> {
        this.listReviews();
      }, error: (err) => { 
        console.log(err);
      }
    });
  }
}
