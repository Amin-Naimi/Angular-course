import { Injectable } from '@angular/core';
import { RoomList } from '../rooms'
@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  rommList: RoomList[] = [
    {
      rommNumber: 1,
      roomType: "Deluxe Romm",
      amenities: "Free wifi , Tv",
      price: 500,
      photos: "https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen-1280x720.jpg",
      checkinTime: new Date('11-Nov-2021'),
      checkouTime: new Date('12-Nov-2021'),
    },
    {
      rommNumber: 2,
      roomType: " Romm",
      amenities: "Tv",
      price: 200,
      photos: "https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen-1280x720.jpg",
      checkinTime: new Date('15-Nov-2021'),
      checkouTime: new Date('30-Nov-2021'),
    },
    {
      rommNumber: 3,
      roomType: "Private suite",
      amenities: "Free wifi , Tv, Jackouzi, Mini restau",
      price: 1500,
      photos: "https://www.redrockresort.com/wp-content/uploads/2020/12/RR-Standard-2-Queen-1280x720.jpg",
      checkinTime: new Date('18-Nov-2021'),
      checkouTime: new Date('20-Nov-2021'),
    }]

  constructor() { }

  getRooms() {
    this.rommList;
  }
}
