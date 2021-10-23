import React from "react";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import acmLanParty from "../../assets/images/about-us.png";
import projectManagement from "../../assets/images/project-management.png";
import educationalTransperencyIcon from "../../assets/images/online-course.png";
import community from "../../assets/images/communities.png";
import socialResponsibiliy from "../../assets/images/social-responsibility.png";
import acmLogo from "../../assets/images/acm_logo_v2.png";
import sweLogo from "../../assets/images/swe_logo_v2.png";
import aiLogo from "../../assets/images/ai_logo_v2.png";
import cyberLogo from "../../assets/images/cyber_logo_v2.png";
import designLogo from "../../assets/images/design_logo_v2.png";
import iotLogo from "../../assets/images/iot_logo_v2.png";

import "./Home.scss";
import { db } from "../../firebase/config";
import Leadership from "../../components/Leadership/Leadership";
const Home = () => {
  db.collection("test")
    .doc("test")
    .get()
    .then((documentSnapshot) => {
      console.log(documentSnapshot.data());
    });

  return (
    <main class="home">
      <section class="home__landing">
        <div class="home__landing__content">
          <h4 class="home__landing__content__sub-title">Welcome to</h4>
          <h1 class="home__landing__content__title">
            Association for Computing Machinery
          </h1>
          <p class="home__landing__content__text">
            ACM, the world’s largest educational and scientific computing
            society, delivers resources that advance computing as a science and
            a profession. We are just your friendly neighborhood student chapter
            at UC Merced.
          </p>
          <div class="home__landing__content__button">
            <div class="home__landing__content__button__front">
              <a
                class="home__landing__content__button__front__text"
                href="http://bit.ly/acm-ucm-discord"
              >
                Discord
              </a>
            </div>
            <div class="home__landing__content__button__behind"></div>
          </div>
        </div>
        <svg
          viewBox="0 0 440 467"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="home__landing__animation"
        >
          <path
            opacity="0.07"
            d="M439.94 234.885C432.283 231.044 426.736 230.94 423.3 234.574C419.863 238.155 418.175 244.228 418.175 252.792V298.935C418.175 307.706 417.21 314.973 415.341 320.734C413.472 326.703 410.277 330.959 405.876 333.451C401.595 335.994 395.807 336.669 388.452 335.475C381.277 334.333 372.294 331.115 361.562 325.769L356.437 323.226V286.893L362.828 290.059C370.485 293.9 375.61 294.367 378.202 291.564C380.915 288.865 382.302 283.208 382.302 274.644V234.003C382.302 223.414 383.508 215.058 385.919 208.881C388.331 202.705 393.094 198.812 400.269 197.047C393.094 188.171 388.331 179.503 385.919 170.991C383.508 162.479 382.362 152.929 382.362 142.34V101.699C382.362 93.1351 380.976 86.18 378.263 80.7301C375.73 75.3839 370.606 70.8164 362.889 66.9755L356.498 63.8093V27.4765L361.622 30.0198C372.354 35.3659 381.337 41.0235 388.512 47.0443C395.867 53.1171 401.655 59.6051 405.936 66.4045C410.397 73.3078 413.532 80.6781 415.401 88.5157C417.271 96.1456 418.235 104.398 418.235 113.118V159.261C418.235 167.825 419.923 175.611 423.36 182.566C426.796 189.573 432.343 194.971 440 198.76L439.94 234.885Z"
            fill="url(#paint0_linear)"
            class="home__landing__animation__brackets"
          />
          <path
            opacity="0.07"
            d="M245.503 101.232C253.16 105.073 258.706 105.177 262.143 101.544C265.58 97.9622 267.268 91.8894 267.268 83.3253V37.1826C267.268 28.4108 268.232 21.1442 270.101 15.3829C271.97 9.41391 275.045 5.10588 279.326 2.56258C283.787 0.0711826 289.575 -0.60357 296.75 0.538319C304.105 1.73211 313.149 5.00207 323.88 10.3482L329.005 12.8915V49.2243L322.614 46.0582C314.957 42.2173 309.712 41.6982 306.999 44.3972C304.467 47.2001 303.141 52.8576 303.141 61.4218V102.063C303.141 112.651 301.935 121.008 299.523 127.184C297.111 133.309 292.349 137.254 285.174 139.018C292.349 147.894 297.111 156.562 299.523 165.074C301.935 173.586 303.08 183.137 303.08 193.725V234.366C303.08 242.93 304.346 249.885 306.939 255.231C309.652 260.681 314.897 265.301 322.554 269.09L328.945 272.256V308.589L323.82 306.046C313.088 300.699 304.045 294.99 296.689 288.917C289.515 282.896 283.727 276.46 279.266 269.557C274.985 262.758 271.91 255.439 270.041 247.55C268.172 239.92 267.207 231.667 267.207 222.947V176.804C267.207 168.24 265.519 160.455 262.083 153.5C258.646 146.493 253.099 141.094 245.443 137.305L245.503 101.232Z"
            fill="url(#paint1_linear)"
            class="home__landing__animation__brackets"
          />
          <path
            opacity="0.4"
            d="M415.824 250.456C408.167 246.615 402.62 246.512 399.183 250.145C395.747 253.726 394.059 259.799 394.059 268.363V314.506C394.059 323.278 393.094 330.544 391.225 336.306C389.356 342.275 386.161 346.531 381.759 349.022C377.479 351.565 371.691 352.24 364.335 351.046C357.161 349.904 348.178 346.686 337.446 341.34L332.321 338.797V302.464L338.712 305.63C346.369 309.471 351.494 309.938 354.086 307.136C356.799 304.437 358.186 298.779 358.186 290.215V249.574C358.186 238.986 359.392 230.629 361.803 224.452C364.215 218.276 368.978 214.383 376.152 212.618C368.978 203.743 364.215 195.075 361.803 186.562C359.392 178.05 358.246 168.5 358.246 157.911V117.271C358.246 108.706 356.859 101.751 354.146 96.3013C351.614 90.9552 346.489 86.3876 338.772 82.5467L332.382 79.3806V43.0477L337.506 45.591C348.238 50.9371 357.221 56.5947 364.396 62.6156C371.751 68.6883 377.539 75.1763 381.82 81.9758C386.281 88.879 389.416 96.2494 391.285 104.087C393.154 111.717 394.119 119.97 394.119 128.689V174.832C394.119 183.396 395.807 191.182 399.244 198.137C402.68 205.144 408.227 210.542 415.884 214.331L415.824 250.456Z"
            fill="url(#paint2_linear)"
            class="home__landing__animation__brackets"
          />
          <path
            opacity="0.4"
            d="M221.387 116.803C229.044 120.644 234.59 120.748 238.027 117.115C241.463 113.533 243.152 107.461 243.152 98.8965V52.7538C243.152 43.982 244.116 36.7155 245.985 30.9541C247.854 24.9851 250.929 20.6771 255.21 18.1338C259.671 15.6424 265.459 14.9677 272.634 16.1095C279.989 17.3033 289.033 20.5733 299.764 25.9194L304.889 28.4627V64.7955L298.498 61.6294C290.841 57.7885 285.596 57.2695 282.883 59.9685C280.351 62.7713 279.024 68.4288 279.024 76.993V117.634C279.024 128.222 277.819 136.579 275.407 142.755C272.995 148.88 268.232 152.825 261.058 154.59C268.232 163.465 272.995 172.133 275.407 180.645C277.819 189.158 278.964 198.708 278.964 209.296V249.937C278.964 258.501 280.23 265.457 282.823 270.803C285.536 276.253 290.781 280.872 298.438 284.661L304.829 287.827V324.16L299.704 321.617C288.972 316.271 279.929 310.561 272.573 304.488C265.399 298.468 259.611 292.031 255.149 285.128C250.869 278.329 247.794 271.01 245.925 263.121C244.056 255.491 243.091 247.238 243.091 238.518V192.376C243.091 183.812 241.403 176.026 237.967 169.071C234.53 162.064 228.983 156.666 221.326 152.877L221.387 116.803Z"
            fill="url(#paint3_linear)"
            class="home__landing__animation__brackets"
          />
          <path
            opacity="0.15"
            d="M87.5418 6.35156L190.578 57.5809L190.518 270.024L87.4815 218.795L87.5418 6.35156Z"
            fill="url(#paint4_linear)"
            class="home__landing__animation__top-page"
          />
          <path
            d="M68.1886 38.9992L150.123 79.7439V99.3117L68.1886 58.567V38.9992Z"
            fill="#3DA9FC"
            class="home__landing__animation__top-page__bar"
          />
          <path
            opacity="0.15"
            d="M100.263 123.914L179.003 163.05V193.466L100.263 154.33V123.914Z"
            fill="white"
            class="home__landing__animation__top-page"
          />
          <path
            opacity="0.15"
            d="M100.203 87.1143L179.063 126.302V133.361L100.203 94.2251V87.1143Z"
            fill="white"
            class="home__landing__animation__top-page"
          />
          <path
            opacity="0.15"
            d="M100.203 100.921L168.391 134.814V141.873L100.203 107.98V100.921Z"
            fill="white"
            class="home__landing__animation__top-page"
          />
          <path
            opacity="0.2"
            d="M87.5419 6.35156L190.578 57.5809V86.0762L87.5419 34.8469V6.35156Z"
            fill="url(#paint5_linear)"
            class="home__landing__animation__top-page"
          />
          <path
            opacity="0.2"
            d="M113.286 33.5493C113.286 37.8573 110.332 39.8816 106.714 38.1168C103.097 36.3002 100.203 31.3693 100.203 27.0613C100.203 22.7532 103.157 20.729 106.775 22.4937C110.332 24.3104 113.286 29.2413 113.286 33.5493Z"
            fill="white"
            class="home__landing__animation__top-page"
          />
          <path
            opacity="0.15"
            d="M214.152 203.327L317.188 254.557L317.128 467L214.092 415.771L214.152 203.327Z"
            fill="url(#paint6_linear)"
            class="home__landing__animation__bottom-page"
          />
          <path
            d="M253.401 265.145L335.336 305.838V325.354L253.341 284.661L253.401 265.145Z"
            fill="#084778"
            class="home__landing__animation__bottom-page__bar"
          />
          <path
            opacity="0.15"
            d="M226.873 285.336L305.673 324.523V354.887L226.873 315.7V285.336Z"
            fill="white"
            class="home__landing__animation__bottom-page"
          />
          <path
            opacity="0.15"
            d="M226.753 328.728L305.612 367.915V374.974L226.753 335.838V328.728Z"
            fill="white"
            class="home__landing__animation__bottom-page"
          />
          <path
            opacity="0.15"
            d="M226.753 341.496L294.941 375.389V382.448L226.753 348.555V341.496Z"
            fill="white"
            class="home__landing__animation__bottom-page"
          />
          <path
            opacity="0.2"
            d="M214.152 203.327L317.188 254.557V283.052L214.152 231.823V203.327Z"
            fill="url(#paint7_linear)"
            class="home__landing__animation__bottom-page"
          />
          <path
            opacity="0.2"
            d="M239.896 230.577C239.896 234.885 236.942 236.909 233.324 235.145C229.707 233.328 226.813 228.397 226.813 224.089C226.813 219.781 229.767 217.757 233.385 219.521C236.942 221.286 239.896 226.269 239.896 230.577Z"
            fill="white"
            class="home__landing__animation__bottom-page"
          />
          <path
            opacity="0.3"
            d="M196.306 232.757L16.9417 143.638L17.002 224.141L180.57 305.423L196.426 325.613L196.306 232.757Z"
            fill="url(#paint8_linear)"
            class="home__landing__animation__comment"
          />
          <path
            opacity="0.15"
            d="M150.184 229.435L110.874 209.919V216.978L150.184 236.494V229.435Z"
            fill="white"
            class="home__landing__animation__comment"
          />
          <path
            opacity="0.15"
            d="M150.184 243.605L52.8749 195.23V202.289L150.244 250.664L150.184 243.605Z"
            fill="white"
            class="home__landing__animation__comment"
          />
          <path
            opacity="0.15"
            d="M150.244 257.775L32.7379 199.383V206.442L150.244 264.834V257.775Z"
            fill="white"
            class="home__landing__animation__comment"
          />
          <path
            d="M159.89 241.633C159.89 248.276 164.473 255.906 170.08 258.709C175.687 261.512 180.269 258.398 180.269 251.754C180.269 245.11 175.687 237.48 170.08 234.677C164.412 231.875 159.89 234.989 159.89 241.633Z"
            fill="#084778"
            class="home__landing__animation__comment"
          />
          <path
            opacity="0.15"
            d="M34.6671 87.1143L10.9126 75.2801V68.3769L34.6671 80.211C36.5964 81.1972 39.43 83.1177 41.8417 86.1281C44.4341 89.3461 46.3032 93.3946 46.3032 97.8065C46.3032 102.685 44.8562 105.436 42.1431 106.267C39.5506 106.994 36.5361 105.748 34.6671 104.814L24.9 99.9346L24.8397 99.8827C23.9957 99.4674 22.6693 99.0522 21.6443 99.3117C20.8003 99.5193 19.7753 100.298 19.7753 102.997C19.7753 105.696 20.74 107.357 21.5841 108.343C22.609 109.589 23.9354 110.471 24.7795 110.834L24.9 110.886L54.8041 125.731V132.634L25.0809 117.841C23.031 116.907 20.0768 114.987 17.5446 111.924C14.7712 108.551 12.8419 104.294 12.8419 99.5193C12.8419 94.7961 14.7712 92.3566 17.4843 91.6818C20.0165 91.059 22.9707 91.9932 25.0206 93.0313L34.7274 97.8584C36.1141 98.5331 37.1993 98.8446 37.8625 98.637C38.4051 98.4812 39.3697 97.8065 39.3697 94.3289C39.3697 92.0451 38.5257 90.5918 37.6816 89.5538C36.717 88.4119 35.4509 87.4776 34.6671 87.1143Z"
            fill="white"
            class="home__landing__animation__trace"
          />
          <path
            d="M17.9666 76.0068C17.9666 81.9238 13.9271 84.6748 8.98328 82.2353C4.03946 79.7958 0 72.9963 0 67.0793C0 61.1622 4.03946 58.4113 8.98328 60.8508C13.9271 63.3422 17.9666 70.1416 17.9666 76.0068Z"
            fill="#3DA9FC"
            class="home__landing__animation__trace"
          />
          <path
            d="M65.596 133.101C65.596 139.018 61.5566 141.769 56.6128 139.33C51.6689 136.89 47.6295 130.091 47.6295 124.174C47.6295 118.257 51.6689 115.506 56.6128 117.945C61.5566 120.437 65.596 127.236 65.596 133.101Z"
            fill="#3DA9FC"
            class="home__landing__animation__trace"
          />
          <path
            opacity="0.2"
            d="M129.685 313.572C133.302 315.388 136.196 319.696 136.196 323.33V339.16L148.375 345.181C151.992 346.998 154.886 351.306 154.886 354.939C154.886 358.521 151.932 359.974 148.375 358.209L136.196 352.188V368.019C136.196 371.6 133.242 373.054 129.685 371.289C126.068 369.472 123.174 365.164 123.174 361.531V345.7L110.995 339.679C107.378 337.863 104.484 333.555 104.484 329.921C104.484 326.34 107.438 324.887 110.995 326.651L123.174 332.672V316.842C123.174 313.208 126.068 311.755 129.685 313.572Z"
            fill="url(#paint9_linear)"
            class="home__landing__animation__plus"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="477.871"
              y1="37.9707"
              x2="360.049"
              y2="275.169"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear"
              x1="406.374"
              y1="1.49689"
              x2="288.552"
              y2="238.695"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint2_linear"
              x1="453.755"
              y1="53.5419"
              x2="335.932"
              y2="290.74"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint3_linear"
              x1="382.257"
              y1="17.068"
              x2="264.435"
              y2="254.266"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="192.448"
              y1="58.4909"
              x2="114.447"
              y2="215.463"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="122.894"
              y1="6.78533"
              x2="146.821"
              y2="85.5887"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear"
              x1="319.053"
              y1="255.48"
              x2="241.053"
              y2="412.451"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint7_linear"
              x1="249.5"
              y1="203.774"
              x2="273.426"
              y2="282.577"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint8_linear"
              x1="157.197"
              y1="200.541"
              x2="75.4153"
              y2="274.92"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
            <linearGradient
              id="paint9_linear"
              x1="142.261"
              y1="333.795"
              x2="114.415"
              y2="359.305"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </section>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="home__wave"
      >
        <path
          fill="#00e1bfcc"
          fill-opacity="1"
          d="M0,256L80,224C160,192,320,128,480,122.7C640,117,800,171,960,192C1120,213,1280,203,1360,197.3L1440,192L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        ></path>
      </svg>
      <section class="home__about-us">
        <SectionTitle text="About Us" />
        <div class="home__about-us__container">
          <p class="home__about-us__container__text">
            Association for Computing Machinery (ACM) is the biggest computing
            organization at University of California, Merced. We build a
            community of students, developers, designers, and professionals. We
            host many events ranging from Coffee and Code, Koding Kata, and LAN
            Parties to SIG events including introduction to UI/UX,
            Cybersecurity, IOT, Artificial Intelligence, and Software
            Engineering.
            <br />
            <br />
            We aim to provide a strong sense of community to all engineering
            students with a particular focus on students studying computer
            science. We also host activities such as tech talks, capture the
            flag, movie nights, game nights, and Friday socials. Join our
            organization and get involved in our general meetings!
          </p>
          <div class="home__about-us__container__image">
            <div class="home__about-us__container__image__front">
              <img src={acmLanParty} alt="ACM LAN Party" />
            </div>
            <div class="home__about-us__container__image__behind"></div>
          </div>
        </div>
      </section>
      <section class="home__goals">
        <SectionTitle text="Goals" />
        <div class="home__goals__grid">
          <div class="home__goals__grid__cell">
            <img src={projectManagement} alt="Technical Excellence Icon" />
            <div class="home__goals__grid__cell__content">
              <h4 class="home__goals__grid__cell__content__heading">
                Technical Excellence
              </h4>
              <p class="home__goals__grid__cell__content__text">
                Preparing the club and its members for work in the industry, at
                the highest quality of efficiency and scalability.
              </p>
            </div>
          </div>
          <div class="home__goals__grid__cell">
            <img
              src={educationalTransperencyIcon}
              alt="Educational Transparency Icon"
            />
            <div class="home__goals__grid__cell__content">
              <h4 class="home__goals__grid__cell__content__heading">
                Educational Transparency
              </h4>
              <p class="home__goals__grid__cell__content__text">
                Allowing ease of access for all academic topics related to
                computer science and in our course materials.
              </p>
            </div>
          </div>
          <div class="home__goals__grid__cell">
            <img src={community} alt="Community Icon" />
            <div class="home__goals__grid__cell__content">
              <h4 class="home__goals__grid__cell__content__heading">
                Community
              </h4>
              <p class="home__goals__grid__cell__content__text">
                Providing a welcoming environment for computer scientists from
                all areas of technical knowledge and tying that back to a sense
                of campus culture.
              </p>
            </div>
          </div>
          <div class="home__goals__grid__cell">
            <img src={socialResponsibiliy} alt="Social Responsibility Icon" />
            <div class="home__goals__grid__cell__content">
              <h4 class="home__goals__grid__cell__content__heading">
                Social Responsibility
              </h4>
              <p class="home__goals__grid__cell__content__text">
                Ensuring that our members are involved in social and corporate
                environments that uphold high standards of ethical and moral
                responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="home__sigs">
        <SectionTitle text="Special Interest Groups" />
        <div class="home__sigs__container">
          <div class="home__sigs__container__sig">
            <img src={acmLogo} alt="ACM" />
            <p>
              <br></br> ACM’s Special Interest Groups (SIGs) represent the major
              areas of the dynamic computing field. <br></br>We are invested in
              advancing the skills of our members, keeping them abreast of
              emerging trends. <br></br>
            </p>
          </div>
          <div class="home__sigs__container__sig">
            <img src={sweLogo} alt="Software Engineering SIG" />
            <p>
              <br></br>The ACM Special Interest Group on Software Engineering
              provides a forum for computing professionals from industry,
              community, and academia to examine principles, practices, and new
              research results in software engineering.<br></br>
            </p>
          </div>
          <div class="home__sigs__container__sig">
            <img src={aiLogo} alt="Artificial Intelligence SIG" />
            <p>
              <br></br>Lorem urna in ac cras sollicitudin integer. Feidn ekd
              ekdno if ejornk kejei ineput. Lorem urna in ac cras foene
              sollicitudin integer.<br></br>
            </p>
          </div>
          <div class="home__sigs__container__sig">
            <img src={cyberLogo} alt="Cyber Security SIG" />
            <p>
              <br></br>Lorem urna in ac cras sollicitudin integer. Feidn ekd
              ekdno if ejornk kejei ineput. Lorem urna in ac cras foene
              sollicitudin integer.<br></br>
            </p>
          </div>
          <div class="home__sigs__container__sig">
            <img src={designLogo} alt="Design SIG" />
            <p>
              <br></br>The ACM Special Interest Group on Design is all about
              design with technology. <br></br>It is committed to advancing the
              skills and knowledge of UI/UX, front-end, design trends, and any
              creative design. <br></br>
            </p>
          </div>
          <div class="home__sigs__container__sig">
            <img src={iotLogo} alt="Internet of Things SIG" />
            <p>
              <br></br>Lorem urna in ac cras sollicitudin integer. Feidn ekd
              ekdno if ejornk kejei ineput. Lorem urna in ac cras foene
              sollicitudin integer.<br></br>
            </p>
          </div>
        </div>
      </section>
      {/* <Leadership /> */}
    </main>
  );
};

export default Home;
