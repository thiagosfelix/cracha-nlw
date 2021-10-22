const linksSocialMedia = {
  github: 'thiagosfelix',
  youtube: 'UCd8i0FKwDxTjC66FbGUoHaA',
  facebook: 'thiagosf.felix',
  instagram: 'teologiawesleyana',
  twitter: 'maykbrito'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');
    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
  }
}

changeSocialMediaLinks();

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`;

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name;
    description.textContent = data.bio;
    userLink.href = data.html_url;
    userImage.src = data.avatar_url;
    userLogin.textContent = data.login;
  })
}

getGithubProfileInfos()