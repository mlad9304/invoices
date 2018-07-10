$(document).ready(function() {
    $('.datepicker').datepicker({
        uiLibrary: 'bootstrap4',
        format: 'yyyy-mm-dd'
    });

    $('#addrow').click(function(){
		$('.item-row:last').after('<tr class="item-row"><td><input class="form-control item_name" placeholder="Item name" /></td><td><input class="form-control item_desc" placeholder="Item description" /></td><td><input class="form-control cost" value="0.00" /></td><td><input class="form-control qty" value="0" /></td><td class="price_td"><span class="price">0.00</span><span class="subtotal_currency"></span></td><td class="delete_td"><a class="delete" href="javascript:;" title="Remove row"><span class="ti-close"></span></a></td></tr>');
		if ($('.delete').length > 0) $('.delete').show();
		
    });
    
    $('body').on('click', '.delete', function(){
		$(this).parents('.item-row').remove();
		if ($('.delete').length < 2) $('.delete').hide();
	});
})