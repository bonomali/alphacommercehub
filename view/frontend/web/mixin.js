/**
 * 2017-12-12
 * @see Dfe_AlphaCommerceHub/card
 * @see Dfe_AlphaCommerceHub/paypal
 * @see Dfe_AlphaCommerceHub/poli
 */
define(['df-lodash', 'Magento_Checkout/js/model/quote'], function(_, quote) {'use strict'; return {
	/**
	 * 2017-12-12
	 * @override
	 * @see Df_Payment/mixin::dfIsChosen()
	 * @used-by Df_Payment/main.html
	 * @returns {Boolean}
 	 */
	dfIsChosen: function() {return(
		this._super() && this.df.alphacommercehub.suffix === _.get(quote.paymentMethod(), 'additional_data.option')
	);},
	/**
	 * 2017-12-12
	 * @override
	 * @see Df_Payment/mixin::domPrefix():
	 * 		return this.item.method;
	 * @returns {String}
	 */
	domPrefix: function() {return this._super() + '_' + this.df.alphacommercehub.suffix;},
	/**
	 * 2017-12-12
	 * @override
	 * @see Magento/Checkout/js/view/payment/default::isRadioButtonVisible():
	 * 		return paymentService.getAvailablePaymentMethods().length !== 1;
 	 * https://github.com/magento/magento2/blob/2.2.0-RC1.5/app/code/Magento/Checkout/view/frontend/web/js/view/payment/default.js#L183-L185
	 * @used-by Df_Payment/main.html:
	 *	<input
	 *		type="radio"
	 *		name="payment[method]"
	 *		class="radio"
	 *		data-bind="
	 *			attr: {id: getCode()},
	 *			value: getCode(),
	 *			checked: dfChosenMethod,
	 *			click: selectPaymentMethod,
	 *			visible: isRadioButtonVisible()
	 *		"
	 *	/>
	 * https://github.com/mage2pro/core/blob/2.9.8/Payment/view/frontend/web/template/main.html#L14-L25
	 * I override this, because the Moip payment methods provides multiple options (card, boleto, ...),
	 * so we need the radio buttons enabled to switch between the options.
	 * @returns {boolean}
	 */
	isRadioButtonVisible: function() {return true;}
};});
