(function (React, App) {

    App.Components.Tablet = React.createClass({

        render: function () {

            return(
                <div className='tablet'>
                    <div className='gold-border'>
                        <div className='shine gold-border-shine'></div>
                        <div className='black-border'>
                            <div className='face'>
                                <div className="shine face-shine"></div>
                                <App.Components.FaceContent/>
                            </div>
                        </div>
                    </div>

                </div>
                );

        }
    });

})(React, App);