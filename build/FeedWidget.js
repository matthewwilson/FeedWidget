var LiveAlert = React.createClass({displayName: "LiveAlert",
  getInitialState: function() {
    return {
      data : undefined
    };
  },
  componentDidMount: function() {

    var widget = this;

    jQuery.getFeed({
      url: this.props.url,
      success: function(feed) {

        if(widget.isMounted()) {
          widget.setState({
            data: feed
          });
        }

      }
    });
  },
  removeCdata : function(text) {
    return text.replace("<![CDATA[", "").replace("]]>","").trim();
  },
  render : function() {

    if(this.state.data) {

      var widget = this;
      var items = this.state.data.items.map(function(item) {

          var title = widget.removeCdata(item.title);
          var description = widget.removeCdata(item.description);
          description = description.substring(0, widget.props.lengthOfExcerpt);

          return (
            React.createElement("div", null, 
              React.createElement("h1", null, title), 
              React.createElement("p", null, description)
            )
          );
      });

      return(
        React.createElement("div", null, 
          items
        )
      );
    } else {
      return (React.createElement("div", null, React.createElement("p", null, "Loading Posts")));
    }
  }
});

React.render(
  React.createElement(LiveAlert, {url: "http://matthewcodes.github.io/atom.xml", lengthOfExcerpt: "78"}),
  document.getElementById('feed')
);
