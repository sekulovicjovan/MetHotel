import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/rooms';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(rooms: Room[], price: number) {

    if (!rooms) {
      return [];
    }

    if (!price) {
      return rooms;
    }

    return rooms.filter((room) => {
      return room.price <= price;
    })
  }

}
