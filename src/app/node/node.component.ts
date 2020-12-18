import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Node } from '../../models/node.model';

@Component({
  selector: 'app-node-item',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.scss']
})
export class NodeComponent {
  @Input() node: Node;
  @Output() ToogleExpand = new EventEmitter<Node>();
  @Input() expanded: boolean;

  handleToogleExpand(node: Node): void {
    this.ToogleExpand.emit(node);
  }
}
