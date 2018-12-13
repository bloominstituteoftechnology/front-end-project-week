import { DragDropManager, DropTarget, Unsubscribe } from 'dnd-core';
export default function registerTarget<Context>(type: string, target: DropTarget, manager: DragDropManager<Context>): {
    handlerId: string;
    unregister: Unsubscribe;
};
