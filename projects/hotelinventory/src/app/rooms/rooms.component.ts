import {Component, OnInit} from '@angular/core';
import {Room, RoomList} from "./rooms";

@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName: string = "Hilton Hotel"
  numberOfRooms: number = 5;

  hideRooms: boolean = false;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }

  roomList: RoomList[] = [{
    roomNumber:1,
    roomType: 'Deluxe Room',
    amenities: 'AC',
    price: 500,
    photos: "",
    checkInTime: new Date('11-Nov-2021'),
    checkOutTime: new Date('11-Nov-2021'),
  },
    {
      roomNumber:2,
      roomType: 'Deluxe Room',
      amenities: 'AC',
      price: 1000,
      photos: "",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('11-Nov-2021'),
    },
    {
      roomNumber:3,
      roomType: 'Private Suite',
      amenities: 'AC',
      price: 15000,
      photos: "",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('11-Nov-2021'),
    }]

  constructor() {
  }

  ngOnInit(): void {
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
  }
}
