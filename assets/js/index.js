var updateLeft = function() {
    var top = $('#right-top').val();
    var bottom = $('#right-bottom').val();

    var separator = '<hr/>';

    $('.update').html(top + separator + bottom);
}

$('#right-top').bind('input propertychange', updateLeft);
$('#right-bottom').bind('input propertychange', updateLeft);

// Run updateLeft on start
updateLeft();
