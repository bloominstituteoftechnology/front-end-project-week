import { DndComponentClass } from './interfaces';
export interface DecorateHandlerArgs<Props, ItemIdType> {
    DecoratedComponent: any;
    createHandler: any;
    createMonitor: any;
    createConnector: any;
    registerHandler: any;
    containerDisplayName: string;
    getType: (props: Props) => ItemIdType;
    collect: any;
    options: any;
}
export default function decorateHandler<Props, ItemIdType>({ DecoratedComponent, createHandler, createMonitor, createConnector, registerHandler, containerDisplayName, getType, collect, options, }: DecorateHandlerArgs<Props, ItemIdType>): DndComponentClass<Props>;
