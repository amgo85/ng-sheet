import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SheetService } from '../services/sheet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.css']
})
export class CreateDataComponent implements OnInit {
  googleSheetForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private service: SheetService, 
    private router: Router) {
      this.googleSheetForm = this.formBuilder.group({
        name: formBuilder.control(''),
        email: formBuilder.control(''),
        residence: formBuilder.control(''),
        native: formBuilder.control(''),
        rating: formBuilder.control(''),
        testimony: formBuilder.control(''),
      })
     }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.googleSheetForm.value);
    const name = this.googleSheetForm.value.name;
    const email = this.googleSheetForm.value.email;
    const residence = this.googleSheetForm.value.residence;
    const native = this.googleSheetForm.value.native;
    const rating = this.googleSheetForm.value.rating;
    const testimony = this.googleSheetForm.value.testimony;

    this.service.createReview(name, email, residence, native, rating, testimony).subscribe({
      next: (res) => {
        console.log(res);
        if(res){
          this.router.navigate(['/list-review']);
        }
      }, error: (error) => {
        console.log(error);
      }
    });
  }

}
