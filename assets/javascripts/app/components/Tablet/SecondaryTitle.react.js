(function(App, React){

    App.Components.SecondaryTitle = React.createClass({
        render: function(){
            return(
                <h2 className="secondary-title">
                    <App.Components.Star type="left"/>
                    <App.Components.Star type="left"/>
                    <App.Components.Text content={this.props.content}/>
                    <App.Components.Star type="right"/>
                    <App.Components.Star type="right"/>
                </h2>
            );
        }
    });

})(App, React);