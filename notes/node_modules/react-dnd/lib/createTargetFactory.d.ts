import { DropTarget } from 'dnd-core';
import { DropTargetSpec, DropTargetMonitor } from './interfaces';
export interface Target extends DropTarget {
    receiveProps(props: any): void;
    receiveMonitor(monitor: any): void;
}
export default function createTargetFactory<Props>(spec: DropTargetSpec<Props>): (monitor: DropTargetMonitor) => Target;
