import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { TreeService } from "app/pages/tree/tree.service";
import { NewNodeComponent } from './new-node/new-node.component';
import { MainService } from "app/pages/main/main.service";
import { AuthGuard } from "app/pages/main/auth.guard";
import { treerouting } from "app/pages/tree/tree.routing";

@NgModule({
  imports: [
    CommonModule,
    treerouting
  ],
  declarations: [TreeComponent, NewNodeComponent],
  entryComponents: [NewNodeComponent],
  providers: [ MainService, AuthGuard,TreeService]
})
export class TreeModule { }
