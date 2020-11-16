// copyright cagycee | Made Sunday, November 15th v0.1r
// includes cLibrary library!
let vEmail, vPassword, vRePassword = 1;
var count = 0;
var seconds = 10;
var intv;
const authLogin = () => {
    var email, password;
    email = cc.HTML.value('lemail', 'input');
    password = cc.HTML.value('lpassword', 'input');
    if (email) {
        if (password) {
            if (email.indexOf('@') != -1) {
                if (email.indexOf('.') != -1) { 
                    if (clients[email]) {
                        if (clients[email]["password"]===password) {
                            cc.HTML.replace('form', `<span style="color: green;">Welcome ${email}! Is ${clients[email]["food"]} still your favorite food?</span>`);
                            /* note to Viewer: This is a very insecure login form with the usage of JavaScript objects.
                               if you want to use this on a publishable website, please refrain on how easy it is to change
                               and view the objects contents. This is only recommended for private usage! Note that you will
                               have to relogin if the page reloads! */
                            eraseErr();
                        } else {
                            cc.HTML.replace('err', `Incorrect email or password!`);
                        }
                    } else {
                        cc.HTML.replace('err', `${email} is not registered!`);
                    }
                } else {
                    cc.HTML.replace('err', 'Must contain an email!');    
                }
            } else {
                cc.HTML.replace('err', 'Must contain an email!');
            }
        }
    }
};
/* not making
const authRegistration = (email, password, repassword, e) => {
    if (email) {
        if (password) {
            if (repassword) {
                // ...
            }
        }
    }
};
*/
var setImp = () => {
    count = 0;
    clearInterval(intv);
    importantReg();
    intv = setInterval(importantReg, 200);
}

var importantReg = () => {
  count++;
  //document.write(count);
  seconds = 4;
  if (count > seconds) {
    clearInterval(intv);
  }  else {
      if ((count / 2) === Math.ceil(count / 2)) {
        document.getElementById('err').style.color='red';
      } else {
          document.getElementById('err').style.color='black';
      }
  }
};

const switchAuth = t => {
    if (t) {
        switch(t) {
            case 'login':
                cc.HTML.replace('form', cc.HTML.value('loginF', 'html'));
                break;
            case 'registration':
                cc.HTML.replace('form', cc.HTML.value('registrationF', 'html'));
                cc.HTML.replace('err', '<span style="font-weight: bold;">INFO:</span> Registration is just a POC. ' +
                'This cannot be created without a server side programming language(PHP, ASP.NET, ect). ' +
                'You can add more login details by accessing the <a href="js/clients.js">js/clients.js</a> file.');
                break; 
            default:
                return !t;
        }
    } else {
        return !!t;
    }
}

const eraseErr = () => {
    cc.HTML.replace('err', '');
};

const starChecker = () => {
    //no usage but cool concept
    if (vEmail===1) {
        cc.HTML.replace('vEmail', '*');
    }
    if (vPassword===1) {
        cc.HTML.replace('vPassword', '*');
    }
    if (vRePassword===1) {
        cc.HTML.replace('vRePassword', '*');
    }
};
/* failed miserably lol
const checkEmail = () => {
    let emailValue = cc.HTML.value('lemail', 'input');
    if (emailValue) {
        if (emailValue.indexOf('@')) {
            vEmail = 0;
            eraseErr();
        } else {
            vEmail = 1;
            //cc.HTML.replace('err', "That is not an email!");
        }
    } else {
        vEmail = 1;
    }
    starChecker();
};
*/