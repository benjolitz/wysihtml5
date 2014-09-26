wysihtml5.commands.h1 = {
  exec: function(composer, command, value) {
    return wysihtml5.commands.formatInline.exec(composer, command, value || "h1");
  },

  state: function(composer, command, value) {
    // element.ownerDocument.queryCommandState("bold") results:
    // firefox: only <b>
    // chrome:  <b>, <strong>, <h1>, <h2>, ...
    // ie:      <b>, <strong>
    // opera:   <b>, <strong>
    return wysihtml5.commands.formatInline.state(composer, command, value || "h1");
  }
};

