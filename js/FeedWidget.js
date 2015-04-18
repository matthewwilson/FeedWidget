var LiveAlert = React.createClass({
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
            <div>
              <a href={item.link}><h1>{title}</h1></a>
              <p>{description}</p>
            </div>
          );
      });

      return(
        <div>
          {items}
        </div>
      );
    } else {
      return (<div><p>Loading Posts</p></div>);
    }
  }
});

React.render(
  <LiveAlert url="http://matthewcodes.github.io/atom.xml" lengthOfExcerpt="78"/>,
  document.getElementById('feed')
);
