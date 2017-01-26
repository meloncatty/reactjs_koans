var React = require("react");

// This is really simple React Component.
// It has its own name (HelloWorld) it will be used for things like error display.
//
// Task: Render HTML span with "Hello World" text.

class HelloWorld extends React.Component {

  render() {
    return (
        <span>Hello World</span>
    );
  }
}

// Note:
// You can use the official Google Chrome extension to browse all ReactJS
// components rendered on a single page. See the description here:
// https://facebook.github.io/react/blog/2014/01/02/react-chrome-developer-tools.html

export default HelloWorld;
