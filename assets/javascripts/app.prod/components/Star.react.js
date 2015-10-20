(function(React, App){

    App.Components.Star = React.createClass({displayName: "Star",
        render: function(){
            return(
                React.createElement("span", null, "*")
                );
        }
    });

})(React, App);