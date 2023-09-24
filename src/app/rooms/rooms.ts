export interface Room {
  totalRooms: number;
  availableRooms: number;
  bookedRooms: number
}
export interface RoomList{
  rommNumber: number;
  roomType: string;
  amenities: string;
  price: number;
  photos: string;
  checkinTime: Date;
  checkouTime: Date;


}
