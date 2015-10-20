(function(App, React){
    App.Components.CloudContainer = React.createClass({displayName: "CloudContainer",
        render: function(){
            return (
                React.createElement("div", {className: "cloud-container"}, 
                    React.createElement(App.Components.LeftCloud, null), 
                    React.createElement(App.Components.RightCloud, null)
                )
                );
        }
    });
})(App, React);