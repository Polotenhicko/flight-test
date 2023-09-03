interface ICheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id?: string;
  value?: string;
  name?: string;
}

export function Checkbox({ onChange, id, value, name, ...rest }: ICheckboxProps) {
  return (
    <input
      type="checkbox"
      id={id}
      onChange={onChange}
      value={value}
      name={name}
      {...rest}
    />
  );
}
