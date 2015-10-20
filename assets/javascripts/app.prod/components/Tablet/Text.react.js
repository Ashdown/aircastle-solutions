(function(App, React){

    App.Components.Text = React.createClass({displayName: "Text",
        render: function(){
            return(
                React.createElement("span", {className: "text", title: this.props.content}, 
                    this.props.content
                )
                );
        }
    });

})(App, React);