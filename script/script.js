* {
  box-sizing: border-box;
}

body {
  color: #222;
  background-color: #fff;
  font-family: "Montserrat", sans-serif;
  -webkit-transition: background-color 0.5s, color 0.5s;
  transition: background-color 0.5s, color 0.5s;
  margin: 0;
  padding: 0;
}

.body--night-mode {
  background-color: #222;
  color: #d9d9d9;
}

.header {
  text-align: right;
  width: 80vw;
  max-width: 500px;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  padding: 1rem;
  margin: auto;
}

.header__title {
  display: block;
}

.tumbler__wrapper {
  margin-left: auto;
  width: 50px;
  height: 30px;
  background-color: black;
  border: #1d92b2;
  border-radius: 30px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
          align-items: center;
  padding: 0 6px;
  cursor: pointer;
  display: flex;
  position: relative;
}
.tumbler__wrapper svg {
  width: 15px;
  height: 15px;
}

.tumbler {
  position: absolute;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #fff;
  -webkit-transition: background-color 0.5s, -webkit-transform 0.5s;
  transition: background-color 0.5s, -webkit-transform 0.5s;
  transition: transform 0.5s, background-color 0.5s;
  transition: transform 0.5s, background-color 0.5s, -webkit-transform 0.5s;
  will-change: transform;
}

.tumbler--night-mode {
  -webkit-transform: translateX(calc(100% - 2px));
          transform: translateX(calc(100% - 2px));
}

.credits {
  display: none;
}

.sun-svg,
.moon-svg {
  display: none;
}

.main {
  width: 80vw;
  max-width: 500px;
  padding: 0 1rem;
  margin: auto;
}

.post {
  border-bottom: 1px dashed #222;
  margin-bottom: 1rem;
  -webkit-transition: border-bottom 0.5s;
  transition: border-bottom 0.5s;
}

.post--night-mode {
  border-bottom: 1px dashed #d9d9d9;
}

.post__title {
  font-weight: 700;
}
.post__title:first-child {
  margin-top: 0;
}

.footer {
  width: 80vw;
  max-width: 500px;
  padding: 1rem;
  margin: 0 auto 1.5rem;
}

.description {
  display: -webkit-box;
  display: flex;
}

.description__text {
  margin-right: 0.25rem;
}

.loveSvg svg {
  display: block;
  height: 1rem;
  max-width: 1rem;
}
