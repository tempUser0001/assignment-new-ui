##React Assignment for Knowledge E

###Task requirements
Build an application that allows a user to create a list of favourite albums.
- Implement a small front end application that uses the iTunes API.
- The application should allow a user to search for artists and get a list of
the albums associated with that artist.
- The user should be able to see the artwork for each album, as well as
basic information about it.
- They should be able to add an album to a list of favourites.
- For albums that are already on the list, the user should be able to re-
move the album from that list.
- The user should be able to filter the list of favourites by artist. For exam-
ple, if the favourites list contains two albums by Michael Jackson, and three albums by Janet Jackson, the user should be able to show only the albums by Michael Jackson.
- The application should be usable regardless of screen size.
The iTunes Search API can be found at:
https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/
###Considerations
- Use React and pure (framework-less) CSS.
- No need to take older browsers into consideration.
- The application should be responsive.
- Take usability into consideration, as well as making the app, in your
opinion, visually compelling.
- Your code should be clean and documented.
- Include a README.md file that describes your application and how to
run it.
- Document your design and implementation decisions in the
README.md.
###Submission
After completion of the assignment, please send us a link to the repository on Github.
If you have any questions during the assignment then please feel free to con- tact us via email.

##Description
This react app is an implementation of the React Assignment for Knowledge E, detailed above.

To run this app,
- download the app
- in the app directory run ```yarn``` to install the required modules.
- then type ```yarn start``` to run the app.

The app makes use of ```react-redux``` to handle the state of the users favourites, and ```axis``` to handle the api request to the iTunes search api.

The app does not implement ```react-router``` because persisting state is not a requirement. So it uses ```className``` to toggle ```css``` that switches between search and favourites views.

I hope it meets with your expectations.