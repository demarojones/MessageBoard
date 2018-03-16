import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {
  title = 'My Message Board';
  messages = [
    {text: 'Welcome to Msg Board', user: 'Tim Howard'},
    {text: 'Thank You', user: 'Lionel Messi'},
    {text: 'What do I do now!?', user: 'Raheem Sterling'},
    {text: 'You can look around', user: 'Jesse Linguard'},
    {text: 'At What?', user: 'Tim Howard'},
    {text: 'Welcome to Msg Board', user: 'Ham Stam'}
  ];
}
