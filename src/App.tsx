import React from 'react';
import TermsAndConditions from './TermsAndConditions.tsx';
import { terms } from './data.ts';
import "./TermsAndConditions.css"
import Header from "./header.tsx"
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <h1 className='head'>TERMS & CONDITIONS</h1>
      <TermsAndConditions terms={terms} />
    </div>
  );
};

export default App;