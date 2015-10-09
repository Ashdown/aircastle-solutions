(function(React, App){
    App.Components.BlueHillLeft = React.createClass({
        render: function(){
            return (
                <svg className="hill blue-hill blue-hill-left">
                    <defs>
                        <linearGradient id="blue_hill_left_gradient_1" gradientUnits="userSpaceOnUse" x1="539.775" y1="104.82499999999999" x2="648.3249999999999" y2="302.675" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#513717"}}/>

                            <stop  offset="20.784313725490197%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="32.549019607843135%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="50.98039215686274%" style={{stopColor:"#FAFEF4"}}/>

                            <stop  offset="70.19607843137256%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="85.09803921568627%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="100%" style={{stopColor:"#513717"}}/>
                        </linearGradient>

                        <linearGradient id="blue_hill_left_gradient_2" gradientUnits="userSpaceOnUse" x1="365.13750000000005" y1="-107.73750000000001" x2="262.4625" y2="173.4375" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#333333"}}/>

                            <stop  offset="100%" style={{stopColor:"#000000"}}/>
                        </linearGradient>

                        <linearGradient id="blue_hill_left_gradient_3" gradientUnits="userSpaceOnUse" x1="466.6" y1="-82.8" x2="400.5" y2="86.60000000000001" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#514758"}}/>

                            <stop  offset="25%" style={{stopColor:"#3A325D"}}/>
                        </linearGradient>
                    </defs>
                    <g>
                        <path fill="url(#blue_hill_left_gradient_1)" stroke="none" d="
                            M 1040 200
                            Q 1040 117.2 887.7 58.65 735.4 0 520 0 304.6 0 152.3 58.65 0 117.2 0 200 0 282.85 152.3 341.45 304.6 400 520 400 735.4 400 887.7 341.45 1040 282.85 1040 200
                            M 884.2 65.7
                            Q 1035 121.35 1035 200 1035 278.7 884.2 334.4 733.35 390 520 390 306.7 390 155.85 334.4 5 278.7 5 200 5 121.35 155.85 65.7 306.7 10 520 10 733.35 10 884.2 65.7 Z"/>

                        <path fill="url(#blue_hill_left_gradient_2)" stroke="none" d="
                            M 1035 200
                            Q 1035 121.35 884.2 65.7 733.35 10 520 10 306.7 10 155.85 65.7 5 121.35 5 200 5 278.7 155.85 334.4 306.7 390 520 390 733.35 390 884.2 334.4 1035 278.7 1035 200
                            M 873.6 76.35
                            Q 1020 127.6 1020 200 1020 272.5 873.6 323.8 727.05 375 520 375 312.9 375 166.4 323.8 20 272.5 20 200 20 127.6 166.4 76.35 312.9 25.05 520 25.05 727.05 25.05 873.6 76.35 Z"/>

                        <path fill="url(#blue_hill_left_gradient_3)" stroke="none" d="
                            M 1020 200
                            Q 1020 127.6 873.6 76.35 727.05 25.05 520 25.05 312.9 25.05 166.4 76.35 20 127.6 20 200 20 272.5 166.4 323.8 312.9 375 520 375 727.05 375 873.6 323.8 1020 272.5 1020 200 Z"/>
                    </g>
                </svg>
                
                )
        }
    })

})(React, App)