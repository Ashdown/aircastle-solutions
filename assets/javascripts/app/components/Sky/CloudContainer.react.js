(function(App, React){
    App.Components.CloudContainer = React.createClass({
        render: function(){
            return (
                <div className="cloud-container">
                    <App.Components.LeftCloud/>
                    <App.Components.RightCloud/>
                </div>
                );
        }
    });
})(App, React);