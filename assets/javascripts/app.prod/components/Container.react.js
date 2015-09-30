(function (React, App) {

    App.Components.Container = React.createClass({displayName: "Container",

        render: function () {
            return (
                React.createElement("div", null, 
                    React.createElement(App.Components.Sky, null), 
                    React.createElement(App.Components.Content, null), 
                    React.createElement(App.Components.Footer, null)
                )
                );
        }

    });

})(React, App);