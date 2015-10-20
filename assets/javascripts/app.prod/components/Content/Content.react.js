(function (React, App) {

    App.Components.Content = React.createClass({displayName: "Content",

        render: function () {

            return(
                React.createElement("div", {className: "content"}, 
                    React.createElement("div", {className: "gold-border"}, 
                        React.createElement("div", {className: "gold-shine"}), 
                        React.createElement("div", {className: "black-border"}, 
                            React.createElement("div", {className: "tablet"}, 
                                React.createElement(App.Components.Header, null), 
                                React.createElement("p", null, "Software and web development"), 
                                React.createElement("h2", null, "Specialising in"), 
                                React.createElement("ul", null, 
                                    React.createElement("li", null, 
                                        React.createElement("h3", null, React.createElement(App.Components.Technology, {text: "JavaScript"})), 
                                        React.createElement("ul", null, 
                                            React.createElement("li", null, React.createElement(App.Components.Technology, {text: "React"})), 
                                            React.createElement("li", null, React.createElement(App.Components.Technology, {text: "AngularJS"})), 
                                            React.createElement("li", null, React.createElement(App.Components.Technology, {text: "Ember.js"})), 
                                            React.createElement("li", null, React.createElement(App.Components.Technology, {text: "jQuery"}))
                                        )
                                    ), 
                                    React.createElement("li", null, React.createElement(App.Components.Technology, {text: "Raphaël"})), 
                                    React.createElement("li", null, React.createElement(App.Components.Technology, {text: "CSS"})), 
                                    React.createElement("li", null, React.createElement(App.Components.Technology, {text: "Ruby Sinatra"})), 
                                    React.createElement("li", null, React.createElement(App.Components.Technology, {text: "Heroku"}))
                                ), 
                                React.createElement("h2", null, " Links"), 
                                React.createElement("ul", null, 
                                    React.createElement("li", null, 
                                        React.createElement("a", {href: "https://github.com/"}, " GitHub")
                                    )
                                )
                            )
                        )
                    )

                )
                );

        }
    });

})(React, App);