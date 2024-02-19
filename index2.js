const codeforcesHandle = "nilan12";
const githubUsername = "nilan425";

const codeforcesHandleDiv = document.getElementById("cf-handle");
const codeforcesRatingDiv = document.getElementById("cf-rating");

const githubUsernameDiv = document.getElementById("gh-username");
const githubRepositoriesDiv = document.getElementById("gh-repositories");

async function updateCodeforcesTooltip() {
  codeforcesHandleDiv.innerHTML = `Handle: ${codeforcesHandle}`;
  const res = await fetch(`https://codeforces.com/api/user.info?handles=${codeforcesHandle}`);
  const data = await res.json();
  if (data.status === "OK") {
    const { rating } = data.result[0];
    codeforcesRatingDiv.innerHTML = `Rating: ${rating}`;
  }
}

async function updateGithubTooltip() {
  githubUsernameDiv.innerHTML = `Username: ${githubUsername}`;
  const res = await fetch(`https://api.github.com/users/${githubUsername}`);
  const data = await res.json();
  const { public_repos } = data;
  githubRepositoriesDiv.innerHTML = `Repositories: ${public_repos}`;
}

updateCodeforcesTooltip();
updateGithubTooltip();
