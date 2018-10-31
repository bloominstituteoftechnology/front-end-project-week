import * as React from 'react';
import { Props, State } from './types';
declare const _default: (props: Props, state: State) => {
    displayedChildren?: React.ReactElement<any>[];
    finishedLeaving?: {
        [key: string]: boolean;
    };
    hasInitialized: boolean;
    indexedChildren?: {
        [key: string]: React.ReactElement<any>;
    };
    scheduleChildRemoval?: (key: string) => void;
};
export default _default;
