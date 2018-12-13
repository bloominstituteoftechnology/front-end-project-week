import * as React from 'react';
import { DragLayerCollector, DndOptions, DndComponentClass } from './interfaces';
export default function DragLayer<Props, CollectedProps = {}>(collect: DragLayerCollector<Props, CollectedProps>, options?: DndOptions<Props>): <T>(DecoratedComponent: React.ComponentType<T>) => DndComponentClass<Props>;
