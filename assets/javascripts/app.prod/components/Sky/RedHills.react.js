(function(App, React){

    App.Components.RedHills = React.createClass({displayName: "RedHills",
        render: function(){
            return(
                React.createElement("div", null, 
                    React.createElement(App.Components.RedHillLeft, null), 
                    React.createElement(App.Components.RedHillRight, null)
                )
                );
        }
    });

})(App, React)