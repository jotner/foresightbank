<template>
  <div class="login">
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
</template>
