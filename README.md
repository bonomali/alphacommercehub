This extension integrates a Magento 2 based webstore with the **[AlphaCommerceHub](http://alphacommercehub.com.au)** payment service (Australia).  

## What is AlphaCommerceHub?
>Australia Post and [Alpha Payments Cloud](https://mage2.pro/t/3218) have launched a joint venture to provide local businesses with access to eCommerce services such as payment processing, anti-fraud technology, loyalty programs, identity management, logistics and consolidated reporting through a single platform.
>
> “Businesses will no longer need to invest in multiple platforms, integrations and expensive ongoing investment to stay current,” said Australia Post group chief digital officer Andrew Walduck.  

[computerworld.com.au/article/626082/aus-post-partners-fintech-ecommerce-hub](https://www.computerworld.com.au/article/626082/aus-post-partners-fintech-ecommerce-hub)
[twitter.com/AlphaFintech/status/897827890728972288](https://twitter.com/AlphaFintech/status/897827890728972288)

## [Demo videos](https://www.youtube.com/playlist?list=PLTq8uOpBQGsFXcazPVhagNxV8Wb77ggoT)
1. [Preauthorize, capture, and refund a bank card payment](https://www.youtube.com/watch?v=qdnMdWwAoMc&list=PLTq8uOpBQGsFXcazPVhagNxV8Wb77ggoT)
2. [Capture a PayPal payment](https://www.youtube.com/watch?v=ZkLBtJ3uY8E&list=PLTq8uOpBQGsFXcazPVhagNxV8Wb77ggoT)
3. [Capture a bank card payment with the **3D Secure** validation](https://www.youtube.com/watch?v=4AgBqO-YT_Y&list=PLTq8uOpBQGsFXcazPVhagNxV8Wb77ggoT)

## [Screenshots](https://mage2.pro/tags/alphacommercehub-screenshot)
- [The frontend checkout screen](https://mage2.pro/t/topic/5152).
- [The backend «**Payment Information**» block for a **bank** card payment](https://mage2.pro/t/topic/5076).
- [The backend «**Payment Information**» block for a **PayPal** payment](https://mage2.pro/t/topic/5168).
- [The backend **orders** list](https://mage2.pro/t/topic/5170).
- [The backend **settings**](https://mage2.pro/t/topic/4816). 

##  [The **pay page** configuration articles](https://mage2.pro/tags/alphacommercehub-pay-page-configuration)

## How to install

### 1. Free installation service
Just order my [free installation service](https://mage2.pro/t/3585).

### 2. Self-installation
```
composer require mage2pro/alphacommercehub:*
bin/magento setup:upgrade
rm -rf pub/static/* && bin/magento setup:static-content:deploy en_US <additional locales, e.g.: en_AU>
rm -rf var/di var/generation generated/code && bin/magento setup:di:compile
```
If you have problems with these commands, please check the [detailed instruction](https://mage2.pro/t/263).

## Licensing
The extension is free (the [MIT License](https://en.wikipedia.org/wiki/MIT_License)).

## Support
- [The extension's **forum** branch](https://mage2.pro/c/extensions/alphacommercehub).
- [Where and how to report a Mage2.PRO extension's issue?](https://mage2.pro/t/2034)
- I also provide a **[generic Magento 2 support](https://mage2.pro/t/755)** and [Magento 2 installation service](https://mage2.pro/t/748).

## Want to be notified about the extension's updates?
- [Subscribe](https://mage2.pro/t/2540) to the extension's [forum branch](https://mage2.pro/c/extensions/alphacommercehub).
- Subscribe to my [Twitter](https://twitter.com/mage2_pro) and [YouTube](https://www.youtube.com/channel/UCvlDAZuj01_b92pzRi69LeQ) channels.


