(function(App, React){

    App.Components.RightCloud = React.createClass({displayName: "RightCloud",
        render: function(){
            return(
                React.createElement("svg", {className: "cloud right-cloud"}, 
                    React.createElement("defs", null, 
                        React.createElement("linearGradient", {id: "right_cloud_gradient_1", gradientUnits: "userSpaceOnUse", x1: "169.1875", y1: "140.45", x2: "13.612499999999997", y2: "269.05", spreadMethod: "pad"}, 
                            React.createElement("stop", {offset: "0%", style: {stopColor:"#513717"}}), 

                            React.createElement("stop", {offset: "9.411764705882353%", style: {stopColor:"#9D6B2D"}}), 

                            React.createElement("stop", {offset: "32.549019607843135%", style: {stopColor:"#9D6B2D"}}), 

                            React.createElement("stop", {offset: "50.98039215686274%", style: {stopColor:"#FAFEF4"}}), 

                            React.createElement("stop", {offset: "70.19607843137256%", style: {stopColor:"#9D6B2D"}}), 

                            React.createElement("stop", {offset: "85.09803921568627%", style: {stopColor:"#9D6B2D"}}), 

                            React.createElement("stop", {offset: "100%", style: {stopColor:"#513717"}})
                        ), 

                        React.createElement("linearGradient", {id: "right_cloud_gradient_2", gradientUnits: "userSpaceOnUse", x1: "278.275", y1: "30.38749999999999", x2: "156.42499999999998", y2: "152.3125", spreadMethod: "pad"}, 
                            React.createElement("stop", {offset: "0%", style: {stopColor:"#513717"}}), 

                            React.createElement("stop", {offset: "9.411764705882353%", style: {stopColor:"#9D6B2D"}}), 

                            React.createElement("stop", {offset: "32.549019607843135%", style: {stopColor:"#9D6B2D"}}), 

                            React.createElement("stop", {offset: "50.98039215686274%", style: {stopColor:"#FAFEF4"}}), 

                            React.createElement("stop", {offset: "70.19607843137256%", style: {stopColor:"#9D6B2D"}}), 

                            React.createElement("stop", {offset: "85.09803921568627%", style: {stopColor:"#9D6B2D"}}), 

                            React.createElement("stop", {offset: "100%", style: {stopColor:"#513717"}})
                        ), 

                        React.createElement("linearGradient", {id: "right_cloud_gradient_3", gradientUnits: "userSpaceOnUse", x1: "114.13749999999999", y1: "110.575", x2: "274.5625", y2: "270.52500000000003", spreadMethod: "pad"}, 
                            React.createElement("stop", {offset: "0%", style: {stopColor:"#333333"}}), 

                            React.createElement("stop", {offset: "100%", style: {stopColor:"#000000"}})
                        ), 

                        React.createElement("linearGradient", {id: "right_cloud_gradient_4", gradientUnits: "userSpaceOnUse", x1: "116.88749999999999", y1: "113.41250000000001", x2: "271.1125", y2: "267.1875", spreadMethod: "pad"}, 
                            React.createElement("stop", {offset: "0%", style: {stopColor:"#77433A"}}), 

                            React.createElement("stop", {offset: "100%", style: {stopColor:"#231311"}})
                        )
                    ), 
                    React.createElement("g", {id: "Layer0_0_FILL"}, 
                        React.createElement("path", {fill: "url(#right_cloud_gradient_1)", stroke: "none", d: 
                            "M 129.5 123.6" + ' ' +
                            "L 120 116" + ' ' +
                            "Q 71.45 117.7 36.6 152.5 0 189.15 0 240.9 0 292.7 36.6 329.3 44.3 337 52.7 343.1 49.35 340.15 46.1 336.9 9.5 300.3 9.5 248.5 9.5 196.75 46.1 160.1 80.95 125.3 129.5 123.6 Z"}), 

                        React.createElement("path", {fill: "url(#right_cloud_gradient_2)", stroke: "none", d: 
                            "M 165.8 44.2" + ' ' +
                            "Q 202.4 7.6 254.2 7.6 295 7.6 326.4 30.4 291.85 0 244.7 0 192.9 0 156.3 36.6 122.95 70 120 116" + ' ' +
                            "L 129.5 123.6" + ' ' +
                            "Q 132.45 77.6 165.8 44.2 Z"}), 

                        React.createElement("path", {fill: "url(#right_cloud_gradient_3)", stroke: "none", d: 
                            "M 342.55 44.2" + ' ' +
                            "Q 334.8 36.45 326.4 30.4 295 7.6 254.2 7.6 202.4 7.6 165.8 44.2 132.45 77.6 129.5 123.6 80.95 125.3 46.1 160.1 9.5 196.75 9.5 248.5 9.5 300.3 46.1 336.9 49.35 340.15 52.7 343.1 87.35 373.5 134.5 373.5 186.3 373.5 222.85 336.9 256.25 303.55 259.25 257.55 307.75 255.8 342.55 221 379.2 184.4 379.2 132.6 379.2 80.85 342.55 44.2" + ' ' +
                            "M 327.45 57.35" + ' ' +
                            "Q 358.2 88.15 358.2 131.6 358.2 175.1 327.45 205.85 298.75 234.55 259 236.45 256.1 236.6 253.2 236.6 246 236.6 239.1 235.75 239.85 242.2 239.85 249 239.85 252.95 239.6 256.85 237.05 295.25 209.05 323.2 178.35 354 134.85 354 91.4 354 60.6 323.2 29.85 292.45 29.85 249 29.85 205.5 60.6 174.75 89.55 145.85 129.7 144.1 132.25 144 134.85 144 142.1 144 148.95 144.85 148.2 138.4 148.2 131.6 148.2 127.85 148.45 124.2 150.85 85.5 178.95 57.35 209.7 26.6 253.2 26.6 296.7 26.6 327.45 57.35 Z"}), 

                        React.createElement("path", {fill: "url(#right_cloud_gradient_4)", stroke: "none", d: 
                            "M 358.2 131.6" + ' ' +
                            "Q 358.2 88.15 327.45 57.35 296.7 26.6 253.2 26.6 209.7 26.6 178.95 57.35 150.85 85.5 148.45 124.2 148.2 127.85 148.2 131.6 148.2 138.4 148.95 144.85 142.1 144 134.85 144 132.25 144 129.7 144.1 89.55 145.85 60.6 174.75 29.85 205.5 29.85 249 29.85 292.45 60.6 323.2 91.4 354 134.85 354 178.35 354 209.05 323.2 237.05 295.25 239.6 256.85 239.85 252.95 239.85 249 239.85 242.2 239.1 235.75 246 236.6 253.2 236.6 256.1 236.6 259 236.45 298.75 234.55 327.45 205.85 358.2 175.1 358.2 131.6 Z"})
                    )
                )
                );
        }
    });

})(App, React)