const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    "Accept": "application/json",
    "X-CSRF-Token": csrfToken,

    ...options.headers
  };
  const response = await fetch(url, options)
  if (response.ok) {
    return await response.json();
  } else {
    throw response;
  }


}



export function followUser(id) {
  return customFetch(`/users/${id}/follow`, {method: "POST"});
}


export function unfollowUser(id) {
  return customFetch(`/users/${id}/follow`, {method: "DELETE"})

}



