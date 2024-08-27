import { Component } from '@angular/core';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
Username:string ='Ahmed';
AllowAddUsername:boolean=false;
onCreateUsername(){
  // this.AllowAddUsername=true;
  this.Username=''
}
anyContent:string='';
AllowAddContent:boolean=false;
ListItems:any[]=[];
itemListStyle={
"background-color":"green",
"color":"white",
"font-style":"italic"
}
isParagraphStyleeClass:boolean=true;
paragraphStyleClass={
  "styleParagraph":this.isParagraphStyleeClass
}
onAddContent(){
  this.AllowAddContent=!this.AllowAddContent;
  this.anyContent='I Love Zamalak For ever';
  this.ListItems.push(1);
}
}
