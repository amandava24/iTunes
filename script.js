$(document).ready(function() {
    $('#button').on('click', function () {
        var cArtist = $('#chooseArtist').val();
        var number = $('#number option:selected').text();
        $.ajax({
            url: "https://itunes.apple.com/search?term=" + cArtist + "&limit=" + number,
            type: 'GET',
            crossDomain: true,
            dataType: 'jsonp',
            success: function(result) {
                myFunction(result.results);
            },
            error: function() { alert('Failed!'); }
        });
    });
});
function myFunction(result){
    $('#table').append('<table>');
    console.log(result);
    for(var i = 0; i< result.length; i++){
        $('#table').append('<tr>');
        $('#table').append('<td><img controls="true" src="'+ result[i].artworkUrl60+'" id="img" type="img"></img></td>');
        $('#table').append('<td>' + result[i].trackName + '</td>');
        $('#table').append('<td>' + result[i].artistName + '</td>');
        $('#table').append('<td>' + result[i].collectionName + '</td>');
        $('#table').append('<td><audio controls="true" src="'+ result[i].previewUrl+'" id="audio" type="audio/m4a"></audio></td>');
        console.log(result[i].trackName);
        $('#table').append('</tr>');
    }
    $('#table').append('</table>');

}


































// img = json.results[i].artworkUrl60;
// html += "<tr>";
// html += "<td><img src=" + img + "></td>";
// html += "<td>" + json.results[i].trackName + "</td>";
// html += "<td>" +json.results[i].artistName + "</td>";
// html += "<td>" +json.results[i].collectionName + "</td>";
// html += "<td>" + "<audio controls='true' src=' " + json.results[i].previewUrl;