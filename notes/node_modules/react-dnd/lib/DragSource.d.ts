import * as React from 'react';
import { SourceType } from 'dnd-core';
import { DragSourceSpec, DragSourceCollector, DndOptions, DndComponentClass } from './interfaces';
/**
 * Decorates a component as a dragsource
 * @param type The dragsource type
 * @param spec The drag source specification
 * @param collect The props collector function
 * @param options DnD optinos
 */
export default function DragSource<Props, CollectedProps = {}, DragObject = {}>(type: SourceType | ((props: Props) => SourceType), spec: DragSourceSpec<Props, DragObject>, collect: DragSourceCollector<CollectedProps>, options?: DndOptions<Props>): <TargetClass extends React.ComponentClass<Props> | React.StatelessComponent<Props>>(DecoratedComponent: TargetClass) => TargetClass & DndComponentClass<Props>;
