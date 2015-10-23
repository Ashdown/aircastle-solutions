(function (React, App, $) {

    App.Components.Tablet = React.createClass({

        handleScroll: function(event) {

            var scrollTop = event.srcElement.body.scrollTop,
                contentOffset = ($('.gold-border').height() - $('.face-content').height()) / 2;

            this.setState({
                goldBorderShineOffset: scrollTop,
                tabletFaceShineOffset: scrollTop - contentOffset
                });

        },

        getInitialState: function() {
          return{
              goldBorderShineOffset: 0,
              tabletFaceShineOffset: 0
          };
        },

        render: function () {

            return(
                <div className='tablet'>
                    <div className="tablet-content">
                        <div className='gold-border'>
                            <div className='shine gold-border-shine' style={{top: this.state.goldBorderShineOffset + 'px'}}></div>
                            <div className='black-border'>
                                <div className='face'>
                                    <div className="shine face-shine" style={{top: this.state.tabletFaceShineOffset + 'px'}}></div>
                                    <App.Components.FaceContent/>
                                </div>
                            </div>
                        </div>
                        <App.Components.Footer/>
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

})(React, App, jQuery);