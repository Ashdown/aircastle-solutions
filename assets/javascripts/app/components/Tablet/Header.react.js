(function(React, App){

    App.Components.Header = React.createClass({
        render: function(){
            return(
                <header className="header">
                    <h1 className="main-heading">
                        <App.Components.Star type="right"/>
                        <App.Components.Text content="Aircastle Solutions"/>
                        <App.Components.Star type="left"/>
                    </h1>
                </header>
                )
        }
    });

})(React, App);