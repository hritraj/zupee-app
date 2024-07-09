import React, { useState, useEffect } from 'react';
import "./TermsAndConditions.css"

interface Section {
  title: string;
  paragraphs: (string|undefined)[];
}

interface Term {
  title: string;
  sections: Section[];
}

interface TermsAndConditionsProps {
  terms: Term[];
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ terms }) => {
  const [sectionNumbers, setSectionNumbers] = useState<Record<string, number>>({});
  const [paragraphLetters, setParagraphLetters] = useState<Record<string, string>>({});
  const [subParagraphs, setsubParagraphs] = useState<Record<string, string>>({});

  useEffect(() => {
    let sectionIndex = 1;
    const sectionNumbersObj: Record<string, number> = {};
    const paragraphLettersObj: Record<string, string> = {};
    const subParagraphsObj: Record<string, string> = {};

    terms.forEach((term) => {
      term.sections.forEach((section, sectionLocalIndex) => {
        sectionNumbersObj[`${term.title}.${sectionLocalIndex}`] = sectionIndex;
        const letters = 'abcdefghijklmnopqrstuvwxyz';
        section.paragraphs.forEach((paragraph, paragraphIndex) => {
          paragraphLettersObj[`${term.title}.${sectionLocalIndex}.${paragraphIndex}`] = letters[paragraphIndex];
        });
        sectionIndex++;
      });
    });

    setSectionNumbers(sectionNumbersObj);
    setParagraphLetters(paragraphLettersObj);
  }, [terms]);

  return (
    <div>
      {terms.map((term) => (
        <div key={term.title}>
          <h1 className='subhead'>{term.title}</h1>
          {term.sections.map((section, sectionLocalIndex) => (
            <div key={sectionLocalIndex}>
              <p className='para'><table>
                <tr>
                  <td className='indexes'>{sectionNumbers[`${term.title}.${sectionLocalIndex}`]}. </td>
                  <td>{section.title}</td>
                </tr>
              </table></p>
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className='subpara'>
                  <table>
                    <tr>
                      <td className='indexes'>{paragraphLetters[`${term.title}.${sectionLocalIndex}.${paragraphIndex}`]}. </td>
                      <td>{paragraph}</td>
                    </tr>
                  </table>
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
export default TermsAndConditions;