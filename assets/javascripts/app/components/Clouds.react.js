(function(App, React){
    App.Components.Clouds = React.createClass({
        render: function(){
            return (
                <div className="clouds">
                    <App.Components.LeftCloud/>
                    <App.Components.RightCloud/>
                </div>
                );
        }
    });
})(App, React);