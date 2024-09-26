import { Component } from '@angular/core';
import { PurchaseService } from '../../service/purchase.service';
@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrl: './placeorder.component.css'
})
export class PlaceorderComponent {
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private hospitalService: PurchaseService) { }

  onSubmit() {
    const orderData = {
      items: [
        { medicine_id: 'gv0GokYn9w4zFL51eouS2g==', quantity: 4 },
        { medicine_id: 'ZlwdulPpADMQClszLhZnKA==', quantity: 4 }
      ],
      delivery_type: 'delivery',
      patient_name: 'Manav Patel',
      mobile: '7458787853',
      address: 'Cambridge Road, Halasuru',
      city: 'Banglore',
      state: 'Karnataka',
      zipcode: '560008',
      auto_assign: true,
      chemist_id: 'pFSLzbwQTH8LY23N2IlczQ==',
      latitude: 12.970612,
      longitude: 77.6382433,
      patient_id: '63At1oDbj+GbOSWJxu1/lg=='
    };

    // Use the service to place the order
    this.hospitalService.placeOrder(orderData).subscribe({
      next: (response) => {
        console.log(response);
        this.successMessage = 'Order placed successfully!';
        this.errorMessage = null;
      },
      error: (error) => {
        console.error(error);
        this.errorMessage = 'Failed to place the order. Please try again.';
        this.successMessage = null;
      }
    });
  }
}
