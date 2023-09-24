import { ViewEncapsulation } from '@angular/compiler';
import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit {
  hotelName = "Florança Hotel";

  hideRooms = false;

  numberOfRooms = 10;

  rommList: RoomList[] = []

  selectedRomm! : RoomList;

  titre:string = "Parents Room";

  rooms: Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5,
  };

  @ViewChild(HeaderComponent) myheaderComponnet! : HeaderComponent;
  @ViewChildren(HeaderComponent) myHeaderChildrenComponent!: QueryList<HeaderComponent>

  constructor() { }
  ngDoCheck(): void {
    console.log("On changes is called")

  }
  ngAfterViewInit(): void {
    this.myheaderComponnet.title = "After view init"
    console.log(this.myHeaderChildrenComponent)
  }


 /* ngAfterViewChecked(): void {
    this.myheaderComponnet.title="Bonsoire"
  }

  ngDoCheck(): void {
  }*/



  ngOnInit(): void {
    console.log(this.myheaderComponnet);
    this.rommList = [
      {
      rommNumber:1,
      roomType: "Deluxe Romm",
      amenities: "Free wifi , Tv",
      price: 500,
      photos: "https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen-1280x720.jpg",
      checkinTime: new Date('11-Nov-2021'),
      checkouTime: new Date('12-Nov-2021'),
    },
    {
      rommNumber:2,
      roomType: " Romm",
      amenities: "Tv",
      price: 200,
      photos: "https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen-1280x720.jpg",
      checkinTime: new Date('15-Nov-2021'),
      checkouTime: new Date('30-Nov-2021'),
    },
    {
      rommNumber:3,
      roomType: "Private suite",
      amenities: "Free wifi , Tv, Jackouzi, Mini restau",
      price: 1500,
      photos: "https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen-1280x720.jpg",
      checkinTime: new Date('18-Nov-2021'),
      checkouTime: new Date('20-Nov-2021'),
    }]
   }

  toggle() {
    this.hideRooms = !this.hideRooms;
    this.titre = "Changed Parents Room";
  }

  selectRoom(room: RoomList){
    this.selectedRomm = room;

  }

  addRoom(){
    const ROOM : RoomList = {
      rommNumber:6,
      roomType: "java",
      amenities: "game , wifi , Tv",
      price: 1500,
      photos: "https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen-1280x720.jpg",
      checkinTime: new Date('11-Nov-2021'),
      checkouTime: new Date('12-Nov-2021'),
    };
    // this.rommList.push(ROOM);
    this.rommList = [...this.rommList, ROOM];
  }


}
