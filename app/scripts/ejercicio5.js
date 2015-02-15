$(document).ready(function() {
    $("#miTabla").DataTable({
        "paging": false,
        "order": [[0, "asc"]],
        "columnDefs": [
        {
        	"targets": [2],
        	"visible": false
        },
        {
        	"targets": [3],
        	"visible": false,
        	"searchable": false
        },
        {
        	"targets": [-1],
        	"orderable": false,
        }
        ],
        "stateSave": true
    });
});