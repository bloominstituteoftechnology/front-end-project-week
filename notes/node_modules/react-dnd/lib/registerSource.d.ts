import { DragDropManager, DragSource, Unsubscribe } from 'dnd-core';
export default function registerSource<Context>(type: string, source: DragSource, manager: DragDropManager<Context>): {
    handlerId: string;
    unregister: Unsubscribe;
};
