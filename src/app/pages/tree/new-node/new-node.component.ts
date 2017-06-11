import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TreeService } from "app/pages/tree/tree.service";

@Component({
  selector: 'app-new-node',
  templateUrl: './new-node.component.html',
  styleUrls: ['./new-node.component.css']
})

export class NewNodeComponent implements AfterViewInit  {



    constructor(private treeService:TreeService) { 

   }

    ngAfterViewInit(): void {
       
    }

setFatherStyle(){
    let styles={
         'position':'absolute',
          'top': '15%',
          'left': '25%',
          'width':'12em',
          'height':'5em',
          'margin-top': '-2em', /*set to a negative number 1/2 of your height*/
          'margin-left': '-6em' 
    }

    return styles;
}

setMotherStyle(){
    let styles={
         'position':'absolute',
          'top': '15%',
          'left': '75%',
          'width': '12em',
          'height':'5em',
          'margin-top': '-2em', /*set to a negative number 1/2 of your height*/
          'margin-left': '-6em' 
    }

    return styles;
}

}
