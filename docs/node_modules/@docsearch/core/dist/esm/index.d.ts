import React, { JSX } from 'react';

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
/**
 * Default keyboard shortcuts configuration for DocSearch.
 * These values are used when no keyboardShortcuts prop is provided
 * or when specific shortcuts are not configured.
 */
declare const DEFAULT_KEYBOARD_SHORTCUTS: Required<KeyboardShortcuts>;
/**
 * Merges user-provided keyboard shortcuts with defaults.
 *
 * @param userShortcuts - Optional user configuration.
 * @returns Complete keyboard shortcuts configuration with defaults applied.
 */
declare function useKeyboardShortcuts(userShortcuts?: KeyboardShortcuts): Required<KeyboardShortcuts>;

type DocSearchTheme = 'dark' | 'light';
interface UseThemeProps {
    theme?: DocSearchTheme;
}
declare const useTheme: ({ theme }: UseThemeProps) => void;

type DocSearchState = 'modal-askai' | 'modal-search' | 'ready' | 'sidepanel';
type View = 'modal' | 'sidepanel' | (Record<string, unknown> & string);
type InitialAskAiMessage = {
    query: string;
    messageId?: string;
    suggestedQuestionId?: string;
};
type OnAskAiToggle = (active: boolean, initialMessage?: InitialAskAiMessage) => void;
interface DocSearchContext {
    docsearchState: DocSearchState;
    setDocsearchState: (newState: DocSearchState) => void;
    searchButtonRef: React.RefObject<HTMLButtonElement | null>;
    initialQuery: string;
    keyboardShortcuts: Required<KeyboardShortcuts>;
    openModal: () => void;
    closeModal: () => void;
    isAskAiActive: boolean;
    isModalActive: boolean;
    onAskAiToggle: OnAskAiToggle;
    initialAskAiMessage: InitialAskAiMessage | undefined;
    registerView: (view: View) => void;
    isHybridModeSupported: boolean;
}
interface DocSearchProps {
    children: Array<JSX.Element | null> | JSX.Element | React.ReactNode | null;
    theme?: DocSearchTheme;
    initialQuery?: string;
    keyboardShortcuts?: KeyboardShortcuts;
}
declare function DocSearch({ children, theme, ...props }: DocSearchProps): JSX.Element;
declare namespace DocSearch {
    var displayName: string;
}
declare function useDocSearch(): DocSearchContext;

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

export { DEFAULT_KEYBOARD_SHORTCUTS, DocSearch, useDocSearch, useDocSearchKeyboardEvents, useKeyboardShortcuts, useTheme };
export type { DocSearchContext, DocSearchModalShortcuts, DocSearchProps, DocSearchState, DocSearchTheme, InitialAskAiMessage, KeyboardShortcuts, OnAskAiToggle, SidepanelShortcuts, UseDocSearchKeyboardEventsProps, UseThemeProps, View };
