export type ChangeHandler = React.ChangeEventHandler<HTMLInputElement> &
  ((e: React.ChangeEvent, id?: string) => void);

export type AddHandler = React.MouseEventHandler<HTMLButtonElement>;

export type DeleteHandler = React.MouseEventHandler<HTMLButtonElement> &
  ((id: string) => void);
