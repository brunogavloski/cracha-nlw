const LinkSocialMedia = {
    github: 'brunogavloski',
    youtube: 'bruno_gavloskiyt',
    facebook: 'bruno_gavloskifb',
    instagram: 'bruno_gavloski',
    twitter: 'bruno-gavloskitw'
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
    const social = li.getAttribute('class') 
    li.children[0].href = `https://${social}.com/${LinkSocialMedia[social]}`

  //  alert(li.children[0].href)
 } 
}

changeSocialMediaLinks()

function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${LinkSocialMedia.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
        userName.textContent = data.name
        userBio.textContent = data.bio
        userLink.href = data.html_url
        UserImage.src = data.avatar_url
        userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()