import { useState } from "react";

const customDict = {
  wrok: "work",
  cta: "cat",
  teh: "the",
  at: "an",
};

const App = () => {
  const [suggestedText, setSuggestedText] = useState("");
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    setInputText(e.target.value);

    //Spell Check
    const words = inputText.split(" "); 
    const correctedWords = words.map((word) => {
      return customDict[word.toLowerCase() || word];
    }); 

    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );

    setSuggestedText(firstCorrection || "");
  };

  return (
    <div>
      <h1>Spell check and Auto-Correct</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text...."
        rows={5}
        cols={50}
      />
      {suggestedText && (
        <p>
          Did you mean : <strong>{suggestedText}</strong>
        </p>
      )}
    </div>
  );
};

export default App;