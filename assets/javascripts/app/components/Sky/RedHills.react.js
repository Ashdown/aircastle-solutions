(function(App, React){

    App.Components.RedHills = React.createClass({
        render: function(){
            return(
                <div>
                    <App.Components.RedHillLeft/>
                    <App.Components.RedHillRight/>
                </div>
                );
        }
    });

})(App, React)