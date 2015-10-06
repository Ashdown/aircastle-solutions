(function(App, React){

    App.Components.FaceContent = React.createClass({
        render: function() {
            return(
                <div className="face-content">
                    <App.Components.Header/>
                    <h2>
                        <App.Components.Text content="Software Development"/>
                    </h2>
                    <ul>
                        <li>
                            <h3>
                                <App.Components.Text content="JavaScript"/>
                            </h3>
                            <ul>
                                <li>
                                    <App.Components.Text content="React"/>
                                </li>
                                <li>
                                    <App.Components.Text content="AngularJS"/>
                                </li>
                                <li>
                                    <App.Components.Text content="Ember.js"/>
                                </li>
                                <li>
                                    <App.Components.Text content="jQuery"/>
                                </li>
                                <li>
                                    <App.Components.Text content="Raphaël"/>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <App.Components.Text content="CSS"/>
                        </li>
                        <li>
                            <App.Components.Text content="Ruby Sinatra"/>
                        </li>
                        <li>
                            <App.Components.Text content="Heroku"/>
                        </li>
                    </ul>
                    <h2>
                        <App.Components.Text content="Links"/>
                    </h2>
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