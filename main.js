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
   
   $("idDiv").text("<center><b>ID: </b>" + id + "</center>");
   $("nameDiv").text("<center><b>Name: </b>" + name + "</center>");
   $("profileImageDiv").html("<center><b>Image: </b> <img src=" + profileImage + "></img> </center>");
   $("emailDiv").text("<b>Email: </b>" + email);
   
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
  $("idDiv").html("");
   $("nameDiv").html("");
   $("profileImageDiv").html("");
   $("emailDiv").html("");
  location.reload();
}
