(function(App, React){

    App.Components.Technology = React.createClass({
        render: function(){
            return(
                <span>
                    {this.props.text}
                </span>
                );
        }
    });

})(App, React);