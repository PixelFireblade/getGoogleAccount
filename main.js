function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id = profile.getId();
  var name = profile.getName();
  var profileImage = profile.getImageUrl();
  var email = profile.getEmail();
  
 /* 
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  */
  $("h3").text(name);
  $("h4").text(id);
}


function signOut(googleUser) {
  var profile = googleUser.getBasicProfile();
  var id = profile.getId();
  var name = profile.getName();
  var profileImage = profile.getImageUrl();
  var email = profile.getEmail();
  
 /* 
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  */
  location.reload();
  $("h3").text("");
  $("h4").text("");
}
