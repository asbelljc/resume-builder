export type ChangeHandler = (e: React.ChangeEvent, id?: string) => void;

export type AddHandler = React.MouseEventHandler<HTMLButtonElement>;

export type DeleteHandler = (id: string) => void;
