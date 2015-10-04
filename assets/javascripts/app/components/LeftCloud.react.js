(function(App, React){

    App.Components.LeftCloud = React.createClass({
        render: function(){
            return(
                <svg className="cloud left-cloud">

                    <defs>
                        <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="100.92499999999998" y1="30.38749999999999" x2="222.775" y2="152.3125" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#513717"}}/>

                            <stop  offset="9.411764705882353%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="32.549019607843135%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="50.98039215686274%" style={{stopColor:"#FAFEF4"}}/>

                            <stop  offset="70.19607843137256%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="85.09803921568627%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="100%" style={{stopColor:"#513717"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_2" gradientUnits="userSpaceOnUse" x1="265.0625" y1="110.575" x2="104.63749999999999" y2="270.52500000000003" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#333333"}}/>

                            <stop  offset="100%" style={{stopColor:"#000000"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_3" gradientUnits="userSpaceOnUse" x1="262.3125" y1="113.41250000000001" x2="108.08749999999998" y2="267.1875" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#77433A"}}/>

                            <stop  offset="100%" style={{stopColor:"#231311"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_4" gradientUnits="userSpaceOnUse" x1="210.0125" y1="140.45" x2="365.58750000000003" y2="269.05" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#513717"}}/>

                            <stop  offset="9.411764705882353%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="32.549019607843135%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="50.98039215686274%" style={{stopColor:"#FAFEF4"}}/>

                            <stop  offset="70.19607843137256%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="85.09803921568627%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="100%" style={{stopColor:"#513717"}}/>
                        </linearGradient>
                    </defs>
                    
                    <g id="Layer0_0_FILL">
                        <path fill="url(#Gradient_1)" stroke="none" d="
                            M 249.7 123.6
                            L 259.2 116
                            Q 256.25 70 222.9 36.6 186.3 0 134.5 0 87.35 0 52.8 30.4 84.2 7.6 125 7.6 176.8 7.6 213.4 44.2 246.75 77.6 249.7 123.6 Z"/>

                        <path fill="url(#Gradient_2)" stroke="none" d="
                            M 326.5 343.1
                            Q 329.85 340.15 333.1 336.9 369.7 300.3 369.7 248.5 369.7 196.75 333.1 160.1 298.25 125.3 249.7 123.6 246.75 77.6 213.4 44.2 176.8 7.6 125 7.6 84.2 7.6 52.8 30.4 44.4 36.45 36.65 44.2 0 80.85 0 132.6 0 184.4 36.65 221 71.45 255.8 119.95 257.55 122.95 303.55 156.35 336.9 192.9 373.5 244.7 373.5 291.85 373.5 326.5 343.1
                            M 230.75 124.2
                            Q 231 127.85 231 131.6 231 138.4 230.25 144.85 237.1 144 244.35 144 246.95 144 249.5 144.1 289.65 145.85 318.6 174.75 349.35 205.5 349.35 249 349.35 292.45 318.6 323.2 287.8 354 244.35 354 200.85 354 170.15 323.2 142.15 295.25 139.6 256.85 139.35 252.95 139.35 249 139.35 242.2 140.1 235.75 133.2 236.6 126 236.6 123.1 236.6 120.2 236.45 80.45 234.55 51.75 205.85 21 175.1 21 131.6 21 88.15 51.75 57.35 82.5 26.6 126 26.6 169.5 26.6 200.25 57.35 228.35 85.5 230.75 124.2 Z"/>

                        <path fill="url(#Gradient_3)" stroke="none" d="
                            M 231 131.6
                            Q 231 127.85 230.75 124.2 228.35 85.5 200.25 57.35 169.5 26.6 126 26.6 82.5 26.6 51.75 57.35 21 88.15 21 131.6 21 175.1 51.75 205.85 80.45 234.55 120.2 236.45 123.1 236.6 126 236.6 133.2 236.6 140.1 235.75 139.35 242.2 139.35 249 139.35 252.95 139.6 256.85 142.15 295.25 170.15 323.2 200.85 354 244.35 354 287.8 354 318.6 323.2 349.35 292.45 349.35 249 349.35 205.5 318.6 174.75 289.65 145.85 249.5 144.1 246.95 144 244.35 144 237.1 144 230.25 144.85 231 138.4 231 131.6 Z"/>

                        <path fill="url(#Gradient_4)" stroke="none" d="
                            M 333.1 336.9
                            Q 329.85 340.15 326.5 343.1 334.9 337 342.6 329.3 379.2 292.7 379.2 240.9 379.2 189.15 342.6 152.5 307.75 117.7 259.2 116
                            L 249.7 123.6
                            Q 298.25 125.3 333.1 160.1 369.7 196.75 369.7 248.5 369.7 300.3 333.1 336.9 Z"/>
                    </g>
                
                </svg>
                );
        }
    });

})(App, React)