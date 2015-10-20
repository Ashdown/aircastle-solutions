(function (React, App) {

    App.Components.Tablet = React.createClass({displayName: "Tablet",

        render: function () {

            return(
                React.createElement("div", {className: "tablet"}, 
                    React.createElement("div", {className: "gold-border"}, 
                        React.createElement("div", {className: "shine gold-border-shine"}), 
                        React.createElement("div", {className: "black-border"}, 
                            React.createElement("div", {className: "face"}, 
                                React.createElement("div", {className: "shine face-shine"}), 
                                React.createElement(App.Components.FaceContent, null)
                            )
                        )
                    ), 

                    React.createElement("div", {className: "background background-top"}), 
                    React.createElement("div", {className: "background background-bottom"}), 
                    React.createElement("div", {className: "background background-fade"})
                )
                );

        }
    });

})(React, App);