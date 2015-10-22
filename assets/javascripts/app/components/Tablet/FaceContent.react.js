(function(App, React){

    App.Components.FaceContent = React.createClass({
        render: function() {
            return(
                <div className="face-content">
                    <App.Components.Header/>
                    <h2 className="secondary-title">
                        <App.Components.Text content="Software Development and Consultancy"/>
                    </h2>
                    <ul>
                        <li>
                            <h3 className="technology">
                                <App.Components.Text content="JavaScript"/>
                            </h3>
                            <ul>
                                <li className="technology">
                                    <App.Components.Text content="React"/>
                                </li>
                                <li className="technology">
                                    <App.Components.Text content="AngularJS"/>
                                </li>
                                <li className="technology">
                                    <App.Components.Text content="Ember.js"/>
                                </li>
                                <li className="technology">
                                    <App.Components.Text content="jQuery"/>
                                </li>
                                <li className="technology">
                                    <App.Components.Text content="Raphaël"/>
                                </li>
                            </ul>
                        </li>
                        <li className="technology">
                            <App.Components.Text content="CSS"/>
                        </li>
                        <li className="technology">
                            <App.Components.Text content="Ruby Sinatra"/>
                        </li>
                        <li className="technology">
                            <App.Components.Text content="Heroku"/>
                        </li>
                    </ul>
                    <h2 className="secondary-title">
                        <App.Components.Text content="Links"/>
                    </h2>
                    <ul>
                        <li className="technology">
                            <a className="link" title="GitHub" href="https://github.com/Ashdown">
                                <App.Components.Text content="GitHub"/>
                            </a>
                        </li>
                    </ul>
                </div>
                );
        }

    });

})(App, React);