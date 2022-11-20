async function sendAuthorisationRequestv1(browserToken, code) {
    var authorizationUrl = "https://us-central1-github-tree-graph.cloudfunctions.net/authenticate?browsertoken=" + browserToken + "&code=" + code;
    await fetch(authorizationUrl).then(response => response.text()).then(async responseText => {
        // decode responseText json
        var responseJson = JSON.parse(responseText);
        var status = responseJson.STATUS;
        console.log("Response text is " + responseText);
        if (status == "SUCCESS") {
            changeAuthorizationStatus("SUCCESS", responseJson.TOKEN);
        }
        else {
            changeAuthorizationStatus("FAIL", "");
        }
    });
}

async function sendAuthorisationRequestv2(code) {
    var authorizationUrl = "https://us-central1-github-tree-graph.cloudfunctions.net/authenticatev2?version=2" + "&code=" + code;
    await fetch(authorizationUrl).then(response => response.text()).then(async responseText => {
        var responseJson = JSON.parse(responseText);
        var status = responseJson.STATUS;
        console.log("Response text is " + responseText);
        if (status == "SUCCESS") {
            console.log("Chaing status with token " + responseJson.TOKEN);
            changeAuthorizationStatusv2("SUCCESS", responseJson.TOKEN, responseJson.USER);
        }
        else {
            changeAuthorizationStatusv2("FAIL", "");
        }
    });
}

function waitAndCloseWindow() {
    setTimeout(function () {
        window.close();
    }, 5000);
}

function changeAuthorizationStatus(status, token) {
    if (status == "SUCCESS") {
        console.log("Successfull!! Token is");
        console.log(token);
        var mainFocusIcon = document.getElementById("mainFocusIcon");
        mainFocusIcon.innerHTML = '<h1 class="mymaintitle"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="50" height="50"viewBox="0 0 50 50"style=" fill:#ffffff;"><path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path></svg></h1>';
        var mainTitle = document.getElementById('mymaintitle');
        mainTitle.innerHTML = "Authorization completed!";
        var mainSubtitle = document.getElementById('mymaindescription');
        mainSubtitle.innerHTML = "You can now close this tab and return to the application. (Automatically closing in 5 seconds)";
        var mainButton = document.getElementById('mymainbutton');
        mainButton.innerHTML = "Done";
        mainButton.style = "background-color: rgb(2, 138, 34); border-color: rgb(5, 170, 63);";
        mainButton.removeAttribute("disabled");
        mainButton.setAttribute('onclick', 'window.close();');
        waitAndCloseWindow();
    }
    if (status == "FAIL") {
        var mainFocusIcon = document.getElementById("mainFocusIcon");
        mainFocusIcon.innerHTML = '<h1 class="mymaintitle"><svg height="32" style="overflow:visible;enable-background:new 0 0 32 32" viewBox="0 0 32 32" width="32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g id="Error_1_"><g id="Error"><circle cx="16" cy="16" id="BG" r="16" style="fill:#D72828;"/><path d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z" id="Exclamatory_x5F_Sign" style="fill:#E6E6E6;"/></g></g></g></svg></h1>';
        var mainTitle = document.getElementById('mymaintitle');
        mainTitle.innerHTML = "Authorization failed!";
        var mainSubtitle = document.getElementById('mymaindescription');
        mainSubtitle.innerHTML = "Please try again. Make sure you accept the necessary permissions in GitHub OAuth.";
        var mainButton = document.getElementById('mymainbutton');
        mainButton.innerHTML = "Try again";
        mainButton.removeAttribute("disabled");
        mainButton.setAttribute('onclick', 'window.close();');
    }
}

function changeAuthorizationStatusv2(status, token, userName) {
    if (status == "SUCCESS") {
        console.log("Successfull!! Token is");
        console.log(token);
        var mainFocusIcon = document.getElementById("mainFocusIcon");
        mainFocusIcon.innerHTML = '<h1 class="mymaintitle"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"width="50" height="50"viewBox="0 0 50 50"style=" fill:#ffffff;"><path d="M 25 2 C 12.317 2 2 12.317 2 25 C 2 37.683 12.317 48 25 48 C 37.683 48 48 37.683 48 25 C 48 20.44 46.660281 16.189328 44.363281 12.611328 L 42.994141 14.228516 C 44.889141 17.382516 46 21.06 46 25 C 46 36.579 36.579 46 25 46 C 13.421 46 4 36.579 4 25 C 4 13.421 13.421 4 25 4 C 30.443 4 35.393906 6.0997656 39.128906 9.5097656 L 40.4375 7.9648438 C 36.3525 4.2598437 30.935 2 25 2 z M 43.236328 7.7539062 L 23.914062 30.554688 L 15.78125 22.96875 L 14.417969 24.431641 L 24.083984 33.447266 L 44.763672 9.046875 L 43.236328 7.7539062 z"></path></svg></h1>';
        var mainTitle = document.getElementById('mymaintitle');
        mainTitle.innerHTML = "Authorization completed!";
        var mainSubtitle = document.getElementById('mymaindescription');
        mainSubtitle.innerHTML = "You can now close this tab and return to the application. (Automatically closing in 5 seconds)";
        var mainButton = document.getElementById('mymainbutton');
        mainButton.innerHTML = "Done";
        mainButton.style = "background-color: rgb(2, 138, 34); border-color: rgb(5, 170, 63);";
        mainButton.removeAttribute("disabled")
        authorizationSuccessCallBack(token, userName);
        mainButton.setAttribute('onclick', 'window.close();');
        // waitAndCloseWindow();
    }
    if (status == "FAIL") {
        var mainFocusIcon = document.getElementById("mainFocusIcon");
        mainFocusIcon.innerHTML = '<h1 class="mymaintitle"><svg height="32" style="overflow:visible;enable-background:new 0 0 32 32" viewBox="0 0 32 32" width="32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g id="Error_1_"><g id="Error"><circle cx="16" cy="16" id="BG" r="16" style="fill:#D72828;"/><path d="M14.5,25h3v-3h-3V25z M14.5,6v13h3V6H14.5z" id="Exclamatory_x5F_Sign" style="fill:#E6E6E6;"/></g></g></g></svg></h1>';
        var mainTitle = document.getElementById('mymaintitle');
        mainTitle.innerHTML = "Authorization failed!";
        var mainSubtitle = document.getElementById('mymaindescription');
        mainSubtitle.innerHTML = "Please try again. Make sure you accept the necessary permissions in GitHub OAuth.";
        var mainButton = document.getElementById('mymainbutton');
        mainButton.innerHTML = "Try again";
        mainButton.removeAttribute("disabled")
        authorizationSuccessCallBack("FAIL");
        mainButton.setAttribute('onclick', 'window.close();');
    }
}
window.onload = function () {
    var urlString = window.location.href;
    var url = new URL(urlString);
    var browserToken = url.searchParams.get("browsertoken");
    var code = url.searchParams.get("code");
    // check if version parameter is provided
    var version = url.searchParams.get("version");
    if (version == null) {
        version = 1;
    }
    if(version == 1){
        sendAuthorisationRequestv1(browserToken, code);
    }
    else{
        sendAuthorisationRequestv2(code);
    }
}