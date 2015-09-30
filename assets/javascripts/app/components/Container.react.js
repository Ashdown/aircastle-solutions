(function (React, App) {

    App.Components.Container = React.createClass({

        render: function () {
            return (
                <div>
                    <App.Components.Sky/>
                    <App.Components.Content/>
                    <App.Components.Footer/>
                </div>
                );
        }

    });

})(React, App);