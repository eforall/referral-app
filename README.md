# Referral Application

This is the front-end source code for the [Lawrence Partnership](http://lawrencepartnership.org/) Referral Application. It is a web app that runs on any modern browser, including mobile.  It allows the members of each of the partners to maintain a shared contact list, create referrals between the partners, and track changes and results.


## Features

* Supports unlimited named partners
* Supports unlimited users, each can be tagged as a member of a partner
 * Users that are not members of a partner are restricted access and see a message how to request access
* An adminitration area allows is available only to users marked as administrators
 * New partners can be added
 * Users can be assigned as a member of a partner (which gives them access to the app)
* Any member can find and create new contacts
 * Contact name, business and various metadata are stored
 * Each contact can have unlimitted referrals viewable on the contact screen
* Any member can create referrals
 * Referrals are from the member's partner to a selected "to" partner
 * Referrals record the creation time and member that created it
 * There are notes fields for the "from" and "to" partner
 * Referrals can be assigned to a member of the "to" partner
 * There are various fields for tracking the outcome of the referral
 * Referral can be closed and re-opened
 * A fly-out menu can be used on the referral screen to quickly see the contact's info
* Open referrals can be seen, filtered by each partner
 * The screen defaults to the partner of the signed-in member
* Fly-out menu on the left for quick access to common tasks
 * Show Open Referrals
 * Find a Contact
 * Create a Contact
 * Administration
* Contact and Referral changes are stored in an audit trail for tracking changes by user
 

## Possible Improvements

* Emails
 * Auto-send email to request access
 * Email all partner members when they get a new referral
* Domain: referrals.lawrencepartnership.org
 * Configure server and DNS to use a more memorable URL instead of the default Firebase one
* Improved database security
* Contacts
 * When creating a new contact, show existing ones that might be the same to avoid duplicates
 * When finding use a search box instead of a simple list
* Referrals
 * Show all open referrals on the "open" screen, grouped by partner, instead of using a dropdown list
 * Disable "from notes" field unless logged in user is a member of the "from" partner
 * Disable all "to" fields unless logged in user is a member of the "to" partner
 * Validate jobs created, jobs perserved, and financing received fields are numeric
* Reporting
 * Overall usage
 * Per partner
* Partner Administration
 * Rename and delete existing partners
 * Show number of referrals (open and closed) per partner
* Member Administration
 * Remove non-member partners
* Logged-in menu
 * Show Profile image of currently logged in user
 * Show partner name and email of currently logged in user
* Update Select and TextArea form fields to use the new Material Design look
 * Requires an updated version of [material2](https://github.com/angular/material2/blob/master/README.md)
