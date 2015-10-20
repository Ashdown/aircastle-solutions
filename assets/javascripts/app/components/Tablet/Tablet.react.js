(function (React, App) {

    App.Components.Tablet = React.createClass({

        handleScroll: function(event) {

            var scrollTop = event.srcElement.body.scrollTop;

            if(scrollTop > 300) {
                this.setState({
                    shineOffset: scrollTop - 300
                });
            }
            
        },

        getInitialState: function() {
          return{
              shineOffset: 0
          };
        },

        render: function () {

            return(
                <div className='tablet'>
                    <div className='gold-border'>
                        <div className='shine gold-border-shine' style={{top: this.state.shineOffset + 'px'}}></div>
                        <div className='black-border'>
                            <div className='face'>
                                <div className="shine face-shine" style={{top: this.state.shineOffset + 'px'}}></div>
                                <App.Components.FaceContent/>
                            </div>
                        </div>
                    </div>

                    <div className="background background-top"></div>
                    <div className="background background-bottom"></div>
                    <div className="background background-fade"></div>
                </div>
            );

        },

        componentDidMount: function() {
            window.addEventListener('scroll', this.handleScroll);
        },

        componentWillUnmount: function() {
            window.removeEventListener('scroll', this.handleScroll);
        }
    });

})(React, App);