(function(App, React){

    App.Components.FaceContent = React.createClass({displayName: "FaceContent",
        render: function() {
            return(
                React.createElement("div", {className: "face-content"}, 
                    React.createElement(App.Components.Header, null), 
                    React.createElement("p", {className: "para"}, 
                        React.createElement(App.Components.Text, {content: "Software Development and Consultancy"})
                    ), 
                    React.createElement(App.Components.SecondaryTitle, {content: "Technologies"}), 
                    React.createElement("ul", null, 
                        React.createElement("li", null, 
                            React.createElement("h3", {className: "technology"}, 
                                React.createElement(App.Components.Text, {content: "JavaScript"})
                            ), 
                            React.createElement("ul", null, 
                                React.createElement("li", {className: "technology"}, 
                                    React.createElement(App.Components.Text, {content: "React"})
                                ), 
                                React.createElement("li", {className: "technology"}, 
                                    React.createElement(App.Components.Text, {content: "AngularJS"})
                                ), 
                                React.createElement("li", {className: "technology"}, 
                                    React.createElement(App.Components.Text, {content: "Ember.js"})
                                ), 
                                React.createElement("li", {className: "technology"}, 
                                    React.createElement(App.Components.Text, {content: "jQuery"})
                                ), 
                                React.createElement("li", {className: "technology"}, 
                                    React.createElement(App.Components.Text, {content: "Raphaël"})
                                )
                            )
                        ), 
                        React.createElement("li", {className: "technology"}, 
                            React.createElement(App.Components.Text, {content: "CSS"})
                        ), 
                        React.createElement("li", {className: "technology"}, 
                            React.createElement(App.Components.Text, {content: "Ruby Sinatra"})
                        ), 
                        React.createElement("li", {className: "technology"}, 
                            React.createElement(App.Components.Text, {content: "Heroku"})
                        )
                    ), 
                    React.createElement(App.Components.SecondaryTitle, {content: "Links"}), 
                    React.createElement("ul", null, 
                        React.createElement("li", {className: "technology"}, 
                            React.createElement("a", {className: "link", title: "GitHub", href: "https://github.com/Ashdown"}, 
                                React.createElement(App.Components.Text, {content: "GitHub"})
                            )
                        )
                    )
                )
            );
        }

    });

})(App, React);