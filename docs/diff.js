const readline = require('readline');

// enter this in the CLI: "node vr-git.js 0f6fed29195fd0c4fdd9168165d7c20763949fd9 vr-git_log.maxpat" + Enter
//script arguments for the CLI
 var cli_args = process.argv.slice(2); // slice the first 2 args (first 2 are always 'node' and 'this file')
// the CLI arguments should be diff1 and diff2!
const fs = require('fs');


//attempt to compress git diff before sending out ws:
//var jsscompress = require("js-string-compression");


//make websocket client
var WebSocket = require('ws', 'websocket')
var connection = new WebSocket('ws://localhost:8080'); //connect to max

// http://nodejs.org/api.html#_child_processes
var util = require('util')
var exec = require('child_process').exec;
var child;
var child2;
var child3;

// DON'T DELETE THIS BELOW, IT WORKS AS A CLI CMD
connection.onopen = function () {

// executes the git diff command on just one file (this way we don't end up comparing ALL files in the entire vr-in-vr directory)
		//child = exec("git diff " + diff1 + " " + diff2, function (error, stdout, stderr) {
		//git_log = JSON.stringify(stdout);
		//connection.send(git_log);

		//	JSON.stringify()
 		console.log('listening to max');
		// probably don't need this:  console.log('stderr: ' + stderr);
		//  if (error !== null) {
	    //console.log('exec error: ' + error);
  	//}
};

var myFuncCalls = 0;

// git diff [from-commit] [to-commit]


fs.watchfile('index.html') => { console.log ("changed")};

connection.onmessage = function (a) {
	//ideally from max you specify the command to this script.
{
    myFuncCalls++;
    //console.log( "I have been called " + myFuncCalls + " times" );
}
	
		//
		// first save the diffs to a patch file (THIS IS WHAT WE WILL WORK ON NEXT:
		// WE NEED TO FIND A WAY TO APPLY THE PATCH TO THE FILE IN A TEMP LOCATION
		// AND SEE IF THAT LETS US LOAD A FULL VERSION SAID FILE IN MAX. 
		// http://www.thegeekstuff.com/2014/03/git-patch-create-and-apply/
		child2 = exec("git diff -U$(wc -l /Users/mp/thst6329/docs/index.html | xargs) > ethnography.diff");


		child = exec("diff2html -i file ethnography.diff -F page" + myFuncCalls + ".html -- -M HEAD~1");
		console.log("diff2html -i file ethnography.diff -F page" + myFuncCalls + ".html -- -M HEAD~1");
		//copy the diff_tester_a maxpat over to the git-patch folder, so we
		//evenutally can try applying a patch to this.
		child3 = exec("cp diff_tester_a.maxpat git_patch_files/");
		// and, also send the patch over to max (but we don't yet know how to process
		// this data)
		

	 

	 
};
