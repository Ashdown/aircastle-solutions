(function(App, React){
    App.Components.CloudContainer = React.createClass({displayName: "CloudContainer",

        handleScroll: function(event){
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
                React.createElement("div", {className: "cloud-container", style: {top: this.state.yOffset + 'px'}}, 
                    React.createElement(App.Components.LeftCloud, null), 
                    React.createElement(App.Components.RightCloud, null)
                )
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