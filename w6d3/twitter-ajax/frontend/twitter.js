const APIUtil = require('./api_util.js');
const FollowToggle = require("./follow_toggle.js");
const UsersSearch = require('./users_search.js');

$(() => {
  $(".follow-toggle").each(function() {
    new FollowToggle(this);
  });
  
  $(".users-search").each(function() {
    new UsersSearch(this, this.firstElementChild, this.lastElementChild);
  });
});