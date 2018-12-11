const APIUtil = require('./api_util.js');

class FollowToggle {
  constructor($el){
    debugger;
    this.userId = $el.dataset.userId;
    this.followState = $el.dataset.initialFollowState;
    this.el = $el;
    this.render();
    this.handleClick();
  }
  
  render(){
    let $btn = $(this.el);  
    if (this.followState === 'unfollowed') { $btn.html('Follow!'); }
    if (this.followState === 'followed') { $btn.html('Unfollow!'); }
  }
  
  handleClick() {
    let $btn = $(this.el);
        
    $btn.on('click', () => { 
      if (this.followState === 'unfollowed'){
        this.followState = 'followed';
        APIUtil.followUser(this.userId);
      }
      else {
        this.followState = 'unfollowed';
        APIUtil.unfollowUser(this.userId);
      }
      
      this.render();
    });
  }
}

module.exports = FollowToggle;