<template>
  <div class="login">
    <section class="hero is-fullheight">
      <div class="hero-body">
        <div class="container has-text-centered">
          <div class="column is-4 is-offset-4">
              <img src="media/foresightloggasvart2.0.png">
            <div class="box">
              <figure class="avatar">
                <img src="media/user.svg">
              </figure>
              <form>
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="username" placeholder="Username" autofocus="">
                  </div>
                </div>
                <div class="field">
                  <div class="control">
                    <input class="input is-large" type="password" placeholder="Password">
                  </div>
                </div>
                <button class="button is-block loginblock is-large is-fullwidth">Login</button><br>
                  <button class="button is-block loginblock is-medium ">Sign Up</button>
              </form>
            </div>
            <p class="has-text loginoptions">
              <a href="../">Forgot Password</a> &nbsp;·&nbsp;
              <a href="../">Need Help?</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
