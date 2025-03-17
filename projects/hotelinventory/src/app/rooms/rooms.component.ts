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

  selectedRoom!: RoomList;

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  }
title = "Room List Start"

  roomList: RoomList[] = []

  constructor() {
  }

  ngOnInit(): void {

    this.roomList = [{
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'AC',
      price: 500,
      photos: "",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('11-Nov-2021'),
      rating: 4.5
    },
      {
        roomNumber: 2,
        roomType: 'Deluxe Room',
        amenities: 'AC',
        price: 1000,
        photos: "",
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('11-Nov-2021'),
        rating: 3.2
      },
      {
        roomNumber: 3,
        roomType: 'Private Suite',
        amenities: 'AC',
        price: 15000,
        photos: "",
        checkInTime: new Date('11-Nov-2021'),
        checkOutTime: new Date('11-Nov-2021'),
        rating: 3.4

      }]
  }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.title = "Room List Toggled";
  }

  selectRoom(room: RoomList) {
    this.selectedRoom = room;
  }

  addRoom() {
    const room: RoomList = {
      roomNumber: 4,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, TV, Bathroom, Kitchen',
      price: 500,
      photos:"",
      checkInTime: new Date('11-Nov-2021'),
      checkOutTime: new Date('12-Nov-2021'),
      rating: 4.5,
    }
    // this.roomList.push(room); //The property should be immutatable (this.roomloist.push() won't work since it MODIFIED the roomList property)
    this.roomList = [...this.roomList, room]; //this creates a new instance (spread operaor to take the previous data and "room" is added in the array)
  }
}
