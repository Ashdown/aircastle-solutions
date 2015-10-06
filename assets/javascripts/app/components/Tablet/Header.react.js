(function(React, App){

    App.Components.Header = React.createClass({
        render: function(){
            return(
                <header>
                    <h1 className="main-header">
                        <App.Components.Text content="Aircastle Solutions"/>
                    </h1>
                </header>
                )
        }
    })

})(React, App);