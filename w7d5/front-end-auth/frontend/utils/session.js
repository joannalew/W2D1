// creating a user
export const postUser = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

// signing a user in
export const postSession = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

// sign out a user
export const deleteSession = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
