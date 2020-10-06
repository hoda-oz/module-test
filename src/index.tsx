import React from "react";
import ReactDOM from "react-dom";

const OnClickDiv = () => {
  return (
  <div onClick={() => {alert("fff")}}>{"自作ライブラリ内で使うサードパーティライブラリとなるもの"}</div>
  )
}

const ReactCustomText: React.FC = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    ref.current?.addEventListener("click", () => {alert("custom compoentsだお")});
    //return ref.current?.removeEventListener("click");
  }, []);
  return (
    <div ref={ref}>
      <p>{"Hello World!!!!!!"}</p>
      <button onClick={() => {alert("check")}}>{"hogehoge"}</button>
      <OnClickDiv />
    </div>
  );
};

class ReactCustomTextElement extends HTMLElement {
  // constructor(props: any) {
  //   super();
  //   const mockCallback = () => {}
  //   //this.callback =  props.callback ?? mockCallback;
  // }

  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
    //this.insertAdjacentElement("afterbegin", mountPoint);

    //const name = this.getAttribute('name');
    // console.log(name);
    // const options = JSON.parse(name as string);
    // console.log("parsed", options)

    //alert(name);
    //const url = 'https://www.google.com/search?q=' + encodeURIComponent(name ?? "");
    ReactDOM.render(<ReactCustomText />, mountPoint);
  }
}

window.customElements.define("react-custom-text-element", ReactCustomTextElement);

export default ReactCustomText;
