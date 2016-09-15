<script>
var articles = [
["Google URL Shortener Web App.","http://www.allwebtuts.com/google-url-shortener-web-app/"],
["My HTML post Widgets (My Wordpress Plugin).","https://wordpress.org/plugins/my-html-post-widgets/"],
["My Bitly PHP Web App","http://www.allwebtuts.com/bitly-web-app/"],
["add the Stylish Headings in WordPress without plugins","http://www.allwebtuts.com/add-the-stylish-headings-in-wordpress-without-plugins/"],
["Allwebtuts Lean Wordpress","http://www.allwebtuts.com"],
["Powerful password Generator.","https://www.mskian.com/tools/imgencode"],
["Blogger Sitemap Generator","https://www.mskian.com/tools/bloggersitemap"],
["Base64 image Encoder.","https://www.mskian.com/tools/imgencode"],
["Feedburner Email subscriber booster plugin.","http://www.allwebtuts.com/feedburner-email-subscriber-booster/"],
["Facebook Messenger Contact Form.","http://www.allwebtuts.com/facebook-messenger-contact-form/"]
];


setTimeout(function(){ 
var x = Math.floor((Math.random() * 10) + 1);
var title=articles[x][0];
var desc='Most popular article.';
var url=articles[x][1];
notifyBrowser(title,desc,url);
}, 150000);



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
icon:'https://www.mskian.com/assets/mskbell.png',
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
