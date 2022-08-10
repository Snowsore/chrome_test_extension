import { useState, useEffect, create } from "react";

export default function App() {
  const [pos, setPos] = useState([0, 0]);
  const [text, setText] = useState("");

  useEffect(() => {
    window.translator = {
      translateSelection() {
        const selection = document.getSelection();
        const str = selection.toString();

        const rect = selection.getRangeAt(0).getBoundingClientRect();
        setPos([rect.x + rect.width, rect.y - 30]);

        setText(str);
      },
    };
  }, []);

  return <Translator x={pos[0]} y={pos[1]} text={text}></Translator>;
}

const Translator = (props) => {
  const [result, setResult] = useState("");

  const onTranslate = () => {
    // Send an request to get result
    setResult("你好，这是一个翻译测试。");
  };

  useEffect(() => {
    setResult("");
  }, [props.text]);

  const className = `translator transition ${props.text == "" ? "hidden" : ""}`;

  const style = {
    left: props.x + "px",
    top: props.y + "px",
  };

  const content =
    result == "" ? (
      <TranslateButton onClick={onTranslate}></TranslateButton>
    ) : (
      <TranslateResult>{result}</TranslateResult>
    );

  return (
    <div className={className} style={style}>
      {content}
    </div>
  );
};

const TranslateButton = (props) => {
  return <button onClick={props.onClick}>翻译</button>;
};

const TranslateResult = (props) => {
  return <div className="translateResult">{props.children}</div>;
};
