import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Available at the root level by default
})
export class SharedService {
  message = 'Message from SharedService'; // A sample message for demonstration
}
