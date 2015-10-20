(function(App, React){

    App.Components.Technology = React.createClass({displayName: "Technology",
        render: function(){
            return(
                React.createElement("span", null, 
                    this.props.text
                )
                );
        }
    });

})(App, React);