import { Component } from '@angular/core';
import { PurchaseService } from '../../service/purchase.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  medicines: any[] = [];
  errorMessage: string | null = null;
  searchTerm: string = '';

  constructor(private hospitalService: PurchaseService) { }

  ngOnInit(): void {
    const apikey = 'NAQ5XNukAVMPGdbJkjJcMUK9DyYBeTpu';
    const searchstring = 'dolo 650';

    if (!apikey) {
      console.error('API key is missing');
      this.errorMessage = 'API key is required';
      return;
    }

    this.hospitalService.searchMedicines(apikey, searchstring).subscribe(
      (response) => {
        console.log('API Response:', response);
        if (response.status_code === '1') {
          this.medicines = response.data.result;
        } else {
          this.errorMessage = response.status_message;
        }
      },
      (error) => {
        console.error('Error fetching data:', error);
        this.errorMessage = 'Error occurred while fetching data';
      }
    );
  }

  get filteredMedicines() {
    return this.medicines.filter(medicine => medicine.medicine_name.toLowerCase().includes(this.searchTerm.toLowerCase())).map(medicine => {
      if (medicine.medicine_name.toLowerCase().includes(this.searchTerm.toLowerCase())) {
        medicine.highlight = true;
      } else {
        medicine.highlight = false;
      }
      return medicine;
    });
  }
}