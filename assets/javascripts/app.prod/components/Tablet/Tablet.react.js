(function (React, App, $) {

    App.Components.Tablet = React.createClass({displayName: "Tablet",

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
                React.createElement("div", {className: "tablet"}, 
                    React.createElement("div", {className: "tablet-content"}, 
                        React.createElement("div", {className: "gold-border"}, 
                            React.createElement("div", {className: "shine gold-border-shine", style: {top: this.state.goldBorderShineOffset + 'px'}}), 
                            React.createElement("div", {className: "black-border"}, 
                                React.createElement("div", {className: "face"}, 
                                    React.createElement("div", {className: "shine face-shine", style: {top: this.state.tabletFaceShineOffset + 'px'}}), 
                                    React.createElement(App.Components.FaceContent, null)
                                )
                            )
                        ), 
                        React.createElement(App.Components.Footer, null)
                    ), 
                    React.createElement("div", {className: "background background-top"}), 
                    React.createElement("div", {className: "background background-bottom"}), 
                    React.createElement("div", {className: "background background-fade"})
                )
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