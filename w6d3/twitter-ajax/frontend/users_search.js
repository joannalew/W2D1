const APIUtil = require('./api_util.js');
const FollowToggle = require('./follow_toggle.js');

class UsersSearch {  
  constructor($el, input, list) {
    this.el = $el;
    this.input = input;
    this.list = list;
    this.handleInput();
  }
  
  handleInput() {
    let $box = $(this.input);
    $box.on('input', () => {
      let val = $box.val();
      APIUtil.searchUsers(val).then( response => this.renderResults(response) );
    });
  }
  
  renderResults(arr) {
    let $res = $(this.list);
    $res.empty();
    
    for (let i = 0; i < arr.length; i++){
      const user = arr[i];
      
      let $a = $('<a></a>');
      $a.text(`@${user.username}`);
      $a.attr('href', `/users/${user.id}`);
      
      let $followToggle = $('<button></button>');
      let resState = 'unfollowed';
      if (user.followed) { resState = 'followed'; }
      
      $followToggle.attr('data-user-id', user.id);
      $followToggle.attr('data-initial-follow-state', resState);
      new FollowToggle($followToggle[0]);
      
      const $li = $('<li></li>');
      $li.append($a);
      $li.append($followToggle);
      
      $res.append($li);
    }
  }
  
}

module.exports = UsersSearch;