# FeedWidget
A react.js widget for displaying an atom or rss feed on a webpage

An example can be viewed at the bottom of [this site](http://mwil.so/)

##How to Use

Add the following imports to the bottom of the body:

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="js/jquery.jfeed.js"></script>
    <script src="js/react.min.js"></script>
    <script src="build/FeedWidget.js"></script>
    
    
Add a div with an id of feed where you want to display your posts:

    <div id="feed"></div>
    
In FeedWidget.js you can configure the url of the feed you want to use in the React.render function:

    React.render(
      React.createElement(LiveAlert, {url: "http://matthewcodes.github.io/atom.xml", lengthOfExcerpt: "78"}),
      document.getElementById('feed')
    );
