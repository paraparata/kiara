import { useEffect, useRef, useState } from 'react';

export type Voice = {
  label: string;
  value: string;
};

export const useTTS = () => {
  const speechSynthesis = useRef<SpeechSynthesis | null>(null);
  const [voices, setVoices] = useState<Voice[]>([]);

  useEffect(() => {
    if (!speechSynthesis.current && typeof window.speechSynthesis) {
      speechSynthesis.current = window.speechSynthesis;

      const _voices = speechSynthesis.current
        .getVoices()
        .sort((a, b) => {
          const aname = a.name.toUpperCase();
          const bname = b.name.toUpperCase();

          if (aname < bname) {
            return -1;
          } else if (aname == bname) {
            return 0;
          } else {
            return +1;
          }
        })
        .map((voice) => ({
          label: voice.name + ' // ' + voice.lang,
          value: voice.voiceURI,
        }));
      setVoices(
        _voices.reduce((acc, curr, index) => {
          if (index === 0) acc.push(curr);
          if (index !== 0 && curr.value !== _voices[index - 1].value)
            acc.push(curr);
          return acc;
        }, [] as Voice[])
      );
    }
  }, []);

  const speak = (text: string, voiceUri: string) => {
    if (!speechSynthesis.current)
      throw Error('Speech synthesis is not defined');
    else {
      const utter = new SpeechSynthesisUtterance(text);
      const selectedVoice = speechSynthesis.current
        .getVoices()
        .find((v) => v.voiceURI === voiceUri);

      if (!selectedVoice) throw Error('No selected voice');
      else {
        utter.voice = selectedVoice;
        speechSynthesis.current.speak(utter);
      }
    }
  };

  return { voices, speak };
};
