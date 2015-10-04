(function(App, React){

    App.Components.RedHills = React.createClass({
        render: function(){
            return(
                <svg className="red-hills">
                    <defs>
                        <linearGradient id="Gradient_1" gradientUnits="userSpaceOnUse" x1="40.6" y1="-61.9875" x2="-24.7" y2="79.3875" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#61473C"}}/>

                            <stop  offset="100%" style={{stopColor:"#58324B"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_2" gradientUnits="userSpaceOnUse" x1="281.2125" y1="28.637499999999996" x2="236.7875" y2="127.36250000000001" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#333333"}}/>

                            <stop  offset="100%" style={{stopColor:"#000000"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_3" gradientUnits="userSpaceOnUse" x1="522.4" y1="170.66250000000002" x2="274" y2="27.237499999999997" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#513717"}}/>

                            <stop  offset="20.784313725490197%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="32.549019607843135%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="50.98039215686274%" style={{stopColor:"#FAFEF4"}}/>

                            <stop  offset="70.19607843137256%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="85.09803921568627%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="100%" style={{stopColor:"#513717"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_4" gradientUnits="userSpaceOnUse" x1="1049.1999999999998" y1="-61.9875" x2="1114.5" y2="79.3875" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#61473C"}}/>

                            <stop  offset="100%" style={{stopColor:"#58324B"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_5" gradientUnits="userSpaceOnUse" x1="808.5875" y1="28.637499999999996" x2="853.0124999999999" y2="127.36250000000001" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#333333"}}/>

                            <stop  offset="100%" style={{stopColor:"#000000"}}/>
                        </linearGradient>

                        <linearGradient id="Gradient_6" gradientUnits="userSpaceOnUse" x1="567.4" y1="170.66250000000002" x2="815.8000000000001" y2="27.237499999999997" spreadMethod="pad">
                            <stop  offset="0%" style={{stopColor:"#513717"}}/>

                            <stop  offset="20.784313725490197%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="32.549019607843135%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="50.98039215686274%" style={{stopColor:"#FAFEF4"}}/>

                            <stop  offset="70.19607843137256%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="85.09803921568627%" style={{stopColor:"#9D6B2D"}}/>

                            <stop  offset="100%" style={{stopColor:"#513717"}}/>
                        </linearGradient>
                    </defs>
                    <g>
                        <path fill="url(#Gradient_1)" stroke="none" d="
                            M 0 152.9
                            L 1.05 173 522.65 166.75
                            Q 229.6189453125 -8.0916015625 0 36.05
                            L 0 152.9 Z"/>

                        <path fill="url(#Gradient_2)" stroke="none" d="
                            M 544 166.45
                            Q 544.45 166.15 544.9 165.85 544.55 165.55 544.15 165.3 261.094921875 -31.2154296875 0 18.35
                            L 0 36.05
                            Q 229.6189453125 -8.0916015625 522.65 166.75
                            L 544 166.45 Z"/>

                        <path fill="url(#Gradient_3)" stroke="none" d="
                            M 544.9 160.05
                            L 544.8 159.35
                            Q 275.124609375 -37.1720703125 0 8.65
                            L 0 18.35
                            Q 261.094921875 -31.2154296875 544.15 165.3 544.55 165.55 544.9 165.85 545.35 166.15 545.8 166.45
                            L 545.65 165.3 544.9 160.05 Z"/>

                        <path fill="url(#Gradient_4)" stroke="none" d="
                            M 1088.75 173
                            L 1090 149.1 1090 36.05
                            Q 860.3125 -8.169921875 567.15 166.75
                            L 1088.75 173 Z"/>

                        <path fill="url(#Gradient_5)" stroke="none" d="
                            M 1090 36.05
                            L 1090 18.4
                            Q 828.81015625 -31.28828125 545.65 165.3
                            L 545.8 166.45 567.15 166.75
                            Q 860.3125 -8.169921875 1090 36.05 Z"/>

                        <path fill="url(#Gradient_6)" stroke="none" d="
                            M 1090 18.4
                            L 1090 8.7
                            Q 814.7712890625 -37.2419921875 545 159.35
                            L 544.9 160.05 545.65 165.3
                            Q 828.81015625 -31.28828125 1090 18.4 Z"/>
                    </g>
                </svg>
                );
        }
    });

})(App, React)