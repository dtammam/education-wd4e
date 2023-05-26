function billingFunction() {
    // Check to confirm that the checkbox is checked
    if (document.getElementById('same').checked) {
        // Set two variables for obtaining the current value of the Shipping Information fields
        var shippingNameContents = document.getElementById('shippingName').value
        var shippingZipContents = document.getElementById('shippingZip').value
        // Set the 'value' attribute to the Billing Attribute fields to the ones pulled in our variables
        document.getElementById('billingName').setAttribute('value', shippingNameContents);
        document.getElementById('billingZip').setAttribute('value', shippingZipContents);
    }
    // If not checked...
    else { 
        // "Clear" both Billing Information fields by settings to no characters ('')
        document.getElementById('billingName').setAttribute('value', '');
        document.getElementById('billingZip').setAttribute('value', '');
    }
}