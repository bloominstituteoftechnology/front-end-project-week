import { Backend } from 'dnd-core';
export default function createSourceConnector(backend: Backend): {
    receiveHandlerId: (handlerId: string) => void;
    hooks: any;
};
