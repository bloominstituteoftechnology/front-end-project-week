import { DragDropManager } from 'dnd-core';
import { DropTargetMonitor } from './interfaces';
export declare class TargetMonitor implements DropTargetMonitor {
    private internalMonitor;
    private targetId;
    constructor(manager: DragDropManager<any>);
    receiveHandlerId(targetId: string): void;
    canDrop(): boolean;
    isOver(options: {
        shallow?: boolean;
    }): boolean;
    getItemType(): string | symbol | null;
    getItem(): any;
    getDropResult(): any;
    didDrop(): boolean;
    getInitialClientOffset(): import("dnd-core/lib/interfaces").XYCoord | null;
    getInitialSourceClientOffset(): import("dnd-core/lib/interfaces").XYCoord | null;
    getSourceClientOffset(): import("dnd-core/lib/interfaces").XYCoord | null;
    getClientOffset(): import("dnd-core/lib/interfaces").XYCoord | null;
    getDifferenceFromInitialOffset(): import("dnd-core/lib/interfaces").XYCoord | null;
}
export default function createTargetMonitor<Context>(manager: DragDropManager<Context>): DropTargetMonitor;
