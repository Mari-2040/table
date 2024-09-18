import styles from "./input.module.css";

type inputType = "text" | "number" | "date" | "password";
interface InputComponentProps {
  initialData?: string;
  type?: inputType;
  placeholder?: string;
  value?: string;
  change?: (e: any) => void;
  label?: string;
  handleAddReport?: (e: any) => void;
}

export default function Input(props: InputComponentProps) {
  return (
    <div>
      <div className="flex flex-col gap-1">
        <span className={styles.spanStyle}>{props.label}</span>
        <input
          className={styles.inputStyle}
          type="text"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}
