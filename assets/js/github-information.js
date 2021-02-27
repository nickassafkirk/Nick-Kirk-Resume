
function fetchGitHubInformation(event) {

    var username = $("#gh-username").val();
    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

        $.when(
            $.getJSON(`https://api.github.com/users/${username}`)
        ).then(
            function(response) {
                let userData = response;
                4("#gh-user-data").html(userInformationHTML(userData));
            }, function(errorResponse){
                if (errorResponse.status === 404) {
                    $("#gh-user-data").html(`<h2>No info found for ${username}</h2>`);
                } else {
                    console.log(errorResponse);
                    $("#gh-user-data").html(
                        `<h2> Error:${errorResponse.responseJSON.message}</h2>`
                    )
                }

            }
        )
}

 