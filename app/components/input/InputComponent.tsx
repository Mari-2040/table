import Input from "./Input";
import styles from "./input.module.css";

export default function InputComponent({
  name,
  status,
  progress,
  launch,
  setName,
  setStatus,
  setProgress,
  setLaunch,
}: any) {
  return (
    <div>
      <div className={styles.inputComponent_div}>
        <Input
          placeholder="Section Name"
          type="text"
          value={name}
          label="section"
          change={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Status"
          type="text"
          value={status}
          label=" status"
          change={(e) => setStatus(e.target.value)}
        />
        <Input
          placeholder="Progress"
          type="text"
          value={progress}
          label="progres"
          change={(e) => setProgress(e.target.value)}
        />
        <Input
          placeholder="Launch"
          type="text"
          value={launch}
          label="launch"
          change={(e) => setLaunch(e.target.value)}
        />
      </div>
    </div>
  );
}
