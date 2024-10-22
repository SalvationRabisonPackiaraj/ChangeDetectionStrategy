import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush // Only checks for changes when input references change
})
export class ChildComponent {
  @Input() data: any; // Data received from parent component
  childData = 0; // Independent child component data

  constructor(public sharedService: SharedService) {} // Injects a new instance of the service at parent level

  // Updates the child component's independent data
  updateChildData() {
    this.childData++;
  }
}