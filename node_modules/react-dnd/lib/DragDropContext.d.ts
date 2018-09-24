import * as React from 'react';
import { DragDropManager, BackendFactory } from 'dnd-core';
import { ContextComponent } from './interfaces';
/**
 * The React context type
 */
export interface DragDropContext<BC> {
    dragDropManager: DragDropManager<BC> | undefined;
}
/**
 * Create the React Context
 */
export declare const Consumer: React.ComponentType<React.ConsumerProps<DragDropContext<any>>>, Provider: React.ComponentType<React.ProviderProps<DragDropContext<any>>>;
/**
 * Creates the context object we're providing
 * @param backend
 * @param context
 */
export declare function createChildContext<BackendContext>(backend: BackendFactory, context?: BackendContext): {
    dragDropManager: DragDropManager<BackendContext | undefined>;
};
export interface DragDropContextProviderProps<BackendContext> {
    backend: BackendFactory;
    context?: BackendContext;
}
/**
 * A React component that provides the React-DnD context
 */
export declare const DragDropContextProvider: React.SFC<DragDropContextProviderProps<any>>;
/**
 * Wrap the root component of your application with DragDropContext decorator to set up React DnD.
 * This lets you specify the backend, and sets up the shared DnD state behind the scenes.
 * @param backendFactory The DnD backend factory
 * @param backendContext The backend context
 */
export declare function DragDropContext(backendFactory: BackendFactory, backendContext?: any): <TargetClass extends React.ComponentClass<any> | React.StatelessComponent<any>>(DecoratedComponent: TargetClass) => TargetClass & ContextComponent<any>;
