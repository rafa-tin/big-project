type AppInputProps = {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

export default function AppInput({
  type,
  placeholder,
  className,
  onChange,
  value,
}: AppInputProps) {
  return (
    <div>
      <input
        className={`border rounded p-3 w-full ${className}`}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
