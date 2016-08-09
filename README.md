## Description
This plugin tries to replicate the functionality of https://www.xfinitybundledeals.com/. The web displays different offers & customization options based on the address that was entered by user.


## What did we Achieve
We created a prototype that has the exact work flow as comcast bundle deals. It displays offer randomly and then assigns it to the address that user entered. If the user re-enters the same address in near future, it will shows those deals again.


## Technology Used

- IDE: **Brackets**
- Languages: **PHP**, **HTML**, **CSS**, **JavaScript**, **jQuery**, **AJAX**, **JSON**
- Offer Data: **XML** 
- API Language: **JavaScript**
- Local Hosting and Database: **XAMPP**


## What is Needed To Run This Plugin? 

**Credential Google JavaScript API Key** is required before running this plugin.

Key can be obtained from: https://console.developers.google.com

It must be added @line-79 of **_bundle-deal-plugin.php_**
```javascript
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=places&signed_in=true&key='INSERT_KEY_HERE'"></script>
```


## How To Activate Plugin

- **Download** the Plugin
- **Extract** to any Folder
- **Create** a Folder called *bundle-deal-plugin* at **./XAMPP/htdocs/WordPress-Website/wp-content/plugins/**
- **Copy** *bundle-deal-plugin folder content* to **./XAMPP/htdocs/WordPress-Website/wp-content/plugins/bundle-deal-plugin**
- **Create** a Folder called *api* at **./XAMPP/htdocs/WordPress-Website/**
- **Copy** *api folder content to* to **./XAMPP/htdocs/WordPress-Website/api/**
- **Create** a Folder called *server* at **./XAMPP/htdocs/WordPress-Website/**
- **Copy** *server folder content to* **./XAMPP/htdocs/WordPress-Website/server/**
- **Open** any Browser
- **Open** the Website **http://localhost/WordPress-Website/wp-admin**
- **Enter** Administrator Credentials and Login
- Go to **Plugins** Tab
- **Activate** the **Bundle Deal Plugin** Plugin


## Displaying The Widget on WordPress Website

- Go To **Appearances**
- Click **Widgets**
- Click **Bundle Deals Widget**
- Set **Title**
- Click **Save**
- Go to your **WordPress Website**


## Video Demonstration

Jing Video Link: http://screencast.com/t/CR3KWIbQzDHD


## Screenshots

- How The Plugin Looks Like
![Index](http://i.imgur.com/VaBBpVB.png)

- How The Plugin Displays Offer
![Offer](http://i.imgur.com/VRTuV8h.png)

- Form Validation
![Validation](http://i.imgur.com/dsGcxqf.png)


## References

For More Reading Regarding Google Maps and its API go to: https://developers.google.com/maps/documentation/javascript/

Using Google API to display Google Maps Through Theme instead of Plugin: https://tommcfarlin.com/google-maps-api-and-wordpress/


## Contact

For Queries and Question you can PM me on:
- Facebook: http://facebook.com/fuNkyBRO1
- Email: k132089@nu.edu.pk
