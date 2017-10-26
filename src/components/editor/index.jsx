var React = require('react');
var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;

var TestComponent = React.createClass({
    render: function() {
        return (
            <MarkdownEditor initialContent="Test" iconsSet="font-awesome"/>
        );
    }
});

export default TestComponent;