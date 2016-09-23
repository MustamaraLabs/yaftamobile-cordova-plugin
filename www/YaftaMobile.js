var exec = require('cordova/exec');

var klass="YaftaMobileBridge";

var YaftaMobile = {
/**
 * 
 * This enum represents possible banner positions. Use one of these
 * constants as the bannerPosition when calling showBanner.
 *  */
 BannerPosition:{
 	TOP_CENTER : 0,
 	TOP_LEFT :1,
 	TOP_RIGHT : 2,
 	BOTTOM_CENTER : 3,
 	BOTTOM_LEFT : 4,
 	BOTTOM_RIGHT : 5
 },




/**
 * This enum represents YaftaMobile's supported ad sizes.  Use one of these
 * constants as the adSize when calling showBanner.
 * @const
 */
 AdSize:{
 	FLEXIBLE: 'FLEXIBLE',
 	S300X50: 'S300X50',
 	S320X50: 'S320X50',
 	S468X60: 'S468X60',
 	S728X90: 'S728X90'
 },
/**
 * This enum represents the ad events that could be fired during ad life-cycle.
 */
 Event :{
	 //Fired when an ad is successfully loaded.
	 onAdLoaded: "onAdLoaded",

	//Fired when an ad is clicked.
	onAdClicked: "onAdClicked",

	//Fired when a failure occurred during ad loading.
	onAdError: "onAdError",

	//Fired when an interstitial ad is loaded.
	onInterstitialLoaded: "onInterstitialLoaded",

	//Fired when an interstitial ad is clicked.
	onInterstitialClicked: "onInterstitialClicked",

	//Fired when a failure occurred during interstitial ad loading.
	onInterstitialError: "onInterstitialError",

	//Fired when an interstitial ad is closed.
	onInterstitialDismissed: "onInterstitialDismissed"
},


setTestMode: function(testMode,successCallback, failureCallback) {
	var options = { "testMode":testMode };
	exec( successCallback, failureCallback, klass, 'setTestMode', [options]);
},
showBanner: function(adSize,bannerPosition,refreshRate,successCallback, failureCallback) {
	var options = { "adSize": adSize, "bannerPosition":bannerPosition,"refreshRate":refreshRate};
	exec( successCallback, failureCallback, klass, 'showBanner', [options]);
},
pauseBanner: function(successCallback, failureCallback) {
	exec( successCallback, failureCallback, klass, 'pauseBanner', []);
},
resumeBanner: function(successCallback, failureCallback) {
	exec( successCallback, failureCallback, klass, 'resumeBanner', []);
},
loadInterstitial: function(successCallback, failureCallback) {
	exec(successCallback, failureCallback, klass, 'loadInterstitial', []);
},
showInterstitial: function(successCallback, failureCallback) {
	exec( successCallback, failureCallback, klass, 'showInterstitial', []);
}





};
module.exports=YaftaMobile;