import * as React from 'react';
import { TargetType } from 'dnd-core';
import { DropTargetSpec, DndOptions, DropTargetCollector, DndComponentClass } from './interfaces';
export default function DropTarget<Props, CollectedProps = {}>(type: TargetType | ((props: Props) => TargetType), spec: DropTargetSpec<Props>, collect: DropTargetCollector<CollectedProps>, options?: DndOptions<Props>): <TargetClass extends React.ComponentClass<Props> | React.StatelessComponent<Props>>(DecoratedComponent: TargetClass) => TargetClass & DndComponentClass<Props>;
