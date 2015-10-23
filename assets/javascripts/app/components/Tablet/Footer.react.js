(function(React, App){

    App.Components.Footer = React.createClass({
        render: function(){
            return(
                <footer className="footer">
                    <App.Components.Logo/>
                    <p className="para">© Copyright 2015 Aircastle Soltions Ltd</p>
                </footer>
            );
        }
    })

})(React, App);