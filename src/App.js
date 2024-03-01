import { useState} from "react";

import * as math from "mathjs";

import './App.css';
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {

  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToText = (val) => {
    setText((text) => [...text, val]);
  }

  const clearInput = () => {
    setText("");
    setResult("");
  }

  const delInput = () => {
    setText(text.slice(0, -1))
  }

  const calculateResult = () => {
    const input = text.join("");
    setResult(math.evaluate(input));
  }

  return (
    <div className="App">
      <div className="calculator-grid">
        <Input text={text} result={result}/>
        <div className="row">
          <Button symbol="C" handleClick={clearInput} color="#847D6A"/>
          <Button symbol="<" handleClick={delInput} color="#847D6A"/>
          <Button symbol="%" handleClick={addToText} color="#847D6A"/>
          <Button symbol="/" handleClick={addToText} color="#F1AF60"/>
        </div>
        <div className="row">
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button symbol="9" handleClick={addToText}/>
          <Button symbol="*" handleClick={addToText} color="#F1AF60"/>
        </div>
        <div className="row">
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>
          <Button symbol="-" handleClick={addToText} color="#F1AF60"/>
        </div>
        <div className="row">
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>
          <Button symbol="+" handleClick={addToText} color="#F1AF60"/>
        </div>
        <div className="row">
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="=" handleClick={calculateResult} color="#EC9513" props="136px"/>
        </div>
      </div>
    </div>
  );
}

export default App;
