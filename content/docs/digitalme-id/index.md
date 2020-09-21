---
description: ''
sidebar: 'docs'
prev: '/docs/crystaltwin/'
next: '/docs/dmcollab/'
---



# DigitalMe ID

![](./img/identity.png)


In a decentralized world there is not central username and password system to grant you access to applications, development environments, social spaces and in general any online based service.

The ThreeFold environment works with an access systems based on generic [multifactor factor authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) (more specifically 2factor authentication, 2FA) by using a cryptographic key pair to do the first verification (cryptographic signing) and use a user response system (icon in a phone app) to to the second verification:  2FA.

The private key resides in the phone app of the user and onlu on the phone of the users, this (private) key is not stored anywhere on the TF Grid.  The public key is stored on the grid in a so called "phonebook" for anyone and anything else to access and used to verify whether the user has authenticated (signed) the access request.

![](./img/decentralised_2fa_login.png)
