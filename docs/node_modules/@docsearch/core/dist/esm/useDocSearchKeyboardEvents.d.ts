import React from 'react';

interface DocSearchModalShortcuts {
    /**
     * Enable/disable the Ctrl/Cmd+K shortcut to toggle the DocSearch modal.
     *
     * @default true
     */
    'Ctrl/Cmd+K'?: boolean;
    /**
     * Enable/disable the / shortcut to open the DocSearch modal.
     *
     * @default true
     */
    '/'?: boolean;
}
interface SidepanelShortcuts {
    /**
     * Enable/disable the Ctrl/Cmd+I shortcut to toggle the DocSearch sidepanel.
     *
     * @default true
     */
    'Ctrl/Cmd+I'?: boolean;
}
type KeyboardShortcuts = DocSearchModalShortcuts & SidepanelShortcuts;

interface UseDocSearchKeyboardEventsProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    onInput?: (event: KeyboardEvent) => void;
    searchButtonRef: React.RefObject<HTMLButtonElement | null>;
    isAskAiActive: boolean;
    onAskAiToggle: (toggle: boolean) => void;
    keyboardShortcuts?: KeyboardShortcuts;
}
declare function useDocSearchKeyboardEvents({ isOpen, isAskAiActive, onAskAiToggle, onClose, onOpen, onInput, searchButtonRef, keyboardShortcuts, }: UseDocSearchKeyboardEventsProps): void;

export { useDocSearchKeyboardEvents };
export type { UseDocSearchKeyboardEventsProps };
