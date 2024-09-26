import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

 private apiUrl = 'https://dev-api.evitalrx.in/v1/catalog/medicines/search'; 

  constructor(private http: HttpClient) {}


  //+++++++++++ Searchlist ++++++++++++++++++

  searchMedicines(apikey: string, searchstring: string): Observable<any> {
    const formData = new FormData();
    formData.append('apikey', apikey);
    formData.append('searchstring', searchstring);

    return this.http.post(this.apiUrl, formData);
  }

  //++++++++++ ADDPatients +++++++++++++++++++++
  addPatient(patientData: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });

    return this.http.post<any>('https://dev-api.evitalrx.in/v1/fulfillment/patients/add', patientData, { headers }).pipe(
      tap((response: any) => {
        if (response.status_code === "1") {
          this.storePatientData(response.data.patient_id, patientData.apikey);
        }
      })
    );
  }

  private storePatientData(patient_id: string, apikey: string) {
    localStorage.setItem('patient_id', patient_id.replace(/=+$/, ''));
    localStorage.setItem('apikey',apikey);
  }

  // +++++++++++ View Medicines ++++++++++++
  viewPatientDetails(): Observable<any> {
    const patient_id = localStorage.getItem('patient_id')?.replace(/=+$/, '');  
    const apikey = localStorage.getItem('apikey');

    if (!patient_id || !apikey) {
      return of({
        status_code: 0,
        status_message: 'Patient ID or API key missing in localStorage'
      });
    }

    const formData = new FormData();
    formData.append('patient_id', patient_id);
    formData.append('apikey', apikey);

    return this.http.post('https://dev-api.evitalrx.in/v1/fulfillment/patients/view', formData);
  }
  // +++++++++++ PlaceOrder ++++++++++++

  placeOrder(orderData: any): Observable<any> {
    const headers = new HttpHeaders().set('apikey', 'wFIMP75eG1sQEh8vVAdXykgzF4mLhDw3');
    return this.http.post('https://dev-api.evitalrx.in/v1/fulfillment/orders/place_order', orderData, { headers });
  }

  
}
