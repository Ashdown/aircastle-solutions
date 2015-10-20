(function (React, App) {

    App.Components.Container = React.createClass({displayName: "Container",

        render: function () {
            return (
                React.createElement("div", {className: "container"}, 
                    React.createElement("div", {className: "content"}, 
                        React.createElement(App.Components.Sky, null), 
                        React.createElement(App.Components.Tablet, null)
                    ), 
                    React.createElement(App.Components.Sunrise, null)
                )
                );
        }

    });

})(React, App);