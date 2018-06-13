# EZ Staff - A Full Stack Web Application for effortless Event Staffing

## Purpose - Doesn't an EZ-Staff repo already exist?
The previous 'EZ-Staff' project repo on my GitHub was built PRIOR to me being knowledgable of server-side and database programming. As a result, many different types of API were implemented to substitute this knowledge, such as Google Sheets (as a CRUD database), a third party Emailer API (called EmailerJS), and a third party payment processor (called Payolee).

## Technologies Used in this Repo
-MongoDB
-NodeJS
-ExpressJS
-PassportJS
-Handlebars (for UI)
-Stripe API
-Google Maps API

## Features
-An Administrator and a Staff Member dashboard
-The Administrator can create events, edit, and delete events.
-The Staff member can accept events, cancel, and check into an event using their GeoLocation.
-Using Nodemailer, users are notified via email whenever an event is created, accepted, cancelled, or checked into.