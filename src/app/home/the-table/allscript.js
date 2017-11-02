$(document).ready(function() {

    $('#example tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input style="width:10px !important" type="text" placeholder="Search '+title+'" />' );
    } );


    var table = $('#example').DataTable({

        scrollX:  true,
        fixedColumns:   {
            leftColumns: 4,
        }
    });

    $('#example2 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input type="text" placeholder="Search '+title+'" />' );
    } );


    var table2 = $('#example2').DataTable({

    });


    table2.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );
} );
