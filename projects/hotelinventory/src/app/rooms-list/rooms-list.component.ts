import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {RoomList} from "../rooms/rooms";

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
  //ChangeDetection Would only be triggered when something is chnages in parent or child component other than that its DEFAULT (Any chnage would trigger)
  //Componet should not change the data internally
  //The property should be immutatable (this.roomloist.push() won't work since it MODIFIED the roomList property)
})
export class RoomsListComponent implements OnInit, OnChanges {

  //Dumb Component or Child Component (Cant take action on its own UNLESS it asks Parent Component using OUTPUT)
  //Where you're just giving what to render (providing no data)

  @Input() rooms: RoomList[] = [];    // Make this property as a valid html property on 'hinv-rooms-list'
  //you will be using this in anywhere across components   <hinv-rooms-list [rooms]="roomList"></hinv-rooms-list> like such

  @Input() title: string = '';

  @Output() selectedRoom = new EventEmitter<RoomList>();  //Sending selected room

  constructor() { }

  ngOnInit(): void {
  }

  selectRoom(room: RoomList){
    this.selectedRoom.emit(room);   //Emits selected room which button is clicked

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if(changes['title']){  //IF title property is changed
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }

}
