import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-room-add',
  templateUrl: './room-add.component.html',
  styleUrls: ['./room-add.component.css']
})
export class RoomAddComponent implements OnInit {

  @Output() onAddRoom: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onAdd() {
    if (confirm('Da li zelite da kreirate novu sobu?')) {
      this.onAddRoom.emit(true);
    } else {
      this.onAddRoom.emit(false);
    }
  }

}
