(function(React, App){

    App.Components.Header = React.createClass({displayName: "Header",
        render: function(){
            return(
                React.createElement("header", null, 
                    React.createElement(App.Components.Star, null), 
                    React.createElement("h1", {className: "main-header"}, 

                        React.createElement(App.Components.Text, {content: "Aircastle Solutions"})
                    ), 
                    React.createElement(App.Components.Star, null)
                )
                )
        }
    })

})(React, App);