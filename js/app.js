let width = 32;
let height = 32;
let color;
let isRightClicked = false;
let isLeftClicked = false;

$(function () {

    window.onload = brushTool();


    $('.color').val('#000000');
    color = $('.color').val();

    $('.color').change(function (e) {
        color = $(this).val();
    });

    function makeGrid() {
        $('tr').remove();
        
        for (var r = 0; r < $('#height-input').val(); r++) {
            $('table').append("<tr></tr>");
        }
        for (var c = 0; c < $('#width-input').val(); c++) {
            $('tr').append("<td> </td>");
        }
    }

    $('button').on('click', function (evt) {
        makeGrid();
        brushTool();
    });

    function brushTool () {
        $("td").contextmenu(function (e) {
            e.preventDefault();
        });
    
        $("td").mousedown(function (e) {
            e.preventDefault();
            if (e.button == 0) {
                isLeftClicked = true;
                $(this).css('background-color', color);
                $(this).css('border-color', color)
            } else if (e.button == 2) {
                isRightClicked = true;
                $(this).css('border-color', '#00000022')
                $(this).css('background-color', '#ffffff');
            }
        });
    
        $("td").mouseup(function (e) {
            if (e.button == 0) {
                isLeftClicked = false;
            } else if (e.button == 2) {
                isRightClicked = false;
            }
        });
    
        $('table').mouseleave(function() {
            isRightClicked = false;
            isLeftClicked = false;
        })
    
        $("td").hover(function () {
            if (isLeftClicked) {
                $(this).css('background-color', color);
                $(this).css('border-color', color)
            } else if (isRightClicked) {
                $(this).css('border-color', '#00000022')
                $(this).css('background-color', '#ffffff');
            }
        });
    }

});