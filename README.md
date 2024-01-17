This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [Tsparticles](https://www.npmjs.com/package/cra-template-particles).

## Portfolio template for Developers

A clean, beautiful and responsive portfolio template for Developers!
The customize it as much as you want. The portfolio template create in React.js.

## Prerequisites

<h2>You will need Git and Node.js (provided with NPM) installed on your computer.</h2>

- [Node](https://nodejs.org/en)
- [Git](https://git-scm.com/)


## How to use

```bash
# Clone the repository
$ git clone https://github.com/BlueButterflies/professionalportfolio.git

# Move into the repository
$ cd professionalportfolio

# Remove the current origin repository
$ git remote remove origin

#Npm
$ npm install

# Start the development server
$ npm start

# When you finish compiling the project - building your project
$ npm run build

```

## Using Library

### Check if following libraries are installed in the file package.json

```bash
$ npm install react-bootstrap bootstrap
$ npm install animate.css --save
$ npm install tachyons@4.12.0
$ npm install tsparticles
$ npm install @emailjs/browser --save
$ npm install react-icons --save
```

### Git Page 

#### For the first step open package.json and change homepage

Change homepage with your iformation:
```bash
"homepage": "https://myusername.github.io/my-app"
```

or for GitHub user page:
```bash
"homepage": "https://myusername.github.io"
```

or for a custom domain page:
```bash
  "homepage": "https://mywebsite.com",
```

#### For the second step install gh-pages and add deploy to scripts in package.json

```bash
npm install --save gh-pages
```

#### For third step add the following scripts in your package.json

```bash
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build"
```

#### If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:

```bash
  "scripts": {
    "predeploy": "npm run build",
-   "predeploy": "npm run build",    
+   "deploy": "gh-pages -b master -d build",
```

#### For the last step deploy the site by running
```bash
$ npm run deploy
```

#### If you are having problems with gh-page
```bash
#For the first run build
$ npm run build

#For the second run deploy
$ npm run deploy
```
#### Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch or configure your domain

For more informations visit [Create React App/Deployment](https://create-react-app.dev/docs/deployment/#step-2-install-gh-pages-and-add-deploy-to-scripts-in-packagejson)

---

## Template Instructions

### Home Section

Go to /src/components/Home/Home.js and fill in your information.

```js
import React from "react";
import Container from 'react-bootstrap/Container';


const  Home = () => {
  return (
    <Container className="home tc">
      <div className="navy tc">
        <p className="title tc animate__animated animate__zoomInDown">
                                    {/**Change with your name */}
          <span>Hi, my name is <span className="name">Your name</span></span>
        </p>
        <p className="subTitle tc animate__animated animate__zoomInDown">
                    {/**Write what type of developer you are */}
          <span>I'm the <span className="profession">Unknown Developer</span></span>
        </p>
      </div>
    </Container>
  );
}

export default Home
```

### About Section

Go to /src/components/About/About.js, fill in your site information and add your image.

```js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

import ProfilImage from "./profilImage.jpg";

function About() {
    return (
        <div className="about tc">
            <Container>
                <Row className="tc">
                    <Col sm={"12"} md={"6"} xs={"12"}>
                        <Image src={ProfilImage} roundedCircle fluid className="imgLogo" />
                    </Col>
                    <Col className="tc" sm={"12"} md={"6"} xs={"12"}>
                        <div className="tc animate__animated animate__zoomInUp animate__delay-2s">
                            <div className="titleAbout tc">
                                <h1>
                                    About me
                                </h1>
                            </div>

                            <div className="description f3">
                              {/**Write how are you*/}
                              This is where you can describe about yourself.
                              The more you describe about yourself, the more chances you have!
                              Extra Information about you! like hobbies and your goals.
                            </div>
                        </div>
                    </Col>
                </Row> 
            </Container>
            
        </div>
        
    );
}

export default About
```

### Projects Section

Go to /src/components/ProjesctCard/data.json and fill in your information. Go to ./public/ImageProjects and add your images of your projects.

```json
[
    {
        "id": "one",
        "title": "Project Title",
        "description": "Describe the project being very specific: complement the information: the skills learned or reinforced in its realization .",
        "image": "./ImageProjects/projectImage.jpg",
        "urlBtnLive": "url live project",
        "urlBtnCode": "url code project"
    },
    {
        "id": "two",
        "title": "Project Title",
        "description": "Describe the project being very specific: complement the information: the skills learned or reinforced in its realization .",
        "image": "./ImageProjects/projectImage.jpg",
        "urlBtnLive": "url live project",
        "urlBtnCode": "url code project"
    },
    {
        "id": "three",
        "title": "Project Title",
        "description": "Describe the project being very specific: complement the information: the skills learned or reinforced in its realization .",
        "image": "./ImageProjects/projectImage.jpg",
        "urlBtnLive": "url live project",
        "urlBtnCode": "url code project"
    },
    {
        "id": "four",
        "title": "Project Title",
        "description": "Describe the project being very specific: complement the information: the skills learned or reinforced in its realization .",
        "image": "./ImageProjects/projectImage.jpg",
        "urlBtnLive": "url live project",
        "urlBtnCode": "url code project"
    },
    {
        "id": "five",
        "title": "Project Title",
        "description": "Describe the project being very specific: complement the information: the skills learned or reinforced in its realization .",
        "image": "./ImageProjects/projectImage.jpg",
        "urlBtnLive": "url live project",
        "urlBtnCode": "url code project"
    }
]
```

### Contacts Section

Go to /src/components/Contacts/Contacts.js and fill in your service_id, template_id and public_id, you will find in your account email.js.

```js
import React, { useRef } from "react";
import {Container,Form,Button,} from 'react-bootstrap';
import { FaPaperPlane } from "react-icons/fa";
import emailjs from '@emailjs/browser';

const Contacts = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

                        {/**Set with your service id, template id, and public key from your account emailjs*/}
        emailjs.sendForm('your service_id', 'your template_id', form.current, 'your public_id')
            .then((result) => {
                console.log(result.text);
                alert("Sent successfully");
            }, (error) => {
                console.log(error.text);
            }
        );

        e.target.reset();
    };

    return (
        <div className="contacts">
            <Container className="tc form">
                <h1 className=" white tc">Contact me</h1>
                <Form ref={form} className="tc" onSubmit={sendEmail}>
                    <Form.Group className="mb-2" controlId="formGroupName">
                        <Form.Control required type="text" name="user_name" placeholder="Full name" size="lg" id="fullName" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="formGroupEmail">
                        <Form.Control required type="email" name="user_email" placeholder="Email" size="lg" id="email" />
                    </Form.Group>
                    <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
                        <Form.Control required as={"textarea"} rows={8} name="message" placeholder="Message" id="message" />
                    </Form.Group>
                    <Form.Group className="mb-3 tc" >
                        <Button className="sendBtn" type="submit" value="Send" variant="outline-light" >
                            <FaPaperPlane className="sendIcon"/><ba>Send</ba>
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}

export default Contacts
```

### Footer Section

Go to /src/components/Footer/Footer.js and add Your social media URLs.

```js
import React from "react";
import Container  from "react-bootstrap/Container";
import { FaGithub, FaLinkedinIn, FaTwitter, FaStackOverflow, FaCopyright} from "react-icons/fa";



function Footer() {
    return (
        <Container className="footer tc">
                {/** In each URL write the URLs of your account*/}
                <a href="" target="_blank">
                  <FaGithub  className="icon ma3"/>  
                </a>
                <a href="" target="_blank">
                   <FaLinkedinIn  className="icon ma3"/> 
                </a>
                
                <a href="" target="_blank">
                   <FaTwitter  className="icon ma3"/> 
                </a>

                <a href="" target="_blank">
                   <FaStackOverflow  className="icon ma3"/> 
                </a>
                <hr/>

                <h6 className="mt3">
                    <FaCopyright  className="copy"/>
                    <a href="https://github.com/BlueButterflies" target="_blank">
                        2024 - Template developed by <span>S/Z Siyana Zdravkova Web Developer</span>
                    </a>
                </h6>
        </Container>
    );

}

export default Footer
```

### Css Style 

Go to /src/index.css and change font-family, background color, color and increment animate delayed.

```css
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@1,500&display=swap');

body {
  margin: 0;
  padding: 0;
  font-family: 'Kanit', sans-serif;
}

/*Home Section*/
.name{
  background: radial-gradient(circle at 0.4% -0.6%, rgb(143, 170, 210) 0%, rgb(255, 177, 177) 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.profession{
  background: radial-gradient(circle at 0.4% -0.6%, rgb(143, 170, 210) 0%, rgb(255, 177, 177) 90%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.knowBtn .ba{
  background: radial-gradient(circle at 0.4% -0.6%, rgb(143, 170, 210) 0%, rgb(255, 177, 177) 90%);
  color: #fff;
}

.knowBtn .ba:hover{
  background: radial-gradient(circle at 0.4% -0.6%, rgb(255, 177, 177) 0%, rgb(143, 170, 210) 90%);
}

/*About Section*/
.about {
   background: radial-gradient(circle at 0.4% -0.6%, rgb(143, 170, 210) 0%, rgb(255, 177, 177) 90%);
   color: white;
}

/*Project Section*/
.btnLive, .btnSource{
  background: radial-gradient(circle at 0.4% -0.6%, rgb(143, 170, 210) 0%, rgb(255, 177, 177) 90%);
  color: white;
}

.moreLessBtn .ba{
  background: radial-gradient(circle at 0.4% -0.6%, rgb(143, 170, 210) 0%, rgb(255, 177, 177) 90%);
  color: #fff;
}
 
.moreLessBtn .ba:hover{
  background: radial-gradient(circle at 0.4% -0.6%, rgb(255, 177, 177) 0%, rgb(143, 170, 210) 90%);
}

/*
   Start animating delayed projects.
   You need to increment for each project by writing row.#(next id number).
*/
.row #four{
  animation-delay:1s;
}

.row #five{
  animation-delay: 2s;
}
/* Finish animating delay projects. */

/*Contact Section*/
.contacts {
  background: radial-gradient(circle at 0.4% -0.6%, rgb(143, 170, 210) 0%, rgb(255, 177, 177) 90%);
}

.contacts .sendBtn b{
  color: white;
}

.contacts .sendBtn .sendIcon{
  color: white
}

/*Footer Section*/
.footer .copy{
  color: rgb(255, 177, 177);
}

.icon{
  color: rgb(255, 177, 177);
}

.footer h6 a{
  color: rgb(255, 177, 177);
}

.footer h6 a span:hover{
  color: rgb(143, 170, 210);
}
```
---

## Technologies used

- [React Js](https://react.dev/)  - JavaScript Framework
- [React Bootstrap](https://react-bootstrap.netlify.app/) - Front-end component library
- [Animate style](https://animate.style/) - Library for animations 
- [Tachyons](https://tachyons.io/) - Open source component library
- [Tsparticles](https://www.npmjs.com/package/tsparticles) - Library Tsparticles

---

## Author

**Siyana Yasenova Zdravkova**
- [Github](https://github.com/BlueButterflies)
- [Website](https://bluebutterflies.github.io/portfolio/)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

I was motivated to create this project after seeing the Simplefolio that [Jacobo Martinez](https://github.com/cobimr) created and shared with the [ZTM Community](https://github.com/zero-to-mastery) and [Andrei](https://github.com/aneagoie)

## Further Reading / Useful Links

* [React.js](https://react.dev/learn)
* [Create-react-app](https://create-react-app.dev/docs/getting-started)
* [React bootstrap](https://react-bootstrap.netlify.app/docs/getting-started/introduction)
* [Emailjs](https://www.emailjs.com/docs/)
* [Animate.css](https://animate.style/#documentation)
* [Tachyons](https://tachyons.io/docs/)

