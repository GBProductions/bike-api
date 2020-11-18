# _Get Your Bike Back_

### By _**Garret P Brown and Tyler Sinks**_
![An image of a happy bike rider](img/bikeRider01.jpeg)

### _This Project's Reason for Being and Description_
_This project functions as a testing ground for applying some API application_
* Created November 18, 2020
* Last major revision happened on November 19, 2020
* Hopes to apply some of the data available through the Bike Index API:
    * MVP: Be able to register your bike into the API
    * Stretch Goal 1: Find geo-location data based on your bike description.
    * Stretch Goal 2: Find various info about your bike based on a serial number search.
* Before looking at the js/scripts.js, see if you can discern Mr. Roboger's logic just by guessing and checking your input numbers.
* If one cannot resist, the business and user-interface logics lay in the js/scripts.js file.
* initially created in response to a project prompt to be ginned up completely solo and completely within a nine hour window on **30 October, 2020**

## Setup/Installation Requirements

**Software that this project requires:**
1. a web browser
2. a plain text editor, such as `Basic Text Editor` available for Windows devices, or developer go-to text editors such as Sublime Text, Atom, VIM, or Visual Studio Code
3. a command line (or "Terminal.app" on a Mac) program for entering git prompts
4. No additional code libraries or dependencies need to be installed locally for you to experience this project in all its splendor.
    4a. Perhaps one should make sure that git is installed on one's machine, so as to be able to follow the git prompts for the command line interface below

**Most straightforward way to just see the rendered page:**
* [Click this link](https://sinkstyt.github.io/MrRobogers/index.html) to load the site as it is currently hosted by GitHub Pages
    * _Should this link fail, one could copy and paste the address below into a web browser's address bar:_
    ### https://sinkstyt.github.io/MrRobogers/index.html ###

## To Install the Whole Thing Locally

**Let's Call This: "To Take the `git` Route"**
1. Launch your terminal application (eg. Terminal.app if reading this from a macOS environment.)
2. Create the directory to which you would like to copy the project's files to your machine. _AN EXAMPLE:_
    2a. `$  pwd`
    * > `{Users}/{YOUR_USER_NAME}/`
   
    2b. `$  mkdir MrRobogersRailroad`  // makes a directory at {Users}/{YOUR_USER_NAME}/MrRobogersRailroad
    2c. `$  cd MrRobogersRailroad`    // changes your present working directory to the directory you have just made
    * > `{Users}\{YOUR_USER_NAME}\MrRobogersRailroad`

3. Now that you are in the destination directory, pull the files down to your machine from this README's GitHub repository. A suggested series of command line prompts follows by which one might do this:      
      3a. `$~  pwd`
      * > `{Users}\{YOUR_USER_NAME}\MrRobogersRailroad`
    
      3b. `$~  git clone {the_URL_of_my_GitHub_repository_pasted_from_your_clipboard}`[^bignote]
        _Something like this will then be printed to your console:_
        > Cloning into 'live-share'...
        > remote: Enumerating objects: 72, done.
        > remote: Counting objects: 100% (72/72), done.
        > remote: Compressing objects: 100% (58/58), done.
        > remote: Total 6989 (delta 24), reused 39 (delta 14), pack-reused 6917
        > Receiving objects: 100% (6989/6989), 51.25 MiB | 9.65 MiB/s, done.
        > Resolving deltas: 100% (4274/4274), done.
4. Now you've got somebody's project (mine, in this case) in that local directory. Happy perusing!
5. **A perusal suggestion** Use that command line, now that you're in the root folder for this project anyway, to launch your editor of choice (example, Visual Studio Code):
    `code .`
    > this should launch a new window in VS Code open to the root folder of the directory. Of course some unique system or user profile settings may instead give an error message at this point. For help on this, _Stick with it! We're almost there!_ please check out the documentation appropriate to this error/your text editor of choice's command prompts.

## Specs

Describe: mrRobogerSpeaks

Test | Code | Expect
------ | ------|----------
It will say (return), "Beep!", if user input includes 1.        |        | mrRobogerSpeaks(1).toEqual("Beep!")
It will say, "Boop!", if user input includes a 2.       |        | mrRobogersSpeaks(2).toEqual("Boop!")
It will say, "Won't you be my neighbor?" if user input includes a 3.       |        | mrRobogerSpeaks(3).toEqual("Won't you be my neighbor?")  
It prioritizes the third test above the previous two.       |        | mrRobogerSpeaks(123).toEqual("Won't you be my neighbor?")   
It prioritizes the second test only above the first.    |      | mrRobogerSpeaks(12).toEqual("Boop!")     
It will say back to the user all previous responses before also responding to the most recent input.    |      | mrRobogerSpeaks(000).toEqual(...{all previous responses}, {THIS_INPUT'S_RESPONSE})
For input numbers that are four and higher, it will respond by replacing numbers including 1 or 1s, 2 or 2s, and 3 or 3s as explained above. All other numbers will be returned to the user unchanged but merely increased by one up to and including the user input number.  |      | mrRobogerSpeaks(6).toEqual(0, Beep!, Boop!, Won't you be my neighbor?, 4, 5, 6)

## Known Bugs

_I am sure that some of the hypertext links will break within days if not hours._
_No known bugs_
_Furthermore, seven out of the seven test specs written above were passing at time of first submission (about 7:20 AM PST 13 November, 2020)_

## Support and Contact Details

_Please let me know if you would like to share suggestions for the page. I can be most easily reached by email._
_tyler.sinks@gmail.com_

## Technologies Used

_Bike Index API: Cofounded by Seth Herr and Bryan Hance in 2013. Bike Index is a 501(c)(3) nonprofit._
_html, JavaScript, jQuery,_
_css, Bootstrap_

### License

*MIT 2.0*

Copyright (c) 2020 **_Tyler Sinks_**

[^bignote]: If you're having trouble finding that nice green "Code" button:
    * a .png of it at time of README writing is this: ![the green Code button seen near the top right of any repository hosted on GitHub](img/greenCodeButton.png)
    * Alternatively &mdash; should you not be able to use this button to load this project's URL to your clipboard &mdash; I give the URL to you here as well:
    https://github.com/sinkstyt/MrRobogers.git