(function (React, App) {

    App.Components.Container = React.createClass({

        render: function () {
            return (
                <div className="container">
                    <App.Components.Sky/>
                    <App.Components.Content/>
                    <App.Components.Footer/>
                    <App.Components.Sunrise/>
                </div>
                );
        }

    });

})(React, App);