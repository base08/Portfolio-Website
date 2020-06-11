import React from "react";
import logo from "./logo.svg";
import mugshot from "./mugshot.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-contents">
          <img className="Logo" src={logo} alt="UGO" />
        </div>
      </header>
      <main>
        <article>
          <img className="Mugshot" src={mugshot} alt="Hugo's friendly face" />
          <h1 className="Greeting">Hello, my name is Hugo Miranda!</h1>
          <h4 className="Description">
            I’m a UX/UI Designer that also likes to play with code and
            computers.
          </h4>
        </article>
        <h2 className="Title-nav">Selection of Works</h2>
        <nav>
          <div className="Project Project-1">
            <div className="Project-caption">
              <h5 className="Category">3D Render</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-2">
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-3">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-4">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-5">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-6">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-7">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-1">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-2">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-3">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-4">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-5">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-6">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
          <div className="Project Project-7">
            {" "}
            <div className="Project-caption">
              <h5 className="Category">Category</h5>
              <h4 className="Title-project">Title of the Project</h4>
            </div>
          </div>
        </nav>
      </main>

      <footer>
        <div className="Footer-wrapper">
          <div className="Socials">
            <a href="https://twitter.com/hsaraiva08">
              <svg
                width="25"
                height="25"
                viewBox="0 0 30 30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="dark-mode"
                  d="M28.125 7.50008L25.3125 7.96883L27.1875 5.62508L23.9062 6.56258C19.6875 1.87508 13.125 7.03133 15 11.2501C7.5 11.2501 3.75 5.62508 3.75 5.62508C3.75 5.62508 0.9375 9.84383 5.625 13.1251L2.8125 12.1876C2.8125 15.0001 4.6875 16.8751 7.96875 17.8126H4.6875C6.5625 21.5626 9.84375 21.5626 9.84375 21.5626C9.84375 21.5626 7.03125 23.9063 1.875 23.9063C17.3438 31.4063 26.7188 17.3438 25.3125 9.84383L28.125 7.50008Z"
                />
              </svg>
            </a>
            <a href="https://dribbble.com/hsaraiva08">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="dark-mode"
                  d="M12.5 0.390625C5.82285 0.390625 0.390625 5.82285 0.390625 12.5C0.390625 19.1771 5.82285 24.6094 12.5 24.6094C19.1771 24.6094 24.6094 19.1771 24.6094 12.5C24.6094 5.82285 19.1771 0.390625 12.5 0.390625ZM20.5063 5.9749C21.9469 7.73496 22.8193 9.97671 22.842 12.418C22.501 12.3459 19.0814 11.6523 15.6398 12.0851C15.3589 11.3995 15.0938 10.7964 14.7308 10.0532C18.555 8.4918 20.2883 6.26987 20.5063 5.9749ZM19.3565 4.77881C19.1705 5.0438 17.6135 7.13652 13.9355 8.51509C12.2406 5.40103 10.3621 2.84282 10.0762 2.46001C13.3562 1.66934 16.8128 2.52202 19.3565 4.77881ZM8.10259 3.15527C8.37529 3.52925 10.2236 6.09062 11.9374 9.13716C7.09917 10.422 2.83779 10.4035 2.3752 10.3974C3.0459 7.18774 5.20889 4.52017 8.10259 3.15527ZM2.15674 12.5158C2.15674 12.41 2.15884 12.3047 2.16201 12.1997C2.61455 12.209 7.62686 12.2736 12.7922 10.7277C13.0883 11.3072 13.3711 11.8955 13.6308 12.4831C9.89058 13.5365 6.49238 16.5615 4.81577 19.4316C3.16377 17.5979 2.15674 15.1724 2.15674 12.5158ZM6.15122 20.6756C7.23164 18.4669 10.1638 15.6159 14.3338 14.1934C15.7859 17.9669 16.3865 21.1295 16.5403 22.037C13.2145 23.4537 9.21533 23.065 6.15122 20.6756ZM18.2792 21.0901C18.1731 20.4609 17.6226 17.433 16.2698 13.7154C19.511 13.1966 22.3586 14.0459 22.7125 14.1576C22.2515 17.0355 20.5996 19.521 18.2792 21.0901Z"
                />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/hugosaraivamiranda/">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="dark-mode social-logo"
                  d="M20.3125 0H1.55762C0.698242 0 0 0.708008 0 1.57715V20.2979C0 21.167 0.698242 21.875 1.55762 21.875H20.3125C21.1719 21.875 21.875 21.167 21.875 20.2979V1.57715C21.875 0.708008 21.1719 0 20.3125 0ZM6.61133 18.75H3.36914V8.31055H6.61621V18.75H6.61133ZM4.99023 6.88477C3.9502 6.88477 3.11035 6.04004 3.11035 5.00488C3.11035 3.96973 3.9502 3.125 4.99023 3.125C6.02539 3.125 6.87012 3.96973 6.87012 5.00488C6.87012 6.04492 6.03027 6.88477 4.99023 6.88477ZM18.7646 18.75H15.5225V13.6719C15.5225 12.4609 15.498 10.9033 13.8379 10.9033C12.1484 10.9033 11.8896 12.2217 11.8896 13.584V18.75H8.64746V8.31055H11.7578V9.73633H11.8018C12.2363 8.91602 13.2959 8.05176 14.873 8.05176C18.1543 8.05176 18.7646 10.2148 18.7646 13.0273V18.75Z"
                />
              </svg>
            </a>
            <a href="https://www.facebook.com/hsaraiva08">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="dark-mode"
                  d="M24.2188 12.1094C24.2188 5.41992 18.7988 0 12.1094 0C5.41992 0 0 5.41992 0 12.1094C0 18.1533 4.42822 23.1631 10.2173 24.0723V15.6099H7.14111V12.1094H10.2173V9.44141C10.2173 6.40674 12.0239 4.73047 14.791 4.73047C16.1162 4.73047 17.502 4.9668 17.502 4.9668V7.94531H15.9746C14.4707 7.94531 14.0015 8.87891 14.0015 9.83643V12.1094H17.3599L16.8228 15.6099H14.0015V24.0723C19.7905 23.1631 24.2188 18.1533 24.2188 12.1094Z"
                />
              </svg>
            </a>
            <a href="https://github.com/base08">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="dark-mode"
                  d="M8.10121 19.4043C8.10121 19.502 7.98891 19.5801 7.84731 19.5801C7.68617 19.5947 7.57387 19.5166 7.57387 19.4043C7.57387 19.3066 7.68617 19.2285 7.82777 19.2285C7.97426 19.2139 8.10121 19.292 8.10121 19.4043ZM6.58266 19.1846C6.54848 19.2822 6.64613 19.3945 6.79262 19.4238C6.91957 19.4727 7.06606 19.4238 7.09535 19.3262C7.12465 19.2285 7.03188 19.1162 6.88539 19.0723C6.75844 19.0381 6.61684 19.0869 6.58266 19.1846ZM8.74086 19.1016C8.59926 19.1357 8.5016 19.2285 8.51625 19.3408C8.5309 19.4385 8.65785 19.502 8.80434 19.4678C8.94594 19.4336 9.04359 19.3408 9.02895 19.2432C9.0143 19.1504 8.88246 19.0869 8.74086 19.1016ZM11.9538 0.390625C5.18129 0.390625 0.00062561 5.53223 0.00062561 12.3047C0.00062561 17.7197 3.40883 22.3535 8.27699 23.9844C8.90199 24.0967 9.12172 23.7109 9.12172 23.3936C9.12172 23.0908 9.10707 21.4209 9.10707 20.3955C9.10707 20.3955 5.6891 21.1279 4.97133 18.9404C4.97133 18.9404 4.41469 17.5195 3.61391 17.1533C3.61391 17.1533 2.49574 16.3867 3.69203 16.4014C3.69203 16.4014 4.90785 16.499 5.5768 17.6611C6.64613 19.5459 8.43813 19.0039 9.13637 18.6816C9.24867 17.9004 9.56606 17.3584 9.91762 17.0361C7.18813 16.7334 4.43422 16.3379 4.43422 11.6406C4.43422 10.2979 4.80531 9.62402 5.58656 8.76465C5.45961 8.44727 5.04457 7.13867 5.71352 5.44922C6.73402 5.13184 9.08266 6.76758 9.08266 6.76758C10.0592 6.49414 11.109 6.35254 12.1491 6.35254C13.1891 6.35254 14.2389 6.49414 15.2155 6.76758C15.2155 6.76758 17.5641 5.12695 18.5846 5.44922C19.2536 7.14355 18.8385 8.44727 18.7116 8.76465C19.4928 9.62891 19.9713 10.3027 19.9713 11.6406C19.9713 16.3525 17.0954 16.7285 14.3659 17.0361C14.8151 17.4219 15.1959 18.1543 15.1959 19.3018C15.1959 20.9473 15.1813 22.9834 15.1813 23.3838C15.1813 23.7012 15.4059 24.0869 16.026 23.9746C20.9088 22.3535 24.2194 17.7197 24.2194 12.3047C24.2194 5.53223 18.7262 0.390625 11.9538 0.390625ZM4.74672 17.2314C4.68324 17.2803 4.69789 17.3926 4.7809 17.4854C4.85902 17.5635 4.97133 17.5977 5.03481 17.5342C5.09828 17.4854 5.08363 17.373 5.00063 17.2803C4.9225 17.2021 4.8102 17.168 4.74672 17.2314ZM4.21938 16.8359C4.1852 16.8994 4.23402 16.9775 4.33168 17.0264C4.40981 17.0752 4.50746 17.0605 4.54164 16.9922C4.57582 16.9287 4.52699 16.8506 4.42934 16.8018C4.33168 16.7725 4.25356 16.7871 4.21938 16.8359ZM5.80141 18.5742C5.72328 18.6377 5.75258 18.7842 5.86488 18.877C5.97719 18.9893 6.11879 19.0039 6.18227 18.9258C6.24574 18.8623 6.21645 18.7158 6.11879 18.623C6.01137 18.5107 5.86488 18.4961 5.80141 18.5742ZM5.24477 17.8564C5.16664 17.9053 5.16664 18.0322 5.24477 18.1445C5.32289 18.2568 5.45473 18.3057 5.5182 18.2568C5.59633 18.1934 5.59633 18.0664 5.5182 17.9541C5.44984 17.8418 5.32289 17.793 5.24477 17.8564Z"
                />
              </svg>
            </a>
          </div>
          <p className="Copyright">
            © Copyright 2020 UGO. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
