$(document).ready(function(){

  //sortable list of added photos
  $("#added-photos ul").sortable();

  //dropbox chooser initialization
  document.getElementById("db-chooser").addEventListener("DbxChooserSuccess",
    function(e) {
      $.ajax({
        type: "POST",
        url: "/photos.js",
        data: {photo: {step_id: $("#step_id").val(), source: "dropbox", url:e.files[0].link }}
      });
  }, false);

  //ajax file upload via drage & drop
  uploader = new plupload.Uploader({
  runtimes: "gears,html5,flash,silverlight,browserplus",
  drop_element: 'drop-area',
  browse_button: 'drop-area',
  max_file_size: "10mb",
  url: "/photos.json",
  filters: [
    {
      title: "Image files",
      extensions: "jpg,gif,png,jpeg"
    }
  ],
  multipart_params: {
    '_http_accept': 'application/javascript',
    'authenticity_token': $('meta[name=csrf-token]').attr("content"),
    'photo[step_id]': $('#step_id').val(),
    'photo[source]': 'local',
    '_format': 'json'
    }
  });

  uploader.init();

  uploader.bind("FilesAdded", function(up, files) {
    up.refresh();
    return up.start();
  });

  uploader.bind("UploadProgress", function(up, file) {});

  uploader.bind("Error", function(up, err) {
    return up.refresh();
  });

  uploader.bind("FileUploaded", function(up, file, resp) {
    resp = JSON.parse(resp.response)
    console.log(resp)
    $('#added-photos ul').append('<li> <img width="100px" src="'+resp.url+'" /></li>')
  });
});

