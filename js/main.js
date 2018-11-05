//             JS Library - Jenna Murphy
//---------------------------------------------//
//Function is given a color code, an alternative / lighter color code, a set of nav titles, set of nav links, and a boolean, creates a fully responsive fixed-position navbar in this background color with functioning links. The boolean should be used to indicate whether the navbar theme is to be original color or alternate color.


function makeNav(color, lightColor, navArray, linkArray, bool) {

    //make navBar, give it background color, make it fit to top,
    //make it a container for all else.
    var navBar = document.createElement('div');
    navBar.style.backgroundColor = color;
    navBar.style.height = '80px';
    navBar.className = 'fixed-top container-fluid';
    document.body.appendChild(navBar);

    //create ul element, make it same size as container, append it to the navbar/container.
    var navUl = document.createElement('ul');
    navUl.style = "height: 80px; margin:0; padding:0;";
    navUl.className = "row";
    navBar.appendChild(navUl);

    //create anchor tags, create li objects
    //anchor tags take navArray to display navigation words
    //li tags take linkArray to assign href
    //put li inside the anchor tag
    for (i = 0; i < navArray.length; i++) {
        var newAnchor = document.createElement('a');
        newAnchor.className = "col-3 text-center pt-4";
        var newLi = document.createElement('li');
        newAnchor.setAttribute('href', linkArray[i]);
        newLi.style = "color:white;display:inline-block;";
        newLi.innerText = navArray[i];
        navUl.appendChild(newAnchor);
        newAnchor.appendChild(newLi);
    }

    if (bool == true) {
        //true indicates light
        navBar.style.backgroundColor = lightColor;
    } else {
        //false indicates dark (normal state)
    }

}

//--------------------------------------//

//function that creates tabs and generates HTML

//--------------------------------------//

//function that creates, styles, and appends any HTML element
