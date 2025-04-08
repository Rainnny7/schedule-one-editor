const KeyboardShortcut = ({ shortcut }: { shortcut: string }) => (
    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[11.5px] font-medium text-muted-foreground opacity-100">
        {shortcut}
    </kbd>
);
export default KeyboardShortcut;
