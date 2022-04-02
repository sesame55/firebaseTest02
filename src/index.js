import ReactDom from 'react-dom'; //載入套件
import App from './App'; //引入同資料夾下的基礎元件，可以不寫副檔名

import 'semantic-ui-css/semantic.css'; //載入 Header 樣式

let render = document.querySelector('#root');

ReactDom.render(<App />, render);
// 第1個參數，把App寫成元件形式
// 第2個參數，傳入要放的位置
