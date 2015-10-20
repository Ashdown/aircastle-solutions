(function(App, React){

    App.Components.RedHills = React.createClass({displayName: "RedHills",

        offsetSpeed: 0.15,
        offsetMaxLimit: 75,

        handleScroll: function(event){

            var newOffset = this.state.initialOffset + (event.srcElement.body.scrollTop * this.offsetSpeed);

            if(newOffset >= this.state.initialOffset && newOffset <= this.state.initialOffset + this.offsetMaxLimit) {

                this.setState({
                    yOffset: newOffset
                });
            }
        },

        isTabletOrLarger: function(){

            console.log('innerwidth:' + window.innerWidth);

            return window.innerWidth >= 768;
        },

        getInitialState: function() {

            var offset = 243;

            if(this.isTabletOrLarger()) {
                offset = 295;
            }

            return {
                initialOffset: offset,
                yOffset: offset
            };
        },

        render: function(){

            return(
                React.createElement("div", null, 
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