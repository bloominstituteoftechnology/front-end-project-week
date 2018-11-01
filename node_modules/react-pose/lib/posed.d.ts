import * as React from 'react';
import { ReactElement } from 'react';
import { PoseElementProps } from './components/PoseElement/types';
import { DomPopmotionConfig } from 'popmotion-pose';
declare type DomPopmotionConfigFactory<T> = (props: PoseElementProps & T) => DomPopmotionConfig;
export declare type ComponentFactory<T> = (poseConfig?: DomPopmotionConfig | DomPopmotionConfigFactory<T>) => (props: PoseElementProps & T) => ReactElement<T>;
export declare type Posed = {
    <T>(component: React.ComponentType<T>): ComponentFactory<T>;
    [key: string]: ComponentFactory<React.HTMLProps<any>>;
};
declare const posed: Posed;
export default posed;
