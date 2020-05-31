"use strict";

document,addEventListener('DOMContentLoaded', function() {
    document.getElementById('tabGroup').className = 'ready';

     var tabHeaders = document.getElementsByClassName('tab-header');
     //select h3s

     for(var i = 0; i < tabHeaders.length; i++) {
        console.log(tabHeaders[i]);
        tabHeaders[i].addEventListener('click', activateTabs);
     }
 //activate tabs
 function activateTabs(e) {
     var myID = this.id, //store the clicked or active header
        contentID = myID.replace('header','content');
        console.log(myID, contentID);

        deActivateTabs();

        document.getElementById(myID).className = 'tab-header active';
        document.getElementById(contentID).className = 'tab-content active';
 };

 function deActivateTabs() {
     document.getElementById('tab-header-1').className = 'tab-header';
     document.getElementById('tab-header-2').className = 'tab-header';
     document.getElementById('tab-header-3').className = 'tab-header';
     document.getElementById('tab-content-1').className = 'tab-content';
     document.getElementById('tab-content-2').className = 'tab-content';
     document.getElementById('tab-content-3').className = 'tab-content';

 };


}); //end DOMContentLoaded

