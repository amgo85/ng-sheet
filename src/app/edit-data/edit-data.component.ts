import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SheetService } from '../services/sheet.service';

@Component({
  selector: 'edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {
  updateSheetForm!: FormGroup;
  id!: number;
  data!: any;

  constructor (  private formBuilder: FormBuilder, private router: Router, 
                private service: SheetService, private activatedRoute: ActivatedRoute) {
                  this.updateSheetForm = this.formBuilder.group({
                    name: ['', Validators.required],
                    email: ['', Validators.required],
                    residence: ['', Validators.required],
                    native: ['', Validators.required],
                    rating: ['', Validators.required],
                    testimony: ['', Validators.required],
                  });
                }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params)=> {
      this.id = params['id'];
      console.log(this.id);

      this.service.getSheetReviewById(this.id).subscribe((res: any) => {
        console.log(res[0]);
        this.data = res[0];
        this.updateSheetForm.get('name')?.setValue(this.data.name);
        this.updateSheetForm.get('email')?.setValue(this.data.email);
        this.updateSheetForm.get('residence')?.setValue(this.data.residence);
        this.updateSheetForm.get('native')?.setValue(this.data.native);
        this.updateSheetForm.get('rating')?.setValue(this.data.rating);
        this.updateSheetForm.get('testimony')?.setValue(this.data.testimony);
        
      });
    })
  }


  onSubmit(){
    const name = this.updateSheetForm.value.name;
    const email = this.updateSheetForm.value.email;
    const residence = this.updateSheetForm.value.residence;
    const native = this.updateSheetForm.value.native;
    const rating = this.updateSheetForm.value.rating;
    const testimony = this.updateSheetForm.value.testimony;

    console.log(this.updateSheetForm.value);

    this.service.updateSheetReview(this.id, name, email, residence, native, rating, testimony).subscribe({
      next: (res) => {
        if(res) this.router.navigate(['/list-review'])
      }, error: (err) => {
        console.log(err)
      }
    });
  }
}
