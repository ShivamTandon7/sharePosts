$(document).ready(()=>{
    
    if(selectedTab == "followers"){
        loadFollowing();
    }
    else{
        loadFollowers();
    }


})

function loadFollowing() {
    $.get(`/api/users/${profileUserId}/followers`, results => {
        outputUsers(results.followers, $(".resultsContainer"));
    })
}

function loadFollowers() {
    $.get(`/api/users/${profileUserId}/following`, results => {
        outputUsers(results.following, $(".resultsContainer"));
    })
}

function outputUsers(results, container) {
    container.html("");
    results.forEach((result)=>{
        var html = createUserHtml(result, true);
        container.append(html);
    })

    if(results.length == 0){
        container.append("<span class='noResults'>No results found</span>");
    }
}

function createUserHtml(userData, showFollowButton) {

    var name = userData.firstName + " " + userData.lastName;   
    return `<div class="user">
                <div class='userImageContainer'>
                    <img src='${userData.profilePic}'>
                </div>
                <div class='userDetailsContainer'>
                    <div class='header'>
                        <a href='/profile/${userData.userName}'>${name}</a>
                        <span class='username'>@${userData.userName}</span>
                    </div>
                </div>
            </div>`
}

