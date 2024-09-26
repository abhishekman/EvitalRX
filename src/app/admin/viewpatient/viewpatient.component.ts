import { Component } from '@angular/core';
import { PurchaseService } from '../../service/purchase.service';
@Component({
  selector: 'app-viewpatient',
  templateUrl: './viewpatient.component.html',
  styleUrl: './viewpatient.component.css'
})
export class ViewpatientComponent {
  patientData: any = null;  
  errorMessage: string | null = null;

  constructor(private hospitalService: PurchaseService) {}

  viewPatientDetails() {
    this.hospitalService.viewPatientDetails().subscribe({
      next: (response) => {
        if (response.status_code === "1") {
          this.patientData = response.data[0];  
          this.errorMessage = null;
        } else {
          this.patientData = null;  
          this.errorMessage = 'Error: ' + response.status_message;
        }
      },
      error: () => {
        this.patientData = null;
        this.errorMessage = 'An error occurred while fetching patient data.';
      }
    });
  }
}

