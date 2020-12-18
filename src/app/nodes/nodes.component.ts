import { Component, OnInit } from '@angular/core';
import { Node } from '../../models/node.model';
import { NodesStore } from '../services/nodesStore.service';

@Component({
  selector: 'app-node-list',
  templateUrl: './nodes.component.html',
  styleUrls: ['./nodes.component.css']
})
export class NodesComponent implements OnInit {
  expandedNodeURL: string = null;

  constructor(public store: NodesStore) {}

  ngOnInit() {
    this.store.getStatus();
  }

  ToogleExpand(node: Node): void {
    this.expandedNodeURL = node.url === this.expandedNodeURL ? null : node.url;
  }

  isExpanded(node: Node): boolean {
    return this.expandedNodeURL === node.url;
  }

  setMessage(message: string): void {
    this.expandedNodeURL = message;
  }
}
