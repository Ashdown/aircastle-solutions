(function(App, React){

    App.Components.RedHills = React.createClass({displayName: "RedHills",

        handleScroll: function(event){

            var newOffset = event.srcElement.body.scrollTop * App.Constants.SkyConstants.SKY_OFFSET_SPEED;

            if(newOffset >= 0 && newOffset <= App.Constants.SkyConstants.SKY_OFFSET_MAX_LIMIT) {

                this.setState({
                    yOffset: newOffset
                });
            }
        },

        getInitialState: function() {

            return {
                initialOffset: 0,
                yOffset: 0
            };
        },

        render: function(){

            return(
                React.createElement("div", {className: "red-hills"}, 
                    React.createElement(App.Components.RedHillLeft, {yOffset: this.state.yOffset}), 
                    React.createElement(App.Components.RedHillRight, {yOffset: this.state.yOffset})
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

})(App, React)