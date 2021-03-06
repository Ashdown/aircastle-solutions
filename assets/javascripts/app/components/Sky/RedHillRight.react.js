(function(App, React){

    App.Components.RedHillRight = React.createClass({
        render: function(){
            return(
                <svg className="hill red-hill red-hill-right" style={{top: this.props.yOffset + 'px'}}>
                    <defs>
                        <linearGradient id="red_hill_right_gradient_1" gradientUnits="userSpaceOnUse" x1="302.825" y1="337.55" x2="455.77500000000003" y2="129.45" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#513717"}}/>

                            <stop  offset="20.784313725490197%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="32.549019607843135%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="50.98039215686274%" style={{stopColor:"#FAFEF4"}}/>

                            <stop  offset="70.19607843137256%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="85.09803921568627%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="100%" style={{stopColor:"#513717"}}/>
                        </linearGradient>

                        <linearGradient id="red_hill_right_gradient_2" gradientUnits="userSpaceOnUse" x1="220.47499999999997" y1="52.474999999999966" x2="396.325" y2="394.425" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#333333"}}/>

                            <stop  offset="100%" style={{stopColor:"#000000"}}/>
                        </linearGradient>

                        <linearGradient id="red_hill_right_gradient_3" gradientUnits="userSpaceOnUse" x1="270.54999999999995" y1="60" x2="344.75" y2="250" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#61473C"}}/>

                            <stop  offset="100%" style={{stopColor:"#58324B"}}/>
                        </linearGradient>
                    </defs>
                    
                    <g>
                        <path fill="url(#red_hill_right_gradient_1)" stroke="none" d="
                            M 1106 252
                            Q 1106 147.7 944.05 73.9 782.1 0 553 0 323.95 0 162 73.9 0 147.7 0 252 0 356.4 162 430.25 323.95 504 553 504 782.1 504 944.05 430.25 1106 356.4 1106 252
                            M 940.35 82.8
                            Q 1100.7 152.9 1100.7 252 1100.7 351.2 940.35 421.35 779.9 491.4 553 491.4 326.2 491.4 165.75 421.35 5.35 351.2 5.35 252 5.35 152.9 165.75 82.8 326.2 12.6 553 12.6 779.9 12.6 940.35 82.8 Z"/>

                        <path fill="url(#red_hill_right_gradient_2)" stroke="none" d="
                            M 1100.7 252
                            Q 1100.7 152.9 940.35 82.8 779.9 12.6 553 12.6 326.2 12.6 165.75 82.8 5.35 152.9 5.35 252 5.35 351.2 165.75 421.35 326.2 491.4 553 491.4 779.9 491.4 940.35 421.35 1100.7 351.2 1100.7 252
                            M 929.05 96.2
                            Q 1084.75 160.8 1084.75 252 1084.75 343.35 929.05 408 773.2 472.5 553 472.5 332.8 472.5 177 408 21.3 343.35 21.3 252 21.3 160.8 177 96.2 332.8 31.6 553 31.6 773.2 31.6 929.05 96.2 Z"/>

                        <path fill="url(#red_hill_right_gradient_3)" stroke="none" d="
                            M 1084.75 252
                            Q 1084.75 160.8 929.05 96.2 773.2 31.6 553 31.6 332.8 31.6 177 96.2 21.3 160.8 21.3 252 21.3 343.35 177 408 332.8 472.5 553 472.5 773.2 472.5 929.05 408 1084.75 343.35 1084.75 252 Z"/>
                    </g>
                </svg>
                );
        }
    });

})(App, React)