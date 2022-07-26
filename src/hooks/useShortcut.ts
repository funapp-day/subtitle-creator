import { useEffect } from 'react';
import { fromEvent } from 'rxjs';
export const useShortcut = (target: HTMLElement, eventName: string, callback: () => any) => {
    useEffect(() => {
        fromEvent(target, eventName)
    });
};