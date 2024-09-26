import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PurchaseService } from '../../service/purchase.service';
@Component({
  selector: 'app-addpatient',
  templateUrl: './addpatient.component.html',
  styleUrl: './addpatient.component.css'
})
export class AddpatientComponent {
  patientForm: FormGroup;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private hospitalService: PurchaseService) {
    this.patientForm = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      zipcode: ['', [Validators.pattern(/^[0-9]{6}$/)]],
      apikey: ['wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3', Validators.required],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      blood_group: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log('Form Status:', this.patientForm.status);
    console.log('Form Errors:', this.patientForm.errors);
    
    if (this.patientForm.valid) {
      this.hospitalService.addPatient(this.patientForm.value).subscribe({
        next: (response) => {
          console.log('Response:', response);          
          alert(response);

          if (response.status_code === "1") {
            this.successMessage = response.status_message;
            this.errorMessage = null;
            this.patientForm.reset(); 
          } else {
            this.errorMessage = 'Error: ' + response.status_message;
          }
        },
        error: (error) => {
          console.error('Error:', error);
          this.errorMessage = 'An error occurred while adding the patient.';
          this.successMessage = null;
        },
      });
    } else {
      console.log('Form is invalid', this.patientForm.errors);
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
}
