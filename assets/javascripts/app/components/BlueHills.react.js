(function (App, React) {

    App.Components.BlueHills = React.createClass({
        render: function () {
            return(
                <svg className="blue-hills">
                    <defs>
                        <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="289.27500000000003" y1="31.575000000000003" x2="253.82500000000002" y2="137.825" spreadMethod="pad">
                            <stop offset="0%" style={{stopColor:"#514758", stopOpacity:1}} />
                            <stop offset="100%" style={{stopColor:"#3A325D", stopOpacity:1}} />
                        </linearGradient>

                        <linearGradient id="Gradient_2" gradientUnits="userSpaceOnUse" x1="300.03749999999997" y1="-21.900000000000006" x2="229.7625" y2="166.20000000000002" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#333333"}}/>

                            <stop  offset="100%" style={{stopColor:"#000000"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_3" gradientUnits="userSpaceOnUse" x1="291.95000000000005" y1="-27.55000000000001" x2="528.25" y2="133.55" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#513717"}}/>

                            <stop  offset="9.411764705882353%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="32.549019607843135%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="50.98039215686274%" style={{stopColor:"#FAFEF4"}}/>

                            <stop  offset="70.19607843137256%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="85.09803921568627%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="100%" style={{stopColor:"#513717"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_4" gradientUnits="userSpaceOnUse" x1="784.6999999999999" y1="36.099999999999994" x2="821.4" y2="149.4" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#514758"}}/>

                            <stop  offset="100%" style={{stopColor:"#3A325D"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_5" gradientUnits="userSpaceOnUse" x1="797.9499999999999" y1="-27.55000000000001" x2="561.65" y2="133.55" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#513717"}}/>

                            <stop  offset="9.411764705882353%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="32.549019607843135%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="50.98039215686274%" style={{stopColor:"#FAFEF4"}}/>

                            <stop  offset="70.19607843137256%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="85.09803921568627%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="100%" style={{stopColor:"#513717"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_6" gradientUnits="userSpaceOnUse" x1="789.8625" y1="-21.900000000000006" x2="860.1375" y2="166.20000000000002" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#333333"}}/>

                            <stop  offset="100%" style={{stopColor:"#000000"}}/>
                        </linearGradient>

                    </defs>
                    <g>
                        <path fill="url(#Gradient_1)" stroke="none" d="
                            M 522.9 138.85
                            L 533.05 125.95
                            Q 284.85 -3.75 0 22.55
                            L 0 200 522.9 200 522.9 138.85 Z"/>

                        <path fill="url(#Gradient_2)" stroke="none" d="
                            M 533.05 125.95
                            L 542.2 115.15
                            Q 309.95 -17.5 0 9.75
                            L 0 22.55
                            Q 284.85 -3.75 533.05 125.95 Z"/>

                        <path fill="url(#Gradient_3)" stroke="none" d="
                            M 544 110.75
                            Q 544.45 110.45 544.95 110.2 437.75 44.3 300.35 17.8 164.5 -8.45 0 4
                            L 0 9.75
                            Q 309.95 -17.5 542.2 115.15
                            L 544.95 111.9 544 110.75 Z"/>

                        <path fill="url(#Gradient_4)" stroke="none" d="
                            M 1090 200
                            L 1090 22.55
                            Q 805.05 -3.75 556.85 125.95
                            L 567 138.85 567 200 1090 200 Z"/>

                        <path fill="url(#Gradient_5)" stroke="none" d="
                            M 1090 9.8
                            L 1090 4.05
                            Q 925.45 -8.45 789.55 17.8 652.15 44.3 544.95 110.2 544.45 110.45 544 110.75
                            L 544.95 111.9 547.7 115.15
                            Q 780 -17.5 1090 9.8 Z"/>

                        <path fill="url(#Gradient_6)" stroke="none" d="
                            M 1090 22.55
                            L 1090 9.8
                            Q 780 -17.5 547.7 115.15
                            L 556.85 125.95
                            Q 805.05 -3.75 1090 22.55 Z"/>
                    </g>
                </svg>
                );
        }
    });

})(App, React)