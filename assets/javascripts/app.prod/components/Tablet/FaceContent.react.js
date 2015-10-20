(function(App, React){

    App.Components.FaceContent = React.createClass({displayName: "FaceContent",
        render: function() {
            return(
                React.createElement("div", {className: "face-content"}, 
                    React.createElement(App.Components.Header, null), 
                    React.createElement("h2", null, 
                        React.createElement(App.Components.Text, {content: "Software Development"})
                    ), 
                    React.createElement("ul", null, 
                        React.createElement("li", null, 
                            React.createElement("h3", null, 
                                React.createElement(App.Components.Text, {content: "JavaScript"})
                            ), 
                            React.createElement("ul", null, 
                                React.createElement("li", null, 
                                    React.createElement(App.Components.Text, {content: "React"})
                                ), 
                                React.createElement("li", null, 
                                    React.createElement(App.Components.Text, {content: "AngularJS"})
                                ), 
                                React.createElement("li", null, 
                                    React.createElement(App.Components.Text, {content: "Ember.js"})
                                ), 
                                React.createElement("li", null, 
                                    React.createElement(App.Components.Text, {content: "jQuery"})
                                ), 
                                React.createElement("li", null, 
                                    React.createElement(App.Components.Text, {content: "Raphaël"})
                                )
                            )
                        ), 
                        React.createElement("li", null, 
                            React.createElement(App.Components.Text, {content: "CSS"})
                        ), 
                        React.createElement("li", null, 
                            React.createElement(App.Components.Text, {content: "Ruby Sinatra"})
                        ), 
                        React.createElement("li", null, 
                            React.createElement(App.Components.Text, {content: "Heroku"})
                        )
                    ), 
                    React.createElement("h2", null, 
                        React.createElement(App.Components.Text, {content: "Links"})
                    ), 
                    React.createElement("ul", null, 
                        React.createElement("li", null, 
                            React.createElement("a", {href: "https://github.com/"}, " GitHub")
                        )
                    )
                )
                );
        }

    });

})(App, React);