<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, intial-scale=1">
  <title>David Marcos - Web Developer</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="css/style.css">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manuale:wght@300;400&family=Playfair+Display+SC:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

  <div class="navWrap">
  <div class="navbarContainer d-flex justify-content-end">
    <div class="mobileNavBurger d-none">
      <div class="burgerWrapper">
      <img class="mobileImgBurguer" src="img/hamburguer.png"/>
      </div>
    </div>
    <nav class="navbar">
      <ul class="mr-auto d-flex justify-content-around">
        <li class="nav-item">
          <a id="homeMenu">HOME</a>
          <div style="position: relative; width: 100%;">
            <i class="underlineBar active"></i>
          </div>
        </li>
        <li class="nav-item">
          <a id="workMenu">WORK</a>
          <div style="position: relative; width: 100%;">
            <i class="underlineBar"></i>
          </div>
        </li>
        <li class="nav-item">
          <a id="aboutMenu">ABOUT</a>
          <div style="position: relative; width: 100%;">
            <i class="underlineBar"></i>
          </div>
        </li>
        <li class="nav-item">
          <a id="contactMenu">CONTACT</a>
          <div style="position: relative; width: 100%;">
            <i class="underlineBar"></i>
          </div>
        </li>
      </ul>
  </nav>
  </div>
 </div>

  <!--First Page-->

  <div id="home" class="firstPage">

    <div class="titleContainer d-flex justify-content-center">
      <div class="titleSubContainer my-auto d-flex justify-content-center">
        <div class="profileLeftSide d-flex justify-content-center">
          <div class="profileLeftSubContainer d-flex flex-column my-auto">
            <div class="topLeftProfile d-flex justify-content-center">
              <div style="opacity: 0; margin-right: 5vw" id="davidTextWraper">
              <h5>David Marcos</h5>
              </div>
            </div>
            <div class="bottomLeftProfile d-flex justify-content-end">
              <div class="my-auto">
                <div style="opacity: 0; margin-top: 5vw" id="imageProfileWraper">
                  <img src="img/profileExample.png">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="profileRightSide d-flex">
          <div class="my-auto">
            <div style="opacity: 0; margin-left: 5vw" id="developerTextWraper" >
              <h1>WEB //</h1>
              <h1>DEVELOPER</h1>
            </div>
        </div>
        </div>
      </div>
    </div>
  </div>



  <!--Second page-->

  <div id="about" class="secondPage d-flex justify-content-center">
    <div class="secondPageContainer my-auto">
      <div class="secondPageTopContainer d-flex justify-content-start">
        <div style="opacity: 0; right: 5vw" id="secondPagetopLeftWrapper">
          <div class="secondPageTopLeftSide">
            <h2>ABOUT ME //</h2>
            <p>I am a software developer based in
            Spain with 8 years of experience
            in the software industry.</p>
            <br>
            <p>After working on projects of diferent sizes, sometimes
            as a front-end developer and other times as a full-stack developer, I am now practicing my craft as
            a freelancer.</p>
          </div>
        </div>
        <div style="opacity: 0; left: 5vw" id="secondPagetopRightWrapper">
          <div class="secondPageTopRightSide d-flex justify-content-end">
            <img class="my-auto" src="img/8yearsWeb.png"/>
          </div>
        </div>
      </div>
      <div style="opacity: 0; top: 5vw" id="secondPageBottomWrapper">
        <div class="secondPageBottomContainer">
          <h2>WHAT I CAN DO FOR YOU //</h2>
          <ul class="d-flex justify-content-between">
            <li>
              <h3>DEVELOPMENT</h3>
              <p>I can build for you scalable websites from scrartch with
                responsive design and custom animations. I usually use
                AngularJS with PHP.
              </p>
            </li>
            <li>
              <h3>BUG FIXING</h3>
              <p>With a solid track record in website manteinance
                I have encountered all types of bugs and I can help you to solve the ones you may have.
              </p>
            </li>
            <li>
              <h3>APIs AND BACK END</h3>
              <p>My deep back-end understanding of requesting and displaying data from APIs and databases
                can be useful to make your websites work properly.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>



  <!--Third Page-->

  <div id="work" class="thirdPage d-flex justify-content-center">
    <div class="thirdPageContainer my-auto">
      <div style="position: relative; height: 30%; opacity:0; right: 5vw;" id="thirdPageTopWrapper">
      <div class="thirdPageTop">
        <h2>WORK //</h2>
      </div>
      </div>
      <div class="thirdPageBottom d-flex justify-content-center">
        <div style="position: relative; height: 90%; width: 60%; opacity: 0; right: 5vw" id="leftProjectsWrapper">
          <div class="leftProjects d-flex flex-column my-auto">
            <div class="projectContainer my-auto d-flex justify-content-start">
              <div class="angular imgBox d-flex justify-content-center my-auto">
              </div>
              <div class="textBox my-auto">
                <h3>Angular</h3>
                <h4>Appointment/Booking Application</h4>
                <p>An application to book hotels built with
                with Angular, NodeJS/Express and MongoDB</p>
              </div>
            </div>
            <div class="projectContainer my-auto d-flex justify-content-start">
              <div class="wordpress imgBox my-auto">
              </div>
              <div class="textBox my-auto">
                <h3>Wordpress</h3>
                <h4>Woocommerce clothing shop</h4>
                <p>Online shop built with WordPress,
                  the WooCommerce plugin and other custom plugins</p>
              </div>
            </div>
          </div>
        </div>
        <div style="position: relative; height: 90%; width: 60%; opacity: 0; left: 5vw" id="rightProjectsWrapper">
          <div class="rightProjects d-flex flex-column my-auto">
            <div class="projectContainer my-auto d-flex justify-content-start">
              <div class="angularjs imgBox my-auto">
              </div>
              <div class="textBox my-auto">
                <h3>AngularJS</h3>
                <h4>Beer Store</h4>
                <p>Beer store that uses custom animations built
                  with AngularJS, PHP and MySQL</p>
              </div>
            </div>
            <div class="projectContainer my-auto d-flex justify-content-start">
              <div class="php imgBox my-auto">
              </div>
              <div class="textBox my-auto">
                <h3>PHP</h3>
                <h4>Music Streaming/eCommerce Platform</h4>
                <p>Music streaming/eCommerce site built
                with AngularJS, PHP and Paypal API</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <!--Fourth Page-->

  <div class="fourthPage d-flex justify-content-center">
    <div class="fourthPageContainer my-auto">
      <div style="position: relative; height: 40%; width: 100%; opacity: 0; right: 5vw" id="fourthPageTopWrapper">
        <div id="contact" class="fourthPageTop">
          <h2>CONTACT //</h2>
          <div class="upworkSection">
            <h4>Contact me on UpWork //</h4>
            <div class="upworkButtonContainer d-flex justify-content-center">
              <div class="upworkButton my-auto d-flex justify-content-center">
                <img class="my-auto" src="img/upworkLogo2.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="position: relative; height: 40%; width: 100%; opacity: 0; left: 10vw" id="fourthPageBottomWrapper">
        <div class="fourthPageBottom">
          <h4>Contact me directly //</h4>
          <form>
            <div class="formTop d-flex justify-content-between">
              <div class="formBox d-flex flex-column">
                <label>Name</label>
                <input placeholder="John Smith*"></input>
              </div>
              <div class="formBox d-flex flex-column">
                <label>Email</label>
                <input placeholder="John@gmail.com*"></input>
              </div>
            </div>
            <div class="formBottom d-flex flex-column">
              <label>Message</label>
              <textarea placeholder="Your message"></textarea>
            </div>
            <div class="formButton d-flex justify-content-center">
              <button type="submit">SEND</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--Scripts-->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>
  <script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>
  <script
  src="js/main.js"></script>
</body>
<footer>
</footer>
</html>
