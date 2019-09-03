import React from 'react';
import ReactDom from 'react-dom';
import { EmojiStore } from "./pages/emoji-store";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDom.render(<EmojiStore/>, document.querySelector('#root'));
