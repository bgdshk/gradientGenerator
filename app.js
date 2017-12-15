(function($){
    var angle = '',
    firstColor = '',
    secondColor = '',
    style = '';

    var APP = function() {
        this.getAngle = $('#angle').change(function() {
            var ang = $('#angle')[0].value;
            return angle = ang;
        })
        this.getFirstColor = $('#first-color').change(function() {
            var color = $('#first-color')[0].value;
            return color;
        })
        this.getSecondColor = $('#second-color').on('keyup', function(e) {
            var color = $('#second-color')[0].value;
            console.log(color);
            return color;
        })
        this.writeCode = function(angle, firstColor, secondColor) {
            if(!angle) angle = 0;
            var code = '';
            code += 'background-color: ' + firstColor + ';<br>' + 'background: linear-gradient(' + angle + 'deg, ' + firstColor + ' 0%, ' + secondColor + ' 100%);'
            
            $('.code').html(code);
        }
        this.getRandomColor = function() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
              color += letters[Math.floor(Math.random() * 16)];
            }
            return color;           
        }
        this.getRandomAngle = function() {
            return Math.floor(Math.random() * (360 - 0 + 1)) + 0;            
        }
    };

    var GRApp = new APP();

    // $('#generate-colors').on('click', function(style) {
    //     GRApp.writeCode(angle, firstColor, secondColor);
    //     style = $('.code')[0].textContent.replace(/<br>/gmi, '');
    //     $('.color-box').attr('style', style)
    // });

    $('#generate-colors').on('click', function(e) {
        var firstColor = GRApp.getRandomColor();
        var secondColor = GRApp.getRandomColor();
        var angle = GRApp.getRandomAngle();

        console.log('test', angle, firstColor, secondColor);
        GRApp.writeCode(angle, firstColor, secondColor);
        style = $('.code')[0].textContent.replace(/<br>/gmi, '');
        $('.color-box').attr('style', style)
    });

}(jQuery))

