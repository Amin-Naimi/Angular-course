import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Room, RoomList } from '../rooms';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
 // changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges{

  @Input() roomsChild :RoomList[] = [];
  @Input() title: string='';
  @Input() nom: string ='';

  @Output() roomSelectedEvent = new EventEmitter<RoomList>();

  constructor(){}
  ngOnChanges(changes: SimpleChanges): void {
   // console.log(changes);
    if(changes['title']){
      this.title = changes['title'].currentValue.toUpperCase();
    }
  }
  ngOnInit(): void {
  }

  romSelectedEvent(room : RoomList){
    this.roomSelectedEvent.emit(room);
  }

}
