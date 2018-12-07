# Blue Bird

### July 31, 2017 App Academy Cohort

![blue-bird](https://media.giphy.com/media/3oKIPmJonGimU9bI2s/giphy.gif)

##### W3D3

+ Added bare bones migration files for Users, Chirps, and Likes
+ Added basic model validations, associations and custom validations for the above tables

##### W4D1

+ Added routes and controllers for Users, Chirps, and Likes

##### W4D2

+ Added views for Users and Chirps (delaying likes until auth)






##### Video Notes
+ create frontend/utils/session.js
  + 3 ajax requests for sign in, sign out, and create new user
+ create frontend/actions/session.js
  + 3 session actions to sign in, sign out, and create new user
+ create frontend/reducers/session.js
  + create sessionReducer for actions in previous step
  + include sessionReducer in rootReducer
+ create components/session/signup_container.js
  + create components/session/signup.jsx
  + create Signup class skeleton (don't forget to import react!)
  + import connect, createNewUser action, and Signup class in container
  + write mapDispatchToProps and connect so Signup can call this.props.createNewUser
+ create Signup class
  + create constructor with initial state
  + write handleInput, handleSubmit functions (don't forget to bind handleSubmit!)
  + render sign up form
+ add signup container to app.jsx
+ edit frontend/components/nav_bar/nav_bar_container.js
  + get current user from state and pass as prop; allow logout() as prop
  + edit nav_bar.js
  + if user logged in, show logout button instead of sign up / log in buttons
+ edit views/layouts/application.html.erb
  + if there's a user logged in, set window.currentUser to current_user
  + is passed to our entry file (bluebird.jsx), on line 9
  + if there's a current user on our window, that's our session's current user
+ create frontend/utils/route_utils.jsx
  + if logged in, redirect from signup with AuthRoute
  + in app.jsx (component), change '/signup' Route to AuthRoute
  + if not logged in, don't show chirps
  + in app.jsx (component), change '/chirps' Route to ProtectedRoute
+ uncomment likes in views/api/chirps/chirp.json.jbuilder
