(function(React, App){

    App.Components.Header = React.createClass({
        render: function(){
            return(
                <header>
                    <App.Components.Star/>
                    <h1 className="main-header">

                        <App.Components.Text content="Aircastle Solutions"/>
                    </h1>
                    <App.Components.Star/>
                </header>
                )
        }
    })

})(React, App);