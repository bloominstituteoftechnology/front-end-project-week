import * as React from 'react';
import { DndComponentClass } from './interfaces';
export interface DecorateHandlerArgs<Props, ItemIdType> {
    DecoratedComponent: React.ComponentClass<Props> | React.StatelessComponent<Props>;
    createHandler: any;
    createMonitor: any;
    createConnector: any;
    registerHandler: any;
    containerDisplayName: string;
    getType: (props: Props) => ItemIdType;
    collect: any;
    options: any;
}
export default function decorateHandler<Props, TargetClass, ItemIdType>({ DecoratedComponent, createHandler, createMonitor, createConnector, registerHandler, containerDisplayName, getType, collect, options, }: DecorateHandlerArgs<Props, ItemIdType>): TargetClass & DndComponentClass<Props>;
