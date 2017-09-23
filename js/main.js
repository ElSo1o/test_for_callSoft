$(document).ready(function () {
    var result = '';
    function bootSwitch() {
        var result = [];
        $(".BSswitch").bootstrapSwitch('state', true);
        $(document).on('switchChange.bootstrapSwitch', '.BSswitch', function (event, state) {
            if ($(".BSswitch").bootstrapSwitch('state')) {
                result = $(this).data('on-text');
               //console.log($('input[name="my-checkbox"]').data('on-text'));
            }else {
                result = $(".BSswitch").data('off-text');
                //console.log($('input[name="my-checkbox"]').data('off-text'));
            }
        });
        return result
    }
    function addChild() {
        $('#Add_parcel').click(function () {
            event.preventDefault();
            $(".dopOption:last-child").clone().addClass("newElement").appendTo("origin");
            var swremove = $(".newElement:last > .container-fluid > .flex_end > .checkboxing > .bootstrap-switch");
            var inputClon = $("#origin_check_input").clone().addClass("newCheck");
            var addInput = $('.newElement:last > .container-fluid > .flex_end > .checkboxing');
           // var test_inp = $('.newElement').last();
            if (swremove){
                $(swremove).remove();
                inputClon.appendTo(addInput);
                $(".BSswitch").bootstrapSwitch();
            }

        })
    }
    function removeChild() {
        $('#Remove_parcel').click(function () {
            event.preventDefault();
            $(".newElement").last().remove();
        })
    }
    function addCollectionInArr() {
            $( "form" ).on( "submit", function( event ) {
                event.preventDefault();
                var form_data = $( this ).serializeArray();
                var _serializeArray = $.fn.serializeArray;
                $.fn.extend({
                    serializeArray: function() {
                        var results = _serializeArray.call(this);
                        this.find('input[name="my-checkbox"]').each(function(id, item) {
                            var $item = $(item);
                            results.unshift({name: $item.attr('name'), value: $item.is(":checked")});
                        });
                        this.find($('.btn-info > span:first').each(function (id,item) {
                            var item = $(item);
                            console.log({text_btn: item.text()});
                            //result.push({name: item.text()})
                        }));
                        console.log(results);
                        return results;
                    }
                });
            });
    }
    function editCounry() {
        $('.dropdown-menu > li > a').click(function () {
            var result_href = $(this).text();
            var result_btn = $('#btn_first > span:first').text();
            $('#btn_first > span:first').text(result_href);
            $(this).text(result_btn);
        })
    }

    bootSwitch();
    addChild();
    removeChild();
    addCollectionInArr();
    editCounry()

});



