import { Backend } from 'dnd-core';
export default function createTargetConnector(backend: Backend): {
    receiveHandlerId: (handlerId: string) => void;
    hooks: any;
};
