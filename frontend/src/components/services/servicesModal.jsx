import React, { useState, useEffect } from "react";
import Model from "../appModals/normalModel/yourModel";
import { ReadMore } from "./services.style";

const GetParagraphs = (longString) => {
  if (longString.length <= 0 || !longString) {
    return ["No text to display."];
  }
  const sentences = longString.split(".");
  const nonEmptySentences = sentences.filter(
    (sentence) => sentence.trim() !== ""
  );
  return nonEmptySentences;
};

export function Showcase({ visible, onCancel, strings }) {
  const [state, setState] = useState("");

  useEffect(() => {
    setState(strings);
  }, [strings]);

  return (
    <Model visible={visible} onCancel={onCancel}>
      <ReadMore>
        <div className="wrapper">
          {GetParagraphs(state).map((paragraph, index) => (
            <p key={index} className="paragraph">
              {paragraph}
            </p>
          ))}
        </div>
      </ReadMore>
    </Model>
  );
}
