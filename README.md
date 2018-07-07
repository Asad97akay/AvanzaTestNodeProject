Created a Node JS server side application to serve the angular files. I used express generator for scaffolding of the project.
I have also used the nodemon package inorder to watch any changes for the file and restart the server. so please run the application
with "nodemon bin/www"
I have used mongodb nosql database and have used mongoose in order to create a scheme. I have created a userdata model to save the user
data.
I have created two routes inorder to post and get data from the database. The post route returns a response model containing a success message
and the saved item. The get route uses the GUID of the user as a query param to the mongo query to fetch the user data and sorts it in
descending order according to the date and timestamp and return the data in response.
