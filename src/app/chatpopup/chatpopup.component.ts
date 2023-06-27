import { Component } from '@angular/core';
import * as ChatbotParameters from 'src/app/parameters.json';
@Component({
  selector: 'app-chatpopup',
  templateUrl: './chatpopup.component.html',
  styleUrls: ['./chatpopup.component.css']
})
export class ChatpopupComponent {
  constructor(){}
  ngOnInit(){}

  temp: any= ChatbotParameters;
  isopen=false;
  chatbot_name=this.temp.name;
  chatbot_colour=this.temp.colour;

  public openpopup()
  {
    this.isopen=!this.isopen;
    var open_or_close=document.getElementById("popup-window");
    var colour_for_chatbot_header=document.getElementById("trial");
    colour_for_chatbot_header!.style.backgroundColor=this.chatbot_colour;
    //open_or_close!.style.display="block";
    if(this.isopen==true)
    {
      open_or_close!.style.display="block";
    }
    if(this.isopen==false)
    {
      open_or_close!.style.display="none";
    }
  }
}
