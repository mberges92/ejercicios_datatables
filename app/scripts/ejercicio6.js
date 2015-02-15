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
        "stateSave": true,
        "language": {
            "lengthMenu": "Mostrar _MENU_ registros",
            "zeroRecords": "No se encontraron resultados",
            "info": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "infoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
            "infoFiltered": "(filtrado de un total de _MAX_ registros)",
         }
    });
});