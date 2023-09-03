# Taiyo Assignment

### :open_file_folder: Contact App

This is a contact management app to save, edit or delete contacts. I used `tailwind css` for styling, `Redux` for state management and `React.js`, `Typescript` & `React Router v6` to build the entire project.

:page_with_curl: **Home.tsx**: This page is the home page of the complete website it has the navigation options to Contact App or Charts and Maps app.

:page_with_curl: **ContactApp.tsx**: This is the parent component of the Contact App.

:page_with_curl: **ContactForm.tsx**: This is the form component to create new contacts.

:page_with_curl: **ContactDetails.tsx**: This is the component where user can see the details of a contact.

:page_with_curl: **ContactList.tsx**: This component is shown in the contact app page as a list of components.

:page_with_curl: **EditContact.tsx**: This component lets the user edit a saved contact

### :open_file_folder: Charts and Maps App

This app consists of few charts and a leaflet map to show datas extracted from given API. I used `Tanstack Query` to extract API data, `tailwind css` for styling, `ChartJS` & `react-chartjs-2` for the line graphs and `react-leaflet` to show the leaflet map.

:page_with_curl: **GraphApp.tsx**: This component is the parent component of charts and maps route.

:page_with_curl: **LineGraph.tsx**: This component has all the line graphs and its respective API call.

:page_with_curl: **LeafletMap.tsx**: This component has the leaflet map and its respective API call.