let style = `
  position: absolute;
  top: -999px;
  left: 0px;
  right: auto;
  bottom: auto;
  border: 0px;
  box-sizing: content-box;
  word-wrap: break-word;
  overflow: hidden;
  height: 0px !important;
  min-height: 0px !important;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0px;
  text-transform: none;
  word-spacing: 0px;
  text-indent: 0px;
  line-height: 20px;
  width: 191px;
`;

function styleToObject(str) {
    let array = str.split(";");
    let obj = {};

    for (let i = 0; i < array.length; i++) {
        let arrayAdvanced = array[i].split(' ');

        arrayAdvanced.splice(0, 2);

        if (arrayAdvanced[0]) {
            obj[arrayAdvanced[0].slice(0, arrayAdvanced[0].length - 1)] = arrayAdvanced.slice(1).join(" ")
        }

    }

    return obj;
}

styleToObject(style);