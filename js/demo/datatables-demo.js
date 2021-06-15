// Call the dataTables jQuery plugin
$(document).ready(function() {
  $('#dataTable').DataTable();
});
$('#dataTable').dataTable( {
  "oLanguage": {
    "sLengthMenu": "Show _MENU_ entity records",
  }
});
