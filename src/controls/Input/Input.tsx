interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
}

export function Input({ onChange, id, value, ...rest }: InputProps) {
  return (
    <>
      <input type="text" id={id} onChange={onChange} value={value} {...rest} />
    </>
  );
}
