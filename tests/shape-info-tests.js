var ShapeInfoTests = function() {

function register(mocha, expect) {
    mocha.setup('bdd');

    var offsetTests = {
        styles: {
                margin: '0',
                border: 'none',
                padding: '0',
                width: '100px',
                height: '100px',
                cssFloat: 'left'
        },
        tests: [
        {
            name: 'for inset',
            shapeOutside: 'inset(21px 20px)',
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 80, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 80, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 80, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 0, cssFloat: 'left' }
            ]
        },
        {
            name: 'for inset on the content-box',
            shapeOutside: 'inset(1px 0px) content-box',
            styles: {
                margin: '20px',
                width: '80px',
                height: '80px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 100, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 100, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 100, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 100, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 0, cssFloat: 'left' }
            ]
        },
        {
            name: 'for margin-box',
            shapeOutside: 'margin-box',
            styles: {
                margin: '50px',
                width: '80px',
                height: '80px',
            },
            step: 90,
            output: [
                { top: 0, bottom: 90, offset: 180, cssFloat: 'left' },
                { top: 90, bottom: 180, offset: 180, cssFloat: 'left' }
            ]
        },
        {
            name: 'for margin-box (+ padding)',
            shapeOutside: 'margin-box',
            styles: {
                padding: '11px 22px 33px 44px',
                margin: '50px',
                width: '80px',
                height: '80px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 246, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 246, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 246, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 246, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 246, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 246, cssFloat: 'left' },
                { top: 120, bottom: 140, offset: 246, cssFloat: 'left' },
                { top: 140, bottom: 160, offset: 246, cssFloat: 'left' },
                { top: 160, bottom: 180, offset: 246, cssFloat: 'left' },
                { top: 180, bottom: 200, offset: 246, cssFloat: 'left' },
                { top: 200, bottom: 220, offset: 246, cssFloat: 'left' },
                { top: 220, bottom: 224, offset: 246, cssFloat: 'left' }
            ]
        },
        {
            name: 'for border-box',
            shapeOutside: 'border-box',
            styles: {
                border: '30px',
                borderColor: 'black',
                borderStyle: 'solid',
                width: '80px',
                height: '80px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 140, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 140, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 140, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 140, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 140, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 140, cssFloat: 'left' },
                { top: 120, bottom: 140, offset: 140, cssFloat: 'left' }
            ]
        },
        {
            name: 'for border-box (+ padding)',
            shapeOutside: 'border-box',
            styles: {
                padding: '10px 20px 30px 40px',
                border: '30px',
                borderColor: 'black',
                borderStyle: 'solid',
                width: '80px',
                height: '80px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 200, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 200, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 200, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 200, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 200, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 200, cssFloat: 'left' },
                { top: 120, bottom: 140, offset: 200, cssFloat: 'left' },
                { top: 140, bottom: 160, offset: 200, cssFloat: 'left' },
                { top: 160, bottom: 180, offset: 200, cssFloat: 'left' }
            ]
        },
        {
            name: 'for border-box (+ margin)',
            shapeOutside: 'border-box',
            styles: {
                margin: '11px 22px 33px 44px',
                border: '30px',
                borderColor: 'black',
                borderStyle: 'solid',
                width: '80px',
                height: '80px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 184, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 184, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 184, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 184, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 184, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 184, cssFloat: 'left' },
                { top: 120, bottom: 140, offset: 184, cssFloat: 'left' },
                { top: 140, bottom: 160, offset: 184, cssFloat: 'left' },
                { top: 160, bottom: 180, offset: 0, cssFloat: 'left' }
            ]
        },
        {
            name: 'for padding-box',
            shapeOutside: 'padding-box',
            styles: {
                padding: '20px',
                width: '80px',
                height: '80px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 120, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 120, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 120, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 120, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 120, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 120, cssFloat: 'left' }
            ]
        },
        {
            name: 'for padding-box (20px border, padding)',
            shapeOutside: 'padding-box',
            styles: {
                padding: '19px 20px',
                borderWidth: '21px 20px',
                borderStyle: 'solid',
                width: '20px',
                height: '20px',
                'shape-outside': 'padding-box'
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 80, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 80, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 80, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 0, cssFloat: 'left' },
            ]
        },
        {
            name: 'for padding-box (21px margin)',
            shapeOutside: 'padding-box',
            styles: {
                padding: '20px',
                margin: '21px',
                width: '80px',
                height: '80px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 141, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 141, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 141, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 141, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 141, cssFloat: 'left' }
            ]
        },
        {
            name: 'for padding-box (21px border)',
            shapeOutside: 'padding-box',
            styles: {
                padding: '20px',
                border: '21px',
                borderStyle: 'solid',
                borderColor: 'yellow',
                width: '80px',
                height: '80px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 141, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 141, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 141, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 141, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 141, cssFloat: 'left' }
            ]
        },
        {
            name: 'for content-box',
            shapeOutside: 'content-box',
            styles: {
                width: '80px',
                height: '80px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 80, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 80, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 80, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 80, cssFloat: 'left' },
            ]
        },
        {
            name: 'for content-box (21px padding)',
            shapeOutside: 'content-box',
            // If the line and shape both overlap at 20px, even coincidentally,
            // they will avoid each other, so tweak them slightly
            styles: {
                padding: '21px 20px',
                width: '80px',
                height: '78px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 100, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 100, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 100, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 100, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 0, cssFloat: 'left' },
            ]
        },
        {
            name: 'for content-box (21px margin)',
            shapeOutside: 'content-box',
            // If the line and shape both overlap at 20px, even coincidentally,
            // they will avoid each other, so tweak them slightly
            styles: {
                margin: '21px',
                width: '79px',
                height: '79px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 100, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 100, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 100, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 100, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 0, cssFloat: 'left' },
            ]
        },
        {
            name: 'for content-box (21px border)',
            shapeOutside: 'content-box',
            // If the line and shape both overlap at 20px, even coincidentally,
            // they will avoid each other, so tweak them slightly
            styles: {
                border: '21px',
                borderStyle: 'solid',
                borderColor: 'black',
                width: '79px',
                height: '79px',
            },
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 100, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 100, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 100, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 100, cssFloat: 'left' },
                { top: 100, bottom: 120, offset: 0, cssFloat: 'left' },
            ]
        },
        {
            name: 'for inset with shape-margin applied',
            shapeOutside: 'inset(31px 30px)',
            shapeMargin: '10px',
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 80, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 80, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 80, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 0, cssFloat: 'left' }
            ]
        },
        {
            name: 'for circle',
            shapeOutside: 'circle(24px)',
            step: 25,
            output: [
                { top: 0, bottom: 25, offset: 0, cssFloat: 'left' },
                { top: 25, bottom: 50, offset: 74, cssFloat: 'left' },
                { top: 50, bottom: 75, offset: 74, cssFloat: 'left' },
                { top: 75, bottom: 100, offset: 0, cssFloat: 'left' }
            ]
        },
        {
            name: 'for ellipse',
            shapeOutside: 'ellipse(24px 24px)',
            step: 25,
            output: [
                { top: 0, bottom: 25, offset: 0, cssFloat: 'left' },
                { top: 25, bottom: 50, offset: 74, cssFloat: 'left' },
                { top: 50, bottom: 75, offset: 74, cssFloat: 'left' },
                { top: 75, bottom: 100, offset: 0, cssFloat: 'left' }
            ]
        },
        {
            name: 'for polygon',
            shapeOutside: 'polygon(20px 21px, 80px 21px, 80px 79px, 20px 79px)',
            step: 20,
            output: [
                { top: 0, bottom: 20, offset: 0, cssFloat: 'left' },
                { top: 20, bottom: 40, offset: 80, cssFloat: 'left' },
                { top: 40, bottom: 60, offset: 80, cssFloat: 'left' },
                { top: 60, bottom: 80, offset: 80, cssFloat: 'left' },
                { top: 80, bottom: 100, offset: 0, cssFloat: 'left' }
            ]
        }
        ],
        runTest: function(test) {
            var fn = test.only ? it.only : it;
            fn(test.name, function() {
                var el = document.createElement('div');
                for (var prop in offsetTests.styles)
                    el.style[prop] = offsetTests.styles[prop];
                for (prop in test.styles)
                    el.style[prop] = test.styles[prop];
                el.setAttribute('data-shape-outside', test.shapeOutside);
                if (test.shapeMargin)
                    el.setAttribute('data-shape-margin', test.shapeMargin);

                document.body.appendChild(el);
                var shapeInfo = new ShapeInfo(el);
                document.body.removeChild(el);

                var offsets;
                shapeInfo.onReady(function() {
                    // count on this executing immediately except for images
                    offsets = shapeInfo.offsets({mode: "step", step: test.step});
                });

                test.output.forEach(function(output, i) {
                    for (var prop in output)
                        expect(offsets[i][prop]).to.equal(output[prop]);
                });
            })
        }
    }

    function generateTests(testSet) {
        testSet.tests.forEach(function(test) {
            testSet.runTest(test);
        });
    }

    describe('ShapeInfo.offsets', function() {
        generateTests(offsetTests);
    })
}

return {
    'register': register
}
}()
