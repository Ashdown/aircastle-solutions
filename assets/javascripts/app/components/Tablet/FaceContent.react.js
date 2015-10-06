(function(App, React){

    App.Components.FaceContent = React.createClass({
        render: function(){
            return(
                <div className="face-content">
                    <App.Components.Header/>
                    <p>Software and web development</p>
                    <h2>Specialising in</h2>
                    <ul>
                        <li>
                            <h3><App.Components.Technology text="JavaScript"/></h3>
                            <ul>
                                <li><App.Components.Technology text="React"/></li>
                                <li><App.Components.Technology text="AngularJS"/></li>
                                <li><App.Components.Technology text="Ember.js"/></li>
                                <li><App.Components.Technology text="jQuery"/></li>
                            </ul>
                        </li>
                        <li><App.Components.Technology text="Raphaël"/></li>
                        <li><App.Components.Technology text="CSS"/></li>
                        <li><App.Components.Technology text="Ruby Sinatra"/></li>
                        <li><App.Components.Technology text="Heroku"/></li>
                    </ul>
                    <h2> Links</h2>
                    <ul>
                        <li>
                            <a href="https://github.com/"> GitHub</a>
                        </li>
                    </ul>
                </div>
                );
        }
    });

})(App, React);