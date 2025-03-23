import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ElementRef, OnInit
} from '@angular/core';
import {RoomsComponent} from "./rooms/rooms.component";

@Component({
  selector: 'hinv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hotelinventory';


//   @ViewChild('user', {read: ViewContainerRef, static:true})
//   vcr!: ViewContainerRef;      //Helps dynamically load a component
//
//   constructor(private resolver: ComponentFactoryResolver) {}
//
//   ngAfterViewInit(): void {
// //loading RoomComponent component
//     const factory = this.resolver.resolveComponentFactory(RoomsComponent);
//    const componentRef= this.vcr.createComponent(factory);
//     componentRef.instance.numberOfRooms = 50;   //Changing the value of property in RoomComponent
//   }

  @ViewChild('name', {static: true})
  name!: ElementRef;      //ElementRef as it an html element

  ngOnInit() {
    this.name.nativeElement.innerText = 'Hilton Hotel';
  }



}
