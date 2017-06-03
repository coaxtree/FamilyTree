import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TreeService } from "app/pages/tree/tree.service";

@Component({
  selector: 'app-new-node',
  templateUrl: './new-node.component.html',
  styleUrls: ['./new-node.component.css']
})

export class NewNodeComponent implements AfterViewInit  {

private name:string;

    constructor(private treeService:TreeService) { 
   }

    ngAfterViewInit(): void {
        this.name = 'Father';
    }

}
