import { InputHTMLAttributes, useState } from 'react';
import RangeInput from '../../components/RangeInput';

const usePlayer = () => {
  return {};
};

const floatToDuration = (f: number) =>
  f === 0
    ? '00:00'
    : f
        .toString()
        .split('.')
        .map((v) => {
          if (v.length === 1) return `0${v}`;
          return v;
        })
        .join(':');

const Slider = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div>
      <RangeInput {...props} />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span>
          {floatToDuration(props.value !== undefined ? +props.value : 0.0)}
        </span>
        <span>
          {props.max !== undefined ? floatToDuration(+props.max) : '-:-'}
        </span>
      </div>
    </div>
  );
};

const Player = () => {
  const [duration, setDuration] = useState(0);

  return (
    <div>
      <span>Player</span>
      <div>
        <Slider
          defaultValue={0}
          value={duration}
          min={0}
          step={0.01}
          onChange={(e) => setDuration(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default Player;
