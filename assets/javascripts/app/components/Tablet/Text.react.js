(function(App, React, $){

    App.Components.Text = React.createClass({
        render: function(){
            return(
                <span className="text" title={this.props.content}>
                    {this.props.content}
                </span>
                );
        }
    });

})(App, React, jQuery);