(function(React, App){

    App.Components.Header = React.createClass({displayName: "Header",
        render: function(){
            return(
                React.createElement("header", null, 
                    React.createElement("h1", null, "Aircastle Solutions")
                )
                )
        }
    })

})(React, App);