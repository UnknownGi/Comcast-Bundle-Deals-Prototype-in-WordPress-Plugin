$(document).ready(function() {
    var getOffer = 0, purchaseItemName = '', lastLocation = '', installationOption = [], predefinedSearch = [];
    
    // :: Hiding Modal Data
    $(function() {
        $('#offerCustomization').hide();
        $('#installation').hide();
        $('#yourInformation').hide();
        $('#reviewOrder').hide();
    });
    
    // :: Clicking Proceed in Offer Modal
    $('#proceed').click(function() {
        $('#backward').attr('disabled', false);
        
        // :: Check for Before Moving Onto Different Steps
        if ($('#step5').hasClass('actived') && !creditCardDetailValidate()) alert('Please Enter Proper Credit Card Details');
        if ($('#step4').hasClass('actived') && !validationCleared()) alert('Please Enter Your Information Properly');
        if ($('#step3').hasClass('actived') && !checkIfChecked()) alert('Select Installation Option Before Progressing');
        if ($('#step1').hasClass('actived') && object.count == 0 ) alert('Add Offer in Cart Before Continuing');
        
        // :: If Step 1 is Active!
        if ($('#step1').hasClass('actived') && object.count > 0 ) {
            $('#step1').removeClass('actived');
            $('#step2').addClass('actived');
            
            // :: API Call for Customization
            requestCustomization(purchaseItemName);
            
            $('#findOffer').hide();
            $('#offerCustomization').show();
        } 
        // :: If Step 2 is Active
        else if ($('#step2').hasClass('actived')) {
            $('#step2').removeClass('actived');
            $('#step3').addClass('actived');
            
            $('#offerCustomization').hide();
            $('#installation').show();
            
            // :: API Calls!
            if ( getOffer == 0 ) {
                installationOption = displayInstallation();
                getOffer = -1;
            } 
            
            printInstallationOffer(installationOption);
        } 
        // :: If Step 3 is Active
        else if ($('#step3').hasClass('actived') && checkIfChecked()) {
            $('#step3').removeClass('actived');
            $('#step4').addClass('actived');
            
            $('#installation').hide();
            $('#yourInformation').show();
        } 
        // :: If Step 4 is Active
        else if ($('#step4').hasClass('actived') && validationCleared()) {
            $('#step4').removeClass('actived');
            $('#step5').addClass('actived');
            
            $('#firstname').val($('#fname').val());
            $('#lastname').val($('#lname').val());
            
            $('#yourInformation').hide();
            $('#reviewOrder').show();
        }
        // :: if Step 5 is Active
        else if ($('#step5').hasClass('actived') && creditCardDetailValidate()) {
            $('#offerModal').modal('hide');
            
            $('#step5').removeClass('actived');
            $('#step1').addClass('actived');
            
            $('#reviewOrder').hide();
            $('#findOffer').show();
            
            $('#cartContent').html('');
            $('#totalCharge').html('Total Charges: $0.00');
            
            $('#yourInformation input').each(function() {
                $(this).val('');
            });
            
            $('#reviewOrder input').each(function() {
                $(this).val('');
            });
            
            
            getOffer = 0; 
            object.count = 0;
            purchaseItemName = '';
            alert('Purchase Successful');
        }
    });
    
    // :: @function#2
    // :: Clicking Back in Offer Modal
    $('#backward').click(function() {
        // :: If Step 2 is Active
        if ($('#step2').hasClass('actived')) {
            $('#step2').removeClass('actived');
            $('#step1').addClass('actived');
            
            $('#offerCustomization').hide();
            $('#findOffer').show();
            
            $('#backward').attr('disabled', true);
        } 
        // :: If Step 3 is Active
        else if ($('#step3').hasClass('actived')) {
            $('#step3').removeClass('actived');
            $('#step2').addClass('actived');
            
            $('#installation').hide();
            $('#offerCustomization').show();
        } 
        // :: If Step 4 is Active
        else if ($('#step4').hasClass('actived')) {
            // :: Enter Validation!
            
                $('#step4').removeClass('actived');
                $('#step3').addClass('actived');

                $('#yourInformation').hide();
                $('#installation').show();
        } 
        // :: If Step 5 is Active
        else if ($('#step5').hasClass('actived')) {
            $('#step5').removeClass('actived');
            $('#step4').addClass('actived');
            
            $('#reviewOrder').hide();
            $('#yourInformation').show();
        }
    });
    
    // :: If Get Started Clicked!
    $('#getStarted').click(function() {
        if ($('#step1').hasClass('actived')) {
            $('#offerNumber').html('');
            // :: Intelligent Search - Searching for Predefined Addresses!
            var xml, found = false;
            for ( i=0; i<predefinedSearch.length && !found; ++i ) {
                if ( predefinedSearch[i].name == $('#address').val() ) {
                    xml = predefinedSearch[i].result;
                    found = true;
                }    
            }
            
            if ( !found ) {
                // :: API Call
                xml = requestXML();
                xml = $.parseXML(xml);
                predefinedSearch.push({ name: $('#address').val(), result: xml });
            }
            
            
            var j=1;
            $('#findOffer').html('');
            $('#findOffer').append('<div id="offerList">');
            $(xml).find('data').each(function() {
                $('#findOffer').append('<div class="offer">' +
                                       '<button type="button" class="btn btn-primary addToCart" id="offer' + j + '"><span class="glyphicon glyphicon-shopping-cart"></span> Add To Cart</button>' +
                                       '<h2 class="offerName" id="offer' + j + '">' + ($(this)).find('name').text() + '</h2>' +
                                       '<h3 class="offerPrice" id="offer' + j + '">' + ($(this)).find('price').text() + '</h3>' +
                                       '<h4 class="offerPackage" id="offer' + j + '">' + ($(this)).find('package').text() + '</h4>' + 
                                       '<p class="offerDescription" id=offer"' + j + '">' + ($(this)).find('description').text() + '</p>' +
                                       '</div>');
                ++j;
            });
            $('#findOffer').append('</div>');
            
            // :: If Add To Cart Clicked
            $('.addToCart').click(function() {
                if ( !($(this).hasClass('added')) && object.count == 0 ) {
                    var k = $(this).attr('id');
                    k = k.replace('offer', '');
                    $('#cartContent').append('<div class="cartItem" id="cart' + k + '">' +
                                             '<h5 class="cartItemName">' + $('h2#' + $(this).attr('id')).text()  + '</h5>' +
                                             '<h5 class="cartItemPrice">' + $('h3#' + $(this).attr('id')).text() + '</h5>');
                    
                    $(this).addClass('added');
                    ++object.count;
                    
                    purchaseItemName = $('h2#' + $(this).attr('id')).text();
                    var value = $('#totalCharge').text();
                    value = value.replace('Total Charges: $', '');
                    
                    var itemPrice = $('h3#' + $(this).attr('id')).text();
                    itemPrice = itemPrice.replace('$', '');
                    
                    $('#totalCharge').html('Total Charges: $' + (parseFloat(itemPrice)+parseFloat(value)).toFixed(2));
                } else alert('More Than 1 Item Can\'t Be Purchased');
                
                // :: If Remove Item is Clicked
                $('span.cartRemove').unbind('click').click(function() {
                    $('#' + $(this).attr('id')).remove();
                    var idNumber = $(this).attr('id');
                    idNumber = idNumber.replace('cart','');
                    $('button#offer' + idNumber).removeClass('added');
                    
                    purchaseItemName = '';
                    var value = $('#totalCharge').text();
                    value = value.replace('Total Charges: $', '');
                    
                    var itemPrice = $('h3#offer' + idNumber).text();
                    itemPrice = itemPrice.replace('$', '');
                    --object.count;
                    
                    $('#totalCharge').html('Total Charges: $' + (parseFloat(value)-parseFloat(itemPrice)).toFixed(2));
                });
            }); 
        }
    });
    
    
    // :: Clearing Cart
    $('#clearCart').click(function() {
        if ($('#step1').hasClass('actived')) {
            $('#totalCharge').html('Total Charges: $0.00');
            $('#cartContent').html('');
            object.count = 0;

            $('.offer button').each(function() {
                if ($(this).hasClass('added')) $(this).removeClass('added');
            });
        } else alert('You Can Only Clear Cart in Step 1 - Find Offers');
    });
    
    
    // :: First Name & Last Name Validation
    $('#fname, #lname, #firstname, #lastname').blur(function() {
        if ( !(/^[a-z ,.'-]+$/i.test($(this).val())) ) {
            $(this).val('');
            alert('Please Enter A Proper Name');
        }
    });
    
    // :: Phone Number Validation
    $('#phoneNumber').blur(function() {
        if ( !(/^[0-9]/i.test($(this).val())) ) {
            $(this).val('');
            alert('Please Enter A Proper Phone Number');
        }
    });
    
    // :: Email Validation
    $('#email, #mail').blur(function() {
        if ( !(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test($(this).val())) ) {
            $(this).val('');
            alert('Please Enter a Proper E-mail: xyz@email-domain.com/org/uk/etc');
        }
    });
    
    // :: SSN Validation
    $('#SSN').blur(function() {
        if ( !(/^(\d{3}-?\d{2}-?\d{4}|XXX-XX-XXXX)$/i.test($(this).val())) ) {
            $(this).val('');
            alert('Please Enter a Valid SSN Number: XXX-XX-XXXX (Numbers Only)');
        }
    });
    
    
});