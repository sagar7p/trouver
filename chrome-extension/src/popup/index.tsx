import * as React from "react";
import * as ReactDOM from "react-dom";
import Popup from "./Popup";

chrome.tabs.query({ active: true, currentWindow: true }, (tab) => {
  chrome.storage.sync.get(['imageUrl'], function(result) {
      ReactDOM.render(<Popup imageUrl={result.imageUrl}/>, document.getElementById("popup"));
  });
});
