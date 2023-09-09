import styles from './RangeInput.module.css';
import type { InputHTMLAttributes } from 'react';

interface RangeInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const RangeInput: React.FC<RangeInputProps> = ({ label, value, ...props }) => {
  return (
    <div className={styles.root}>
      {label && <label>{label}</label>}
      {label && <span>[{value}]</span>}
      <input type='range' {...props} />
    </div>
  );
};

export default RangeInput;
