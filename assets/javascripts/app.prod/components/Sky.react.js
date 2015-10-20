(function (React, App) {

    App.Components.Sky = React.createClass({displayName: "Sky",

        render: function(){

            return (
                React.createElement("div", {className: "sky"}, 
                    React.createElement("p", null, "The Sky goes here...")
                )
            );
        }
    });

})(React, App);