import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Room } from 'src/app/models/rooms';
import { RoomService } from 'src/app/services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

  rooms: Room[];

  @Input() price: number;

  @Output() zaBrisanje: EventEmitter<any> = new EventEmitter();

  constructor(private roomService: RoomService) { }

  ngOnInit(): void {

    console.log('init rooms');

    // povezem ovaj niz rooms, sa nizom iz servisa, i da se pretplatim na njega
    this.roomService.getRooms().subscribe((rooms) => {

      this.rooms = rooms;
    });
  }

  onDelete(room: Room) {

    if (confirm('Da li zaista zelite da obrisete ovaj zapis?')) {
      this.zaBrisanje.emit();
      this.roomService.deleteRoom(room);
    }
  }

  onUpdate(room: Room) {
    this.roomService.updateRoom(room);
  }

  shuffleArray() {
    let currentIndex = this.rooms.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [this.rooms[currentIndex], this.rooms[randomIndex]] = [
        this.rooms[randomIndex], this.rooms[currentIndex]];
    }
  }

}
