(function (React, App, Raphael) {

    App.Components.Sky = React.createClass({displayName: "Sky",

        render: function(){

            return (
                React.createElement("div", {className: "sky"}, 
                    React.createElement(App.Components.CloudContainer, null), 
                    React.createElement(App.Components.RedHills, null), 
                    React.createElement(App.Components.Tower, null), 
                    React.createElement(App.Components.BlueHillLeft, null), 
                    React.createElement(App.Components.BlueHillRight, null)
                )
            );
        },

        componentDidMount: function(){

//            var skyNode = document.getElementsByClassName('sky')[0];
//
//            var paper = Raphael(skyNode, 380, 374);
//
//            var firstGoldShape = paper.path("M 129.5 123.6 L 120 116 Q 71.45 117.7 36.6 152.5 0 189.15 0 240.9 0 292.7 36.6 329.3 44.3 337 52.7 343.1 49.35 340.15 46.1 336.9 9.5 300.3 9.5 248.5 9.5 196.75 46.1 160.1 80.95 125.3 129.5 123.6 Z");
//            var secondGoldShape = paper.path("M 165.8 44.2 Q 202.4 7.6 254.2 7.6 295 7.6 326.4 30.4 291.85 0 244.7 0 192.9 0 156.3 36.6 122.95 70 120 116 L 129.5 123.6 Q 132.45 77.6 165.8 44.2 Z")
//            var blackShape = paper.path("M 342.55 44.2 Q 334.8 36.45 326.4 30.4 295 7.6 254.2 7.6 202.4 7.6 165.8 44.2 132.45 77.6 129.5 123.6 80.95 125.3 46.1 160.1 9.5 196.75 9.5 248.5 9.5 300.3 46.1 336.9 49.35 340.15 52.7 343.1 87.35 373.5 134.5 373.5 186.3 373.5 222.85 336.9 256.25 303.55 259.25 257.55 307.75 255.8 342.55 221 379.2 184.4 379.2 132.6 379.2 80.85 342.55 44.2 M 327.45 57.35 Q 358.2 88.15 358.2 131.6 358.2 175.1 327.45 205.85 298.75 234.55 259 236.45 256.1 236.6 253.2 236.6 246 236.6 239.1 235.75 239.85 242.2 239.85 249 239.85 252.95 239.6 256.85 237.05 295.25 209.05 323.2 178.35 354 134.85 354 91.4 354 60.6 323.2 29.85 292.45 29.85 249 29.85 205.5 60.6 174.75 89.55 145.85 129.7 144.1 132.25 144 134.85 144 142.1 144 148.95 144.85 148.2 138.4 148.2 131.6 148.2 127.85 148.45 124.2 150.85 85.5 178.95 57.35 209.7 26.6 253.2 26.6 296.7 26.6 327.45 57.35 Z");
//            var redShape = paper.path("M 358.2 131.6 Q 358.2 88.15 327.45 57.35 296.7 26.6 253.2 26.6 209.7 26.6 178.95 57.35 150.85 85.5 148.45 124.2 148.2 127.85 148.2 131.6 148.2 138.4 148.95 144.85 142.1 144 134.85 144 132.25 144 129.7 144.1 89.55 145.85 60.6 174.75 29.85 205.5 29.85 249 29.85 292.45 60.6 323.2 91.4 354 134.85 354 178.35 354 209.05 323.2 237.05 295.25 239.6 256.85 239.85 252.95 239.85 249 239.85 242.2 239.1 235.75 246 236.6 253.2 236.6 256.1 236.6 259 236.45 298.75 234.55 327.45 205.85 358.2 175.1 358.2 131.6 Z");
//
//            firstGoldShape.attr("stroke", "transparent");
//            secondGoldShape.attr("stroke", "transparent");
//            blackShape.attr("stroke", "transparent");
//            redShape.attr("stroke", "transparent");
//
//            var goldGradient = "45-#9D6B2D-#9D6B2D:9.4-#FAFEF4:32.5-#9D6B2D:51-#9D6B2D:70-#513717:85";
//
//            firstGoldShape.attr('fill', goldGradient);
//            secondGoldShape.attr('fill', goldGradient);
//
//            var blackGradient = "315-#333-#000";
//
//            blackShape.attr("fill", blackGradient);
//
//            var redGradient = "315-#77433A-#231311";
//
//            redShape.attr("fill", redGradient);


        }
    });

})(React, App, Raphael);