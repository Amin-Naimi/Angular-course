import { Element } from '@angular/compiler';
import { AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'firstP';
  role = 'Admin';

  @ViewChild('user', { read: ViewContainerRef }) enfant_ng!: ViewContainerRef;
  @ViewChild('name', { static: true }) enfant_div!: ElementRef

  /*ngAfterViewInit(): void {
    const componentRef = this.enfant_ng.createComponent(RoomsComponent);
    componentRef.instance.numberOfRooms=100;*/

  ngOnInit(): void {
    console.log(this.enfant_div.nativeElement.innerText=" Dynamic div Texte")


  }


}
