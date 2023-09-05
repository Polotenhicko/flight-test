interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
  name?: string;
}

export function Input({ onChange, id, value, name, ...rest }: InputProps) {
  return (
    <>
      <input type="text" id={id} onChange={onChange} value={value} name={name} {...rest} />
    </>
  );
}
