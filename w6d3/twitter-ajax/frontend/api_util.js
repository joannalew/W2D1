const APIUtil = {
  followUser: id => { APIUtil.changeFollowStatus(id, 'POST'); },
  unfollowUser: id => { APIUtil.changeFollowStatus(id, 'DELETE'); },
  
  changeFollowStatus: (id, action) => {
    $.ajax({
      method: action,
      url: `/users/${id}/follow`,
      dataType: 'json',
    });
  },
  
  searchUsers: (query) => {
    return $.ajax({
      method: 'get',
      url: '/users/search',
      data: {query},
      dataType: 'json',
    });
  }
  
  
};

module.exports = APIUtil;