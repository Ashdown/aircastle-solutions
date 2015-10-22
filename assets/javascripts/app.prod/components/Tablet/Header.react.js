(function(React, App){

    App.Components.Header = React.createClass({displayName: "Header",
        render: function(){
            return(
                React.createElement("header", {className: "header"}, 
                    React.createElement("h1", {className: "main-heading"}, 
                        React.createElement(App.Components.Star, {type: "right"}), 
                        React.createElement(App.Components.Text, {content: "Aircastle Solutions"}), 
                        React.createElement(App.Components.Star, {type: "left"})
                    )
                )
                )
        }
    });

})(React, App);