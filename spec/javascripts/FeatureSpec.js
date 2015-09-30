describe("Website", function () {

    var contentNode = document.createElement('div'),
        body;

    beforeEach(function () {

        contentNode.id = 'content';
        body = document.getElementsByTagName('body')[0];

        body.appendChild(contentNode);

        React.render(
            React.createElement(App.Components.Container, null),
            document.getElementById('content')
        );

    });

    afterEach(function() {
        document.getElementsByTagName('body')[0].removeChild(contentNode)
    });

    it("should display page title", function() {
        expect(body.textContent).toContain('Aircastle Solutions');
    })

    it("should list technologies", function () {

        expect(body.textContent).toContain('JavaScript');
        expect(body.textContent).toContain('React');
        expect(body.textContent).toContain('AngularJS');
        expect(body.textContent).toContain('Ember.js');
        expect(body.textContent).toContain('jQuery');
        expect(body.textContent).toContain('Raphaël');
        expect(body.textContent).toContain('CSS');
        expect(body.textContent).toContain('Ruby Sinatra');
        expect(body.textContent).toContain('Heroku');

    });

});