var LiveAlert = React.createClass({
  getInitialState: function() {
    return {
      data : undefined
    };
  },
  componentDidMount: function() {

    var widget = this;

    jQuery.getFeed({
      url: 'http://matthewcodes.github.io/atom.xml',
      success: function(feed) {

        if(widget.isMounted()) {
          widget.setState({
            data: feed
          });
        }

      }
    });
  },
  render : function() {

    if(this.state.data) {

      var items = this.state.data.items.map(function(item) {
            return (
              <p>{item.title}</p>
            );
      });

      return(
        <div>
          {items}
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});

React.render(
  <LiveAlert/>,
  document.getElementById('feed')
);
