import { DragDropManager } from 'dnd-core';
import { DragSourceMonitor } from './interfaces';
export default function createSourceMonitor<Context>(manager: DragDropManager<Context>): DragSourceMonitor;
