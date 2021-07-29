# Getting Started with ZappyRent Front-End Assessment Solution by Rich Alossi


***
Introduction
***
This front-end challenge solution was developed using Create-React-App, React v.17 (Hooks), and Styled-Components. The solution is organized in a folder structure suitable for allowing reuse of individual components throughout the application when and where necessary. 

The user is shown a set of 12 properties displayed from the ZappyRent example API data, inclusive of images, description, pricing, and address data, among other datasets. Filtering is intuitive based on a custom dropdown menu and checkbox solution using filters requested by ZappyRent. Clicking on an individual card will show a modal with additional information in a larger format. 

Number of columns on desktop view is responsive based on screen sizing; mobile display includes a single column and more compact header component.


*** 
Installation and Usage

1. Fork this repo

2. Clone this repo: 

   $ git clone https://github.com/alossix/zappyrent-frontend-assessment.git

Use the application by installing dependencies in the project directory and starting the server:

   $ cd zappyrent-frontend-assessment
   
   $ npm install
   
   $ npm start


***
Noteworthy Components

-Custom checkbox

-Custom dropdown menu with inline display of selected property types, e.g., "Entire Property +2"

-On-the-fly request to development example API

-Filter by property type

-Filter by availability

-Availability badge ('Disponibile subito')

-Italian noun/number agreement, i.e., '1 letto'/'2 letti'

-CSS Grid-based display of listings

-Modal close/open on card click

-Responsive sizing on desktop and mobile with CSS Grid, Flexbox, and media queries where necessary


Questions about the development of the assessment may be directed to Rich Alossi, alossix@gmail.com.
