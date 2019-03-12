
const About = Vue.component('about', {
  template: '<h1>About</h1>'
})

const Contact = Vue.component('contact', {
  template: '<h1>Contact</h1>'
})

const Account = Vue.component('account', {
  template: `<div>

  <div class="section product-header">
      <div class="container">
        <div class="columns">
          <div class="column">
            <span class="title is-3">Account</span>
            <span class="title is-3 has-text-muted">|</span>
            <span class="title is-4 has-text-muted">André</span>
          </div>
        </div>
      </div>
    </div>

        <div class="columns">
        <div class="column is-3">
          <div class="panel">
            <p class="panel-heading">
              Privatkonto - 4569kr
            </p>
          </div>
        </div>
        <div class="column is-3">
          <div class="panel">
            <p class="panel-heading">
              Fondkonto - 68321kr
            </p>
          </div>
        </div>
        </div>

        <div class="columns is-multiline">
        <div class="column">
          <div class="box">
            <div class="heading">Top Seller Total</div>
            <div class="title">56,950</div>
            <div class="level">
              <div class="level-item">
                <div class="">
                  <div class="heading">Sales $</div>
                  <div class="title is-5">250,000</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Overall $</div>
                  <div class="title is-5">750,000</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Sales %</div>
                  <div class="title is-5">25%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <div class="heading">Revenue / Expenses</div>
            <div class="title">55% / 45%</div>
            <div class="level">
              <div class="level-item">
                <div class="">
                  <div class="heading">Rev Prod $</div>
                  <div class="title is-5">30%</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Rev Serv $</div>
                  <div class="title is-5">25%</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Exp %</div>
                  <div class="title is-5">45%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <div class="heading">Feedback Activity</div>
            <div class="title">78% &uarr;</div>
            <div class="level">
              <div class="level-item">
                <div class="">
                  <div class="heading">Positive</div>
                  <div class="title is-5">1560</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Negative</div>
                  <div class="title is-5">368</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Pos/Neg %</div>
                  <div class="title is-5">77% / 23%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="box">
            <div class="heading">Orders / Returns</div>
            <div class="title">75% / 25%</div>
            <div class="level">
              <div class="level-item">
                <div class="">
                  <div class="heading">Orders $</div>
                  <div class="title is-5">425,000</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Returns $</div>
                  <div class="title is-5">106,250</div>
                </div>
              </div>
              <div class="level-item">
                <div class="">
                  <div class="heading">Success %</div>
                  <div class="title is-5">+ 28,5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


        <footer class="footer">
          <div class="container">
            <div class="columns">
              <div class="column is-3 is-offset-2">
                <h2><strong>Support</strong></h2>
                <ul>
                  <li><a href="#">Q & A</a></li>
                  <li><a href="#">Safety</a></li>
                  <li><a href="#">How do I get started?</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div class="column is-3">
                <h2><strong>Social Media</strong></h2>
                <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">YouTube</a></li>
                  <li><a href="#">Twitter</a></li>

                </ul>
              </div>
              <div class="column is-4">
                <h2><strong>About</strong></h2>
                <ul>
                  <li><a href="#">Who are we?</a></li>
                  <li><a href="#">Services for bigger businesses</a></li>
                  <li><a href="#">Employees</a></li>
                  <li><a href="#">History</a></li>
                </ul>
              </div>
            </div>
          </div>

        </footer>

        </div>`
})

const Login = Vue.component('login', {
  template: `<div class="login">
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-dark">Foresight Bank</h3>
          <div class="box">
            <figure class="avatar">
              <img src="media/user.svg">
            </figure>
            <form>
              <div class="field">
                <div class="control">
                  <input class="input is-large" type="email" placeholder="Your Email" autofocus="">
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <input class="input is-large" type="password" placeholder="Your Password">
                </div>
              </div>
              <button class="button is-dark is-block loginblock is-large is-fullwidth">Login</button>
            </form>
          </div>
          <p class="has-text loginoptions">
            <a href="../">Sign Up</a> &nbsp;·&nbsp;
            <a href="../">Forgot Password</a> &nbsp;·&nbsp;
            <a href="../">Need Help?</a>
          </p>
        </div>
      </div>
    </div>
  </section>
  </div>
  `
})

const Home = Vue.component('home', {
  template: `<div>

        <div class="hero-body herobg">
          <div class="container has-text-centered">
            <h1 class="title-index">
              A personal bank for everyday people
            </h1>
            <h2 class="subtitle-index">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </h2>
          </div>
        </div>

        <div class="box cta">
          <p class="has-text-centered">
            Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>

        <section class="container">
          <div class="columns features">
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-content">
                  <div class="content">
                    <h4>Tristique senectus et netus et. </h4>
                    <p>Purus semper eget duis at tellus at urna condimentum mattis.
                      Non blandit massa enim nec. Integer enim neque volutpat ac
                      tincidunt vitae semper quis. Accumsan tortor posuere ac ut
                      consequat semper viverra nam.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-content">
                  <div class="content">
                    <h4>Tempor orci dapibus ultrices in.</h4>
                    <p>Ut venenatis tellus in metus vulputate. Amet consectetur
                      adipiscing elit pellentesque. Sed arcu non odio euismod
                      lacinia at quis risus. Faucibus turpis in eu mi bibendum
                      neque egestas cmonsu songue. Phasellus vestibulum lorem
                      sed risus.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-4">
              <div class="card is-shady">
                <div class="card-content">
                  <div class="content">
                    <h4> Leo integer malesuada nunc vel risus. </h4>
                    <p>Imperdiet dui accumsan sit amet nulla facilisi morbi. Fusce
                      ut placerat orci nulla pellentesque dignissim enim. Libero id
                      faucibus nisl tincidunt eget nullam. Commodo viverra maecenas
                      accumsan lacus vel facilisis.</p>
                    <p><a href="#">Learn more</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="intro column is-8 is-offset-2">
            <h2 class="title">Perfect for developers or designers!</h2><br>
            <p class="subtitle">Vel fringilla est ullamcorper eget nulla facilisi.
              Nulla facilisi nullam vehicula ipsum a. Neque egestas congue quisque
              egestas diam in arcu cursus.</p>
          </div>
          <div class="sandbox">
            <div class="tile is-ancestor">
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">Hello World</p>
                  <p class="subtitle">What is up?</p>
                </article>
              </div>
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">Foo</p>
                  <p class="subtitle">Bar</p>
                </article>
              </div>
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">Third column</p>
                  <p class="subtitle">With some content</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                      facilisis.</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="tile is-ancestor">
              <div class="tile is-vertical is-8">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification is-white">
                      <p class="title">Vertical tiles</p>
                      <p class="subtitle">Top box</p>
                    </article>
                    <article class="tile is-child notification is-white">
                      <p class="title">Vertical tiles</p>
                      <p class="subtitle">Bottom box</p>
                    </article>
                  </div>
                  <div class="tile is-parent">
                    <article class="tile is-child notification is-white">
                      <p class="title">Middle box</p>
                      <p class="subtitle">With an image</p>
                      <figure class="image is-4by3">
                        <img src="https://picsum.photos/640/480/?random" alt="Description">
                      </figure>
                    </article>
                  </div>
                </div>
                <div class="tile is-parent is-shady">
                  <article class="tile is-child notification is-white">
                    <p class="title">Wide column</p>
                    <p class="subtitle">Aligned with the right column</p>
                    <div class="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin ornare magna eros, eu pellentesque tortor vestibulum
                        ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                        facilisis.</p>
                    </div>
                  </article>
                </div>
              </div>
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <div class="content">
                    <p class="title">Tall column</p>
                    <p class="subtitle">With even more content</p>
                    <div class="content">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Etiam semper diam at erat pulvinar, at pulvinar felis
                        blandit. Vestibulum volutpat tellus diam, consequat gravida
                        libero rhoncus ut. Morbi maximus, leo sit amet vehicula
                        eleifend, nunc dui porta orci, quis semper odio felis ut
                        quam.</p>
                      <p>Suspendisse varius ligula in molestie lacinia. Maecenas
                        varius eget ligula a sagittis. Pellentesque interdum, nisl
                        nec interdum maximus, augue diam porttitor lorem, et
                        sollicitudin felis neque sit amet erat. Maecenas imperdiet
                        felis nisi, fringilla luctus felis hendrerit sit amet.
                        Aenean vitae gravida diam, finibus dignissim turpis. Sed
                        eget varius ligula, at volutpat tortor.</p>
                      <p>Integer sollicitudin, tortor a mattis commodo, velit urna
                        rhoncus erat, vitae congue lectus dolor consequat libero.
                        Donec leo ligula, maximus et pellentesque sed, gravida a
                        metus. Cras ullamcorper a nunc ac porta. Aliquam
                        ut aliquet lacus, quis faucibus libero. Quisque non semper
                        leo.</p>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">Side column</p>
                  <p class="subtitle">With some content</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                      facilisis.</p>
                  </div>
                </article>
              </div>
              <div class="tile is-parent is-8 is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">Main column</p>
                  <p class="subtitle">With some content</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                      facilisis.</p>
                  </div>
                </article>
              </div>
            </div>
            <div class="tile is-ancestor">
              <div class="tile is-parent is-8 is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">Murphy's law</p>
                  <p class="subtitle">Anything that can go wrong will go wrong</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                      facilisis.</p>
                  </div>
                </article>
              </div>
              <div class="tile is-parent is-shady">
                <article class="tile is-child notification is-white">
                  <p class="title">Main column</p>
                  <p class="subtitle">With some content</p>
                  <div class="content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Proin ornare magna eros, eu pellentesque tortor vestibulum
                      ut. Maecenas non massa sem. Etiam finibus odio quis feugiat
                      facilisis.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <footer class="footer">
          <div class="container">
            <div class="columns">
              <div class="column is-3 is-offset-2">
                <h2><strong>Support</strong></h2>
                <ul>
                  <li><a href="#">Q & A</a></li>
                  <li><a href="#">Safety</a></li>
                  <li><a href="#">How do I get started?</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div class="column is-3">
                <h2><strong>Social Media</strong></h2>
                <ul>
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">YouTube</a></li>
                  <li><a href="#">Twitter</a></li>

                </ul>
              </div>
              <div class="column is-4">
                <h2><strong>About</strong></h2>
                <ul>
                  <li><a href="#">Who are we?</a></li>
                  <li><a href="#">Services for bigger businesses</a></li>
                  <li><a href="#">Employees</a></li>
                  <li><a href="#">History</a></li>
                </ul>
              </div>
            </div>
          </div>

        </footer>

        </div>`
})


const router = new VueRouter({
  routes: [{
      component: About,
      path: '/about'
    }, {
      component: Contact,
      path: '/contact'
    }, {
      component: Home,
      path: '/'
    },
    {
      component: Login,
      path: '/login'
    },
    {
      component: Account,
      path: '/account'
    }
  ]
})

new Vue({
  el: '#app',
  router: router
})
