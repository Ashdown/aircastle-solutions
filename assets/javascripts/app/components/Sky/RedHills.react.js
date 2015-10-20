(function(App, React){

    App.Components.RedHills = React.createClass({

        offsetSpeed: 0.15,
        offsetMaxLimit: 75,

        handleScroll: function(event){

            var newOffset = event.srcElement.body.scrollTop * this.offsetSpeed;

            if(newOffset >= 0 && newOffset <= this.offsetMaxLimit) {

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
                <div className="red-hills">
                    <App.Components.RedHillLeft yOffset={this.state.yOffset}/>
                    <App.Components.RedHillRight yOffset={this.state.yOffset}/>
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

})(App, React)