(function(App, React){
    App.Components.CloudContainer = React.createClass({

        handleScroll: function(){
            var newOffset = event.srcElement.body.scrollTop * App.Constants.SkyConstants.SKY_OFFSET_SPEED;

            if(newOffset >= 0 && newOffset <= App.Constants.SkyConstants.SKY_OFFSET_MAX_LIMIT) {

                this.setState({
                    yOffset: -newOffset
                });
            }
        },

        getInitialState: function(){
            return {
                yOffset: 0
            };
        },

        render: function(){
            return (
                <div className="cloud-container" style={{top: this.state.yOffset + 'px'}}>
                    <App.Components.LeftCloud/>
                    <App.Components.RightCloud/>
                </div>
                );
        },

        componentDidMount: function(){
            window.addEventListener('scroll', this.handleScroll);
        },

        componentWillUnmount: function(){
            window.removeEventListener('scroll', this.handleScroll);
        }
    });
})(App, React);