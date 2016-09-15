<script>
//Replace YOUR TITLE and YOUR LINK with your Post title and post link
var articles = [
["YOUR TITLE","YOUR LINK"], 
["YOUR TITLE","YOUR LINK"],
["YOUR TITLE","YOUR LINK"],
["YOUR TITLE","YOUR LINK"],
["YOUR TITLE","YOUR LINK"],
["YOUR TITLE","YOUR LINK"],
["YOUR TITLE","YOUR LINK"],
["YOUR TITLE","YOUR LINK"],
["YOUR TITLE","YOUR LINK"],
["YOUR TITLE","YOUR LINK"],
];


setTimeout(function(){ 
var x = Math.floor((Math.random() * 10) + 1);
var title=articles[x][0];
var desc='Most popular article.';
var url=articles[x][1];
notifyBrowser(title,desc,url);
}, 150000);  //calls every 5 minutes 



document.addEventListener('DOMContentLoaded', function () 
{
    
if (Notification.permission !== "granted")
{
Notification.requestPermission();
}

document.querySelector("#notificationButton").addEventListener("click", function(e)
{
var x = Math.floor((Math.random() * 10) + 1);
var title=articles[x][0];
var desc='Most popular article.';
var url=articles[x][1];
notifyBrowser(title,desc,url);
e.preventDefault();
});

});

function notifyBrowser(title,desc,url) 
{
if (!Notification) {
console.log('Desktop notifications not available in your browser..'); 
return;
}
if (Notification.permission !== "granted")
{
Notification.requestPermission();
}
else {
var notification = new Notification(title, {
icon:'Your Notification ICON URL', //replace it with your Notification ICON URL
body: desc,
});

// Remove the notification from Notification Center when clicked.
notification.onclick = function () {
window.open(url);      
};

// Callback function when the notification is closed.
notification.onclose = function () {
console.log('Notification closed');
};

}
}
</script>
