interface RadioButtonProps extends React.HTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  name?: string;
  value?: string;
}

export function RadioButton({ onChange, id, name, value, ...rest }: RadioButtonProps) {
  return (
    <input
      type="radio"
      id={id ?? ''}
      name={name ?? ''}
      onChange={onChange}
      value={value}
      {...rest}
    />
  );
}
