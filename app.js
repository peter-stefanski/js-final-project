document.getElementById("btn").addEventListener("click", showGithubUserProfile);

function showGithubUserProfile() {
  console.log("calling");

  let username = document.getElementById("gusername").value;

  let url = "https://api.github.com/users/" + username;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        document.getElementById("res").innerHTML = `
        <h3>Profile Not Found</h3>
        `;
      } else {
        document.getElementById("res").innerHTML = `
        <img src="${data.avatar_url}" style="width:20%; border-radius:20px">
        <p> Name Surname (Login): ${data.name} (${data.login})</p>
        <p> Account description: ${data.bio}</p>
        <p> Following: ${data.following}</p>
        <p> Followers: ${data.followers}</p>
        <p> Public repositories: ${data.public_repos}</p>
        `;
      }
    })
    .catch((e) => {
      console.log(e);
    });
  //....................................................................................

  // let url = "https://api.github.com/users/" + username;
  // fetch(url)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     if (data.message) {
  //       document.getElementById("res").innerHTML = `
  //       <h3>Repository Not Found</h3>
  //       `;
  //     } else {
  //       document.getElementById("res").innerHTML = `
  //       <p>#1${data.repos_url} </p>
  //       <p>#2${data.repos_url} </p>
  //       <p>#3${data.repos_url} </p>
  //       <p>#4${data.repos_url} </p>
  //       <p>#5${data.repos_url} </p>
  //       `;
  //     }
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
}
