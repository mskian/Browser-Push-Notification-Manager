# Browser Push Notification Manager
Display web Browser Push Notifications in Chroma and Mozilla

Developed By SRINIVAS TAMADA (9lessons.info)

<img src="https://raw.githubusercontent.com/mskian/Browser-Push-Notification-Manager/master/web1.jpg"/>

- Work in Google Chrome and Mozilla
- Work in Both HTTPS/HTTP Connections
- Free Plugin 

<h2>How to Install this we push Notification on Wordpress website?</h2>

<img src="https://raw.githubusercontent.com/mskian/Browser-Push-Notification-Manager/master/web2.jpg"/>

- Download the Plugin Package here
- Upload the plugin in your Wordpress plugin Directory and activate it
- Now copy the Push Notification JS file from <a href="https://raw.githubusercontent.com/mskian/Browser-Push-Notification-Manager/master/push.js">push.js</a>
- Now paste the Push Notification code on the Push Notification Manager box plugin (After activate the you can find the admin option in settings Menu tab.)
- You can manage the Push from the Browser Notification Manager plugin (Specially developed for this web notification application)
- That's all

<h3>Custamization</h3>

- Add your Post title and Message for Push Notification Find this codes on the script
 <pre>//Replace YOUR TITLE and YOUR LINK with your Post title and post link
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
];</pre>

- Now search for <b>icon:'Your Notification ICON URL',</b> and  //replace it with your Notification ICON URL
- check the Full configuration here  - http://www.9lessons.info/2015/11/display-browser-notifications-from-web.html
- Find this }, 120000);  //calls every 2 minutes  Notification Interval time

<pre>
}, 120000);  //calls every 2 minutes 
}, 130000);  //calls every 3 minutes 
}, 140000);  //calls every 4 minutes 
}, 150000);  //calls every 5 minutes  (recommended interval time)
}, 160000);  //calls every 6 minutes 
}, 170000);  //calls every 7 minutes 
}, 180000);  //calls every 8 minutes 
</pre>

You can Update the Push Messages from the Browser Push Notification Manager plugin.(Just Replace the Old Messages)

<h4>From the Editor's desk</h4>

- Your visitor receive the Push Notifications when they enter into your website.
