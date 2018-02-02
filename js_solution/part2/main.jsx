import React from 'react';
import ReactDOM from 'react-dom';
import RandomWidget from './randomwidget.jsx';

ReactDOM.render(
  <RandomPannel url="/api/v1/message/" />,
  document.getElementById('randomWidgetEntry'),
);
