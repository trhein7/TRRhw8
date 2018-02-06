
<script>

    var safeColors = ['00', '33', '55', '66', '99', 'aa', 'bb', 'cc', 'dd', 'ff'];
        var rand = function () {
            return Math.floor(Math.random() * 10);
        };
        var randomColor = function () {
            var r = safeColors[rand()];
            var g = safeColors[rand()];
            var b = safeColors[rand()];
            return "#" + r + g + b;
        };
        $(document).ready(function () {
        $('#button').click(function () {
            $('div').each(function () {
                $(this).css('background', randomColor());
            });
        });
    });

        function button() {
            var write_message;
            if (r == g && g == b && b == r) {
        write_message('Congratulations, you won!');
    } else {
        write_message('Sorry, try again!');
    }
        }

    </script>