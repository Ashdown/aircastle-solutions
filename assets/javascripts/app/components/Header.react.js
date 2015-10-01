(function(React, App){

    App.Components.Header = React.createClass({
        render: function(){
            return(
                <header>
                    <h1>
                        <App.Components.Star/>
                        <App.Components.Technology text="Aircastle Solutions"/>
                        <App.Components.Star/>
                    </h1>

                </header>
                )
        }
    })

})(React, App);