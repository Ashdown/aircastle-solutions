(function(React, App){

    App.Components.Footer = React.createClass({displayName: "Footer",
        render: function(){
            return(
                React.createElement("footer", {className: "footer"}, 
                    React.createElement(App.Components.Logo, null), 
                    React.createElement("p", {className: "para"}, "© Copyright 2015 Aircastle Soltions Ltd")
                )
            );
        }
    })

})(React, App);