(function(App, React){

    App.Components.SecondaryTitle = React.createClass({displayName: "SecondaryTitle",
        render: function(){
            return(
                React.createElement("h2", {className: "secondary-title"}, 
                    React.createElement(App.Components.Star, {type: "left"}), 
                    React.createElement(App.Components.Star, {type: "left"}), 
                    React.createElement(App.Components.Text, {content: this.props.content}), 
                    React.createElement(App.Components.Star, {type: "right"}), 
                    React.createElement(App.Components.Star, {type: "right"})
                )
            );
        }
    });

})(App, React);