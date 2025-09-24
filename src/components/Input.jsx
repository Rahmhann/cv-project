import styles from "../css/input.module.css";

export default function Input({
  label,
  name,
  id,
  placeholder,
  type,
  defaultValue,
}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete="off"
        required
      />
    </>
  );
}
