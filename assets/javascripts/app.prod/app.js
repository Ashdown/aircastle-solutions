//= require_directory .
//= require_tree .

(function(React, App) {

    React.render(
        React.createElement(App.Components.Container, null),
        document.getElementById('app')
    );

})(React, App);
