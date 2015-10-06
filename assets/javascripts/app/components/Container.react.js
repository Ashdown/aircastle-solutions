(function (React, App) {

    App.Components.Container = React.createClass({

        render: function () {
            return (
                <div className="container">
                    <div className="content">
                        <App.Components.Sky/>
                        <App.Components.Tablet/>
                    </div>
                    <App.Components.Sunrise/>
                </div>
                );
        }

    });

})(React, App);