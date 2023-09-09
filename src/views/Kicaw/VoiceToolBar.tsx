import { Select } from '../../components';
import RangeInput from '../../components/RangeInput';
import { useState } from 'react';
import { useTTS } from '../../lib/hooks/useTTS';

const defaultValue = {
  tempo: 1,
  pitch: 1,
};

interface VoiceToolBarProps {
  text: string;
}

const VoiceToolBar: React.FC<VoiceToolBarProps> = ({ text }) => {
  const [tempo, setTempo] = useState(defaultValue.tempo);
  const [pitch, setPitch] = useState(defaultValue.pitch);

  const { voices, speak } = useTTS();

  const [voice, setVoice] = useState(voices[0]?.value ? voices[0].value : '');

  return (
    <div>
      <Select
        value={voice}
        options={voices}
        onValueChange={(val) => {
          setVoice(val);
        }}
      />
      <RangeInput
        label='Tempo'
        defaultValue={defaultValue.tempo}
        value={tempo}
        min='0.5'
        max='2'
        step='0.1'
        onChange={(e) => setTempo(+e.target.value)}
      />
      <RangeInput
        label='Pitch'
        defaultValue={defaultValue.pitch}
        value={pitch}
        min='0'
        max='2'
        step='0.1'
        onChange={(e) => setPitch(+e.target.value)}
      />
      <button onClick={() => speak(text, voice)}>Speak</button>
    </div>
  );
};

export default VoiceToolBar;
