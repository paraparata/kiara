import { useState } from 'react';
import Layout from '../../components/Layout';
import VoiceToolBar from './VoiceToolBar';

const Kicaw = () => {
  const [text, setText] = useState('');

  return (
    <Layout>
      <h3>Kicaw</h3>
      <div>
        <div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
          <VoiceToolBar text={text} />
        </div>
      </div>
    </Layout>
  );
};

export default Kicaw;
