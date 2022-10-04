$(document).ready(function () {

    let productInput = $('#product-input');
    let customerInput = $('#customer-name');
    let phoneInput = $('#phone-number');
    let submitButton = $('#order__button');
    let loader = $('#loader');
    let url = 'https://testologia.site/checkout';

    submitButton.click(function () {

        let hasError = false;

        $('.input-error').css('visibility', 'hidden');
        $('.order__input').css('border', '1px solid rgb(118, 12, 34)');
        loader.css('display', 'flex');

        if (!productInput.val()) {
            productInput.css('border', '1px solid red');
            productInput.next().css('visibility', 'visible');
            hasError = true;
            loader.hide();
        }

        if (!customerInput.val()) {
            customerInput.css('border', '1px solid red');
            customerInput.next().css('visibility', 'visible');
            hasError = true;
            loader.hide();
        }

        if (!phoneInput.val()) {
            phoneInput.css('border', '1px solid red');
            phoneInput.next().css('visibility', 'visible');
            hasError = true;
            loader.hide();
        }

        // отправление данных с задержкой для просмотра лоадера
        setTimeout( function () {
            if (!hasError) {
                $.ajax({
                    url: url,
                    method: 'POST',
                    data: {
                        product: productInput.val(),
                        name: customerInput.val(),
                        phone: phoneInput.val()
                    }
                }).done( function (message) {
                    loader.hide();
                    console.log(message.success);
                    if (!message.success) {
                        alert('Возникла ошибка при оформлении заказа, позвоните нам и сделайте заказ!');
                    } else {
                        $('.order__form').css('visibility', 'hidden');
                        $('.success-message').css({
                            "display": "flex",
                            'visibility': 'visible'
                        });
                    }
                })
            }

        }, 2000);
    })
})