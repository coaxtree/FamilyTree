import { Component, OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { TreeService } from "app/pages/tree/tree.service";
import { NewNodeComponent } from "app/pages/tree/new-node/new-node.component";

export class Relative{
 selectedRel:string 
}


@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {

constructor(private componentFactoryResolver: ComponentFactoryResolver,
                private viewContainerRef: ViewContainerRef) {
    }

    relation={
    name:'unknow',
}

    private createNode() {
        const factory = this.componentFactoryResolver.resolveComponentFactory(NewNodeComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
    }
 


  ngOnInit(){
 
  }

  name='Dilli Raja'
  addChild='Add Child'

relatives=[{'rel':"Choose your Relative"},{'rel':"Add Father"},{'rel':"Add Partner"},{'rel':"Add Child"},{'rel':"Add Family Friend"}];
selectedRel=this.relatives[2];

onSelect(relative){
   // this.selectedRel = relative;
   console.log(relative.rel);
  }

}
