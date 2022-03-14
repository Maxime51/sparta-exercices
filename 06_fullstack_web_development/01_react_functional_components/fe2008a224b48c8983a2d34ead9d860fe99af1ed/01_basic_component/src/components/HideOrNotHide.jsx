import React, { useState } from "react";

export const HideOrNotHide = () => {
  const [textButton, setTextButton] = useState("TestButton");
  const [textParagraphe, settextParagraphe] = useState(<p>Bonjour ceci est un exemple</p>);

  return (
    <div>
      <button
        onClick={() => {
          setTextButton("Bonjour");
          settextParagraphe(false);
        }}
      >
        {textButton}
      </button>
      {textParagraphe}
    </div>
  );
};
