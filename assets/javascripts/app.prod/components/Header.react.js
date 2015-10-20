(function(React, App){

    App.Components.Header = React.createClass({displayName: "Header",
        render: function(){
            return(
                React.createElement("header", null, 
                    React.createElement("h1", null, 
                        React.createElement(App.Components.Star, null), 
                        React.createElement(App.Components.Technology, {text: "Aircastle Solutions"}), 
                        React.createElement(App.Components.Star, null)
                    )

                )
                )
        }
    })

})(React, App);