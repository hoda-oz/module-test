"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const OnClickDiv = () => {
    return (react_1.default.createElement("div", { onClick: () => { alert("fff"); } }, "自作ライブラリ内で使うサードパーティライブラリとなるもの"));
};
const ReactCustomText = () => {
    const ref = react_1.default.useRef(null);
    react_1.default.useEffect(() => {
        //ref.current?.addEventListener("click", () => {alert("custom compoentsだお")});
        //return ref.current?.removeEventListener("click");
    }, []);
    return (react_1.default.createElement("div", { ref: ref },
        react_1.default.createElement("p", null, "Hello World!!!!!!"),
        react_1.default.createElement("button", { onClick: () => { alert("check"); } }, "hogehoge"),
        react_1.default.createElement(OnClickDiv, null)));
};
class ReactCustomTextElement extends HTMLElement {
    // constructor(props: any) {
    //   super();
    //   const mockCallback = () => {}
    //   //this.callback =  props.callback ?? mockCallback;
    // }
    connectedCallback() {
        const mountPoint = document.createElement('div');
        //this.attachShadow({ mode: 'open' }).appendChild(mountPoint);
        //const name = this.getAttribute('name');
        // console.log(name);
        // const options = JSON.parse(name as string);
        // console.log("parsed", options)
        //alert(name);
        this.insertAdjacentElement("afterbegin", mountPoint);
        //const url = 'https://www.google.com/search?q=' + encodeURIComponent(name ?? "");
        react_dom_1.default.render(react_1.default.createElement(ReactCustomText, null), mountPoint);
    }
}
window.customElements.define("react-custom-text-element", ReactCustomTextElement);
//export default ReactCustomText;
