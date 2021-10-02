# Node-js-components
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=mostlypanda&repo=Node-js-functionalities&show_icons=true&theme=radical)](https://github.com/anuraghazra/github-readme-stats)


![Languages](https://img.shields.io/github/languages/count/mostlypanda/node-js-functionalities?style=plastic)
![Issues](https://img.shields.io/github/issues/mostlypanda/node-js-functionalities?style=plastic)
![Code-Size](https://img.shields.io/github/languages/code-size/mostlypanda/node-js-functionalities?style=plastic)
![Release](https://img.shields.io/github/v/release/mostlypanda/node-js-functionalities?style=plastic)
![Completion](https://img.shields.io/badge/Project%20Phase-Keep%20updating%20New%20Ideas-blue?style=plastic)

Well it contains many completely defined node-js REST API's for different functionality
Upto now I have uploaded below functionalities in this repository and some amazing tutorials for important features of nodejs

1. Session expire using nodejs
2. Rest Api's for user sign-up, login, logout and user profile using node-js, expess, mongodb along with jwt token as an authentication agent
3. OTP verification here complete form is designed and when user filled and submit the form an otp will be sent to filled email of user using nodemailer module and smtp method 
then user has to enter the received otp for further verification
4. CRUD(Create, Read, Update, Delete) API's have been successfully created, here you can create any note and then you can find it by id, author name, title as well as all, you can edit it by id name and delete it also
5. To upload an image in nodejs using multer(local storage)
6. Implementing a payment gateway in node-js
7. Implementing web scrapping for static as well as dynamic content:
  1. for static content, I have used axios(to get content) and cheerios for parsing HTML DOM
  2. for dynamic content nightmare has been used, here flipkart search is also implemented where you can get data of any product 
---
## Tutorial Blogs
In this series I have also written the tutorial blogs-
* My first blog is about developing CRUD api's 
( [My blog url ](https://medium.com/@sarthakmittal1461/to-make-restful-crud-apis-with-node-js-express-and-mongodb-5e76a7d2d8fe) )

* So this blog is about how to build RESTful User API's for login/sign-up and logout in node.js, express and mongodb using jwt-authentication
([My blog url](https://medium.com/@sarthakmittal1461/to-build-login-sign-up-and-logout-restful-apis-with-node-js-using-jwt-authentication-f3d7287acca2))

* This blog is about building a 2-wayauthentication in Node.js using otp verification using nodemailer package of npm.
([My blog url](https://medium.com/@sarthakmittal1461/to-build-otp-verification-for-2-way-authentication-using-node-js-and-express-9e8a68836d62))

## you will find more stay tuned with my medium.com profile 
[My profile @sarthakmittal](https://medium.com/@sarthakmittal1461)

---
## Requirements

For development, you will need Node.js and a node global package, Yarn, installed in your environement and many other packages also which are stated further

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---


# to run any above utility or api in your local machinery
clone the above repository by using 
```
git clone "https://github.com/mostlypanda/Node-js-functionalities.git"
```
then
```
cd (name of the folder you want to go)
```
then to install all the dependencies required for proper functioning of the app
```
npm install 
```
then finally
```
nodemon
```
(use only nodemon if index.js is main file otherwise)

```
nodemon app.js
```

# Contribution Guide
##### If you don't have git on your machine, [install it](https://help.github.com/articles/set-up-git/).

### Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

### Clone the repository

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```
git clone [url you just copied]
```

where [url you just copied] is the url to this repository (your fork of this project). See the previous steps to obtain the url.

For example:

```
git clone https://github.com/parteek10/450DSA.git
```

## Create a branch

Change to the repository directory on your computer (if you are not already there):

```
cd directory-name
```

Now create a branch using the `git checkout` command:

```
git checkout -b your-new-branch-name
```

For example:

```
git checkout -b add-hritik
```

## Add new file 

If the folder for that topic exist , add a new cpp file with file name as problem number. if the folder for that topic does not exist , create a new one and add the cpp file . 
For example : 
```
for the problem reverse the array 3 : array->0.cpp   
```

## Make necessary changes and commit those changes

If you go to the project directory and execute the command `git status`, you'll see there are changes.

Add those changes to the branch you just created using the command:

```
git add .
```

Now commit those changes using the `git commit` command:

```
git commit -m "Add your committing message here"
```

## Push changes to GitHub

Push your changes using the command `git push`:

```
git push origin <add-your-branch-name>
```

replacing `<add-your-branch-name>` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button.

Now submit the pull request.

