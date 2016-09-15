<?php
/**
 * Plugin Name: Browser Notification Manager
 * Plugin URI: http://www.9lessons.info/2015/11/display-browser-notifications-from-web.html
 * Description: Display web Browser Push Notifications web Application developed By - SRINIVAS TAMADA (9lessions.info)
 * Version: 1.0
 * Author: Santhosh veer
 * Author URI: https://santhoshveer.com
 */


function mskv_header_scripts(){
 echo get_option('push-head-scr');	
}
add_action('wp_head', 'mskv_header_scripts');



function push_head_scr() {
if(isset($_POST['sub'])){
	add_option('push-head-scr', stripslashes($_POST['msk-header']), '', 'yes' );
	
	$mshead_scr = get_option('push-head-scr');

	if($mshead_scr!="" || $mshead_scr==NULL){
	 update_option('push-head-scr', stripslashes($_POST['push-header']));
	}
}
?>

<div id="post-body" class="metabox-holder columns-2">
<div id="post-body-content">
<div class="postbox">
<div class="inside">
<form method="post" action="">
<fieldset>
<table cellpadding="10" cellspacing="10">
<tr><td width="25%" valign="top"><h3>Browser Notification Manager</h3><p>Browser Notification Manager and your code will be Printed <code>&lt;head&gt;</code> section.</p></td>
<td><textarea name="push-header" class="widefat" rows="30" cols="80" style="font-family:Courier New;"><?php echo get_option('push-head-scr'); ?></textarea></td></tr>
<tr><td colspan="2"><input class="button button-primary" type="submit" id="sub" name="sub" value="Save"/></td></tr>
</table>
</fieldset>
</form>
<br />
<?php if (count($_POST)>0) echo "<code>Your Setting Successfully Saved</code>"; ?>
</div>
</div>
</div>
</div>
<?php
}

function mskv_push_head() {

 add_options_page('Push Code', 'Push Code', 'manage_options', 'msk-push', 'push_head_scr');

}
add_action('admin_menu', 'mskv_push_head');
