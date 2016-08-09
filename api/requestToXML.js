// :: REQUESTING XML DATA
var array = [], opt = 0;

$(document).ready(function() {    
    $(function() {
        $.ajax({
            type: 'get',
            url: 'server/data.xml',
            dataType: 'xml',
            cache: false,
            success: function(xml) {
                $(xml).find('data').each(function() {
                    array.push({
                        name: $(this).find('name').text(),
                        price: $(this).find('price').text(),
                        package: $(this).find('package').text(),
                        description: $(this).find('description').text()
                    });
                });
            }
        });
    });
});

function requestXML() {
    var xml = '<?xml version="1.0" ?><offer>';
    for ( i=0; i<array.length; ++i ) {
        if (Math.floor((Math.random() * 10) + 1) > 6) 
            xml = xml + '<data><name>' + array[i]['name'] + '</name><price>' + array[i]['price'] + '</price><package>' + array[i]['package'] + '</package><description>' + array[i]['description'] + '</description></data>';
        } xml = xml + '</offer>';
        
    return xml;
}



// :: REQUESTING CUSTOMIZATION
function requestCustomization(name) {
    $(document).ready(function() {
        $.ajax({
            type: 'get',
            url: 'server/data.xml',
            dataType: 'xml',
            cache: false,
            success: function(xml) {
                $(xml).find('data').each(function() {
                    // :: If Name Matches The Offer!
                    if ( name == $(this).find('name').text() ) {
                        // :: Empty the Content of Customization!
                        $('#offerCustomization').html('');
                        
                        // :: If Internet Exists!
                        if ( $(this).find('custom').find('Internet').children().length > 0 ) {
                            $('#offerCustomization').append('<h3>Internet</h3>');
                            
                            // :: If Add-Ons Exists!
                            if ( $(this).find('custom').find('Internet').find('Add-Ons').children().length > 0 ) {
                                $('#offerCustomization').append('<h4>Add-Ons</h4>');
                                
                                // :: Print Each Add-Ons
                                $(this).find('custom').find('Internet').find('Add-Ons').find('category').each(function() {
                                    // :: If Subcategories Exist!
                                    if ( $(this).children().length > 0 ) {
                                        $('#offerCustomization').append('<h5>' + $(this).find('Title').text() + '</h5>');
                                        $('#offerCustomization').append('<form role="form">');
                                        
                                        // :: Traversing Subcategories!
                                        $(this).find('Subcategory').each(function() {
                                            $('#offerCustomization').append('<div class="radio">' + 
                                                                            '<label><input type="radio" name="opt' + opt + '"/>' + $(this).text() +
                                                                            '</label></div>');
                                        });
                                        
                                        ++opt;
                                        $('#offerCustomization').append('</form>');
                                    } else {
                                        $('#offerCustomization').append('<div class="checkbox">' +
                                                                        '<label><input type="checkbox" />' + $(this).text() +
                                                                        '</label></div>');
                                    }
                                });
                            }
                            
                            // :: If Devices Exists
                            if ( $(this).find('custom').find('Internet').find('Devices').children().length > 0 ) {
                                $('#offerCustomization').append('<h4>Devices</h4>');
                                
                                // :: Print Each Add-Ons
                                $(this).find('custom').find('Internet').find('Devices').find('category').each(function() {
                                    // :: If Subcategories Exist!
                                    if ( $(this).children().length > 0 ) {
                                        $('#offerCustomization').append('<h5>' + $(this).find('Title').text() + '</h5>');
                                        $('#offerCustomization').append('<form role="form">');
                                        
                                        // :: Traversing Subcategories!
                                        $(this).find('Subcategory').each(function() {
                                            $('#offerCustomization').append('<div class="radio">' + 
                                                                            '<label><input type="radio" name="opt' + opt + '"/>' + $(this).text() +
                                                                            '</label></div>');
                                        });
                                        
                                        ++opt;
                                        $('#offerCustomization').append('</form>');
                                    } else {
                                        $('#offerCustomization').append('<div class="checkbox">' +
                                                                        '<label><input type="checkbox" />' + $(this).text() +
                                                                        '</label></div>');
                                    }
                                });
                            }
                        }
                        
                        
                        // :: If Xfinity Home Exists!
                        if ( $(this).find('custom').find('XfinityHome').children().length > 0 ) {
                            $('#offerCustomization').append('<h3>Xfinity Home</h3>');
                            
                            // :: If Add-Ons Exists!
                            if ( $(this).find('custom').find('XfinityHome').find('Add-Ons').children().length > 0 ) {
                                $('#offerCustomization').append('<h4>Add-Ons</h4>');
                                
                                // :: Print Each Add-Ons
                                $(this).find('custom').find('XfinityHome').find('Add-Ons').find('category').each(function() {
                                    // :: If Subcategories Exist!
                                    if ( $(this).children().length > 0 ) {
                                        $('#offerCustomization').append('<h5>' + $(this).find('Title').text() + '</h5>');
                                        $('#offerCustomization').append('<form role="form">');
                                        
                                        // :: Traversing Subcategories!
                                        $(this).find('Subcategory').each(function() {
                                            $('#offerCustomization').append('<div class="radio">' + 
                                                                            '<label><input type="radio" name="opt' + opt + '"/>' + $(this).text() +
                                                                            '</label></div>');
                                        });
                                        
                                        ++opt;
                                        $('#offerCustomization').append('</form>');
                                    } else {
                                        $('#offerCustomization').append('<div class="checkbox">' +
                                                                        '<label><input type="checkbox" />' + $(this).text() +
                                                                        '</label></div>');
                                    }
                                });
                            }
                            
                            // :: If Devices Exists
                            if ( $(this).find('custom').find('XfinityHome').find('Devices').children().length > 0 ) {
                                $('#offerCustomization').append('<h4>Devices</h4>');
                                
                                // :: Print Each Add-Ons
                                $(this).find('custom').find('XfinityHome').find('Devices').find('category').each(function() {
                                    // :: If Subcategories Exist!
                                    if ( $(this).children().length > 0 ) {
                                        $('#offerCustomization').append('<h5>' + $(this).find('Title').text() + '</h5>');
                                        $('#offerCustomization').append('<form role="form">');
                                        
                                        // :: Traversing Subcategories!
                                        $(this).find('Subcategory').each(function() {
                                            $('#offerCustomization').append('<div class="radio">' + 
                                                                            '<label><input type="radio" name="opt' + opt + '"/>' + $(this).text() +
                                                                            '</label></div>');
                                        });
                                        
                                        ++opt;
                                        $('#offerCustomization').append('</form>');
                                    } else {
                                        $('#offerCustomization').append('<div class="checkbox">' +
                                                                        '<label><input type="checkbox" checked disabled/>' + $(this).text() +
                                                                        '</label></div>');
                                    }
                                });
                            }
                        }
                        
                        
                        // :: If Phone Exists
                        if ( $(this).find('custom').find('Phone').children().length > 0 ) {
                            $('#offerCustomization').append('<h3>Phone</h3>');
                            
                            // :: If Add-Ons Exists!
                            if ( $(this).find('custom').find('Phone').find('Add-Ons').children().length > 0 ) {
                                $('#offerCustomization').append('<h4>Add-Ons</h4>');
                                
                                // :: Print Each Add-Ons
                                $(this).find('custom').find('Phone').find('Add-Ons').find('category').each(function() {
                                    // :: If Subcategories Exist!
                                    if ( $(this).children().length > 0 ) {
                                        $('#offerCustomization').append('<h5>' + $(this).find('Title').text() + '</h5>');
                                        $('#offerCustomization').append('<form role="form">');
                                        
                                        // :: Traversing Subcategories!
                                        $(this).find('Subcategory').each(function() {
                                            $('#offerCustomization').append('<div class="radio">' + 
                                                                            '<label><input type="radio" name="opt' + opt + '"/>' + $(this).text() +
                                                                            '</label></div>');
                                        });
                                        
                                        ++opt;
                                        $('#offerCustomization').append('</form>');
                                    } else {
                                        $('#offerCustomization').append('<div class="checkbox">' +
                                                                        '<label><input type="checkbox" />' + $(this).text() +
                                                                        '</label></div>');
                                    }
                                });
                            }
                            
                            // :: If Devices Exists
                            if ( $(this).find('custom').find('Phone').find('Devices').children().length > 0 ) {
                                $('#offerCustomization').append('<h4>Devices</h4>');
                                
                                // :: Print Each Add-Ons
                                $(this).find('custom').find('Phone').find('Devices').find('category').each(function() {
                                    // :: If Subcategories Exist!
                                    if ( $(this).children().length > 0 ) {
                                        $('#offerCustomization').append('<h5>' + $(this).find('Title').text() + '</h5>');
                                        $('#offerCustomization').append('<form role="form">');
                                        
                                        // :: Traversing Subcategories!
                                        $(this).find('Subcategory').each(function() {
                                            $('#offerCustomization').append('<div class="radio">' + 
                                                                            '<label><input type="radio" name="opt' + opt + '"/>' + $(this).text() +
                                                                            '</label></div>');
                                        });
                                        
                                        ++opt;
                                        $('#offerCustomization').append('</form>');
                                    } else {
                                        $('#offerCustomization').append('<div class="checkbox">' +
                                                                        '<label><input type="checkbox" />' + $(this).text() +
                                                                        '</label></div>');
                                    }
                                });
                            }
                        }
                        
                        
                        // :: If Video Exists
                        if ( $(this).find('custom').find('Video').children().length > 0 ) {
                            $('#offerCustomization').append('<h3>Xfinity Home</h3>');
                            
                            // :: If Add-Ons Exists!
                            if ( $(this).find('custom').find('Video').find('Add-Ons').children().length > 0 ) {
                                $('#offerCustomization').append('<h4>Add-Ons</h4>');
                                
                                // :: Print Each Add-Ons
                                $(this).find('custom').find('Video').find('Add-Ons').find('category').each(function() {
                                    // :: If Subcategories Exist!
                                    if ( $(this).children().length > 0 ) {
                                        $('#offerCustomization').append('<h5>' + $(this).find('Title').text() + '</h5>');
                                        $('#offerCustomization').append('<form role="form">');
                                        
                                        // :: Traversing Subcategories!
                                        $(this).find('Subcategory').each(function() {
                                            $('#offerCustomization').append('<div class="radio">' + 
                                                                            '<label><input type="radio" name="opt' + opt + '"/>' + $(this).text() +
                                                                            '</label></div>');
                                        });
                                        
                                        ++opt;
                                        $('#offerCustomization').append('</form>');
                                    } else {
                                        $('#offerCustomization').append('<div class="checkbox">' +
                                                                        '<label><input type="checkbox" />' + $(this).text() +
                                                                        '</label></div>');
                                    }
                                });
                            }
                            
                            // :: If Devices Exists
                            if ( $(this).find('custom').find('Video').find('Devices').children().length > 0 ) {
                                $('#offerCustomization').append('<h4>Devices</h4>');
                                
                                // :: Print Each Add-Ons
                                $(this).find('custom').find('Video').find('Devices').find('category').each(function() {
                                    // :: If Subcategories Exist!
                                    if ( $(this).children().length > 0 ) {
                                        $('#offerCustomization').append('<h5>' + $(this).find('Title').text() + '</h5>');
                                        $('#offerCustomization').append('<form role="form">');
                                        
                                        // :: Traversing Subcategories!
                                        $(this).find('Subcategory').each(function() {
                                            $('#offerCustomization').append('<div class="radio">' + 
                                                                            '<label><input type="radio" name="opt' + opt + '"/>' + $(this).text() +
                                                                            '</label></div>');
                                        });
                                        
                                        ++opt;
                                        $('#offerCustomization').append('</form>');
                                    } else {
                                        $('#offerCustomization').append('<div class="checkbox">' +
                                                                        '<label><input type="checkbox" />' + $(this).text() +
                                                                        '</label></div>');
                                    }
                                });
                            }
                        }
                    
                        // :: Pushing Customizations in Cart Content - Checkbox!
                        $('#offerCustomization input:checkbox').change(function() {
                            if( $(this).is(':checked') ) {
                                var str = $(this).closest('label').text();
                                if ( /Charges:/i.test(str) || /Monthly:/i.test(str) ) {
                                    str = str.substring(str.indexOf('$') + 1);
                                    
                                    var ttl = $('#totalCharge').text();
                                    ttl = ttl.replace('Total Charges: $', '');
                                    $('#totalCharge').html('Total Charges: $' + parseFloat(parseFloat(ttl)+parseFloat(str)).toFixed(2));
                                    
                                    var idStr = $(this).closest('label').text();
                                    idStr = idStr.substring(0, idStr.indexOf(' '));
                                    $('#cartContent').append('<div class="customItem" id="' + idStr + '">' +
                                                             '<h5>' + $(this).closest('label').text() + '</h5>' +
                                                             '</div>');
                                } else {
                                    var idStr = $(this).closest('label').text();
                                    if ( idStr.indexOf(' ') >= 0 ) idStr = idStr.substring(0, idStr.indexOf(' '));
                                    $('#cartContent').append('<div class="customItem" id="' + idStr + '">' +
                                                             '<h5>' + $(this).closest('label').text() + '</h5>' +
                                                             '</div>');
                                } 
                            } else {
                                var str = $(this).closest('label').text();
                                if ( /Charges:/i.test(str) || /Monthly:/i.test(str) ) {
                                    str = str.substring(str.indexOf('$') + 1);
                                    
                                    var ttl = $('#totalCharge').text();
                                    ttl = ttl.replace('Total Charges: $', '');
                                    $('#totalCharge').html('Total Charges: $' + parseFloat(parseFloat(ttl)-parseFloat(str)).toFixed(2));
                                    
                                    var idStr = $(this).closest('label').text();
                                    idStr = idStr.substring(0, idStr.indexOf(' '));
                                    $('div#' + idStr).remove();
                                } else { 
                                    var idStr = $(this).closest('label').text();
                                    if ( idStr.indexOf(' ') >= 0 ) idStr = idStr.substring(0, idStr.indexOf(' '));
                                    $('div#' + idStr).remove();
                                }
                            }
                        });
                        
                        // :: Pushing Customizations in Cart Content - Radio !
                        $('#offerCustomization input:radio').change(function() {
                            if( $(this).is(':checked') ) {
                                var name = $(this).attr('name');
                                var str = $(this).closest('label').text();
                                if ( /Charges: /i.test(str) || /Monthly/i.test(str) ) {
                                    str = str.substring(str.indexOf('$') + 1);
                                    
                                    var ttl = $('#totalCharge').text();
                                    ttl = ttl.replace('Total Charges: $', '');
                                    $('#totalCharge').html('Total Charges: $' + parseFloat(parseFloat(ttl)+parseFloat(str)).toFixed(2));
                                    
                                    $('#cartContent #' + name).each(function() {
                                        var e = $(this).text();
                                        if ( /Charges: /i.test(e) || /Monthly/i.test(e) ) {
                                            var tmp = e.substring(e.indexOf('$') + 1);
                                    
                                            var ttl = $('#totalCharge').text();
                                            ttl = ttl.replace('Total Charges: $', '');
                                            $('#totalCharge').html('Total Charges: $' + parseFloat(parseFloat(ttl)-parseFloat(tmp)).toFixed(2));
                                        }
                                        
                                        $(this).remove();
                                    });
                                    
                                    $('#cartContent').append('<div class="customItem" id="' + name + '">' +
                                                             '<h5>' + $(this).closest('label').text() + '</h5>' +
                                                             '</div>');
                                } else {
                                    $('#cartContent #' + name).each(function() {
                                        var e = $(this).text();
                                        if ( /Charges: /i.test(e) || /Monthly/i.test(e) ) {
                                            var tmp = e.substring(e.indexOf('$') + 1);
                                    
                                            var ttl = $('#totalCharge').text();
                                            ttl = ttl.replace('Total Charges: $', '');
                                            $('#totalCharge').html('Total Charges: $' + parseFloat(parseFloat(ttl)-parseFloat(tmp)).toFixed(2));
                                        }
                                        
                                        $(this).remove();
                                    });
                                    
                                    $('#cartContent').append('<div class="customItem" id="' + name + '">' +
                                                             '<h5>' + $(this).closest('label').text() + '</h5>' +
                                                             '</div>');
                                }
                            }
                        });
                    }
                });
            }
        });
    });
}



// :: INSTALLATION API
var installation_array = ['Easy Installation | Onetime Charges: $15.99',
                          'Standard Professional Installation | Onetime Charges: $99.99' ,
                          'Express Professional Installation | Onetime Charges: $149.99',
                          'Custom Installation | Onetime Charges: $179.99'];

function displayInstallation() {
    var tmpArray = [];
    for ( i=0; i<installation_array.length; ++i ) {
        if (Math.floor((Math.random() * 10) + 1) > 4) tmpArray.push(installation_array[i]);
    }
    
    if (tmpArray.length == 0) tmpArray.push(installation_array[1]);
    return tmpArray;
}

function printInstallationOffer(tmp) {
    $('#installation').html('');
    $('#installation').append('<div class="radioOptions">');
    for ( i=0; i<tmp.length; ++i ) {
        $('#installation').append('<div class="radio">' + 
                                      '<label><input type="radio" name="optionRadio">' + tmp[i] + '</label>' +
                                  '</div>');
    }
    $('#installation').append('</div>');
    
    $('input[name=optionRadio]:radio').change(function() {
        if( $(this).is(':checked') ) {
            var str = $(this).closest('label').text();
            str = str.substring(str.indexOf('$') + 1);
                                    
            var ttl = $('#totalCharge').text();
            ttl = ttl.replace('Total Charges: $', '');
            $('#totalCharge').html('Total Charges: $' + parseFloat(parseFloat(ttl)+parseFloat(str)).toFixed(2));
                                    
            $('#cartContent #optionRadio').each(function() {
                var e = $(this).text();
                var tmp = e.substring(e.indexOf('$') + 1);
                                    
                var ttl = $('#totalCharge').text();
                ttl = ttl.replace('Total Charges: $', '');
                $('#totalCharge').html('Total Charges: $' + parseFloat(parseFloat(ttl)-parseFloat(tmp)).toFixed(2));
                
                $(this).remove();
            });
                                    
            $('#cartContent').append('<div class="customItem" id="optionRadio">' +
                                     '<h5>' + $(this).closest('label').text() + '</h5>' +
                                     '</div>');
        }
    });
}

function checkIfChecked() {
    var checked = false;
    $(document).ready(function() {
        $('#installation input:radio').each(function() {
            if ( $(this).is(':checked') ) checked = true;
        });
    });
    
    if ( checked == false ) return false;
    else return true;
}

function validationCleared() {
    var bad = 0;
    $(document).ready(function() {
        $('#yourInformation input').each(function() {
            if ( $.trim($(this).val()) == '' ) ++bad;
        });
    });
    
    if ( bad > 0 ) return false;
    else return true;
}

function creditCardDetailValidate() {
    var bad = 0;
    $(document).ready(function() {
        if ($.trim($('#reviewOrder input#cardNumber').val()) == '') ++bad;
        if ($.trim($('#reviewOrder input#cvv').val()) == '') ++bad;
    });
    
    if ( bad > 0 ) return false;
    else return true;
}