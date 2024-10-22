import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ParentComponent {
  primitiveData = 0; // Primitive data type
  nonPrimitiveData = { count: 0 }; // Non-primitive data (object) which can demonstrate OnPush behavior

  constructor(public sharedService: SharedService) {} // Injects a new instance of the service at parent level

  
  // Updates the primitive data by incrementing it
  updatePrimitive() {
    this.primitiveData++;
  }

  // Updates non-primitive data by incrementing its `count` property
  updateNonPrimitive() {
    this.nonPrimitiveData.count++;
  }
}
