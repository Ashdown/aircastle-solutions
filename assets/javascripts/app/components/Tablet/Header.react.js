(function(React, App){

    App.Components.Header = React.createClass({
        render: function(){
            return(
                <header className="header">
                    <h1 className="main-heading">
                        <App.Components.Text content="Aircastle Solutions"/>
                    </h1>
                </header>
                )
        }
    });

})(React, App);