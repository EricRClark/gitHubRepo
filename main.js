$(document).ready(function () {

var asideUser = '<img src="https://avatars.githubusercontent.com/u/16374383?v=3">';
asideUser += '<br><h1>' + user.name + '</h1>';
asideUser += '<h2>' + user.login + '</h2>';
asideUser += '<br><h5>' + user.company + '</h5>';
asideUser += '<h5>' + user.location + '</h5>';
asideUser += '<h5>' + user.email + '</h5>';
asideUser += '<h5>' + user.created_at + '</h5>';
$('aside').append(asideUser);


var repoStr = "";
ercRepo.forEach(function(element) {

  repoStr +=
          '<ol>'
          + '<h3>' + element.name + '</h3>'
          + '<h5>' + element.description + '</h5>'
          + '<h5>' + moment.utc(element.updated_at).fromNow() + '</h5>'
          + '<span class="octicon octicon-star">' + '</span>'
          + '<span class= "stargazers">'
          + element.stargazers_count
          + '</span>'
          + '<span class="octicon octicon-git-branch">' + '</span>'
          + '<span class= "branches">'
          + element.forks_count
          + '</span>' +
          '</ol>'
        });
$('.innerBoxRep').append(repoStr);
});
