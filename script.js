// Personal access token
const token = "";

const oauth = { Authorization: "bearer " + token };

// GraphQL query
const query = ` 
query {
  user(login: "kokoforbes") {
    name
    avatarUrl
    login
    bioHTML
    repositories(first: 20) {
      totalCount
      edges {
        node {
          name
          updatedAt
          forkCount
          descriptionHTML
          primaryLanguage {
            name
            color
          }
          stargazers {
            totalCount
          }
          watchers {
            totalCount
          }
          issues(states: [OPEN]) {
            totalCount
          }
        }
      }
    }
}
}`;

(function queryFetch() {
  return fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: oauth,
    body: JSON.stringify({
      query: query,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
     console.log(data)
    })
    .catch((error) => console.log(error));
})();