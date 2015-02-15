$(document).ready(function() {
    $("#miTabla").DataTable({
        "paging": false,
        "filter": false,
        "order": [[4, "desc"],[3, "asc"]]
    });
});
