<template>
<section class="container">
  <div class="columns">
    <div class="column is-third">
      <p class="title">Contact</p>
      <p>If you want to ask us something, maybe about your account, money, transfers, the company or anything else you can fill in the form on this page to send us a message.</p>
      <p><br>
        However, we have a lot of the same questions being asked continuosly which we usually have the answers to. We have created a 'Frequently Asked Questions' to answer these. You can find the list down below.
      </p><br>
      <p class="title">F.A.Q</p>
      <ul>
        <li>Why can't I log in to my account?</li>
        <p>If you want to access your account, the best solution is to click the <a>Forgot Password</a> link to reset your password.
          <li>I have registered an account but can't login!</li>
          <p>If you are sure your credentials are the same as when you created your account, try to reset your password or contact us via the form on this page.
            <li>I can't transfer money between my own accounts!</li>
            <p>Remember to click the <em>allow transfers</em> on your specific account settings.</p>
            <li>Why am I getting logged out after 10 minutes?</li>
            <p>This is a security measure so that no unauthorized person can access your account if you forgot to log out.</p>
      </ul>
    </div>
    <div class="column is-8">
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="First name">
              <span class="icon is-small is-left">
                <i class="fa fa-user"></i>
              </span>
            </p>
          </div>
          <div class="field">
            <p class="control is-expanded">
              <input class="input" type="text" placeholder="Last name">
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">E-mail</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="email" placeholder="E-mail">
              <span class="icon is-small is-left">
                <i class="fa fa-envelope"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Number</label>
        </div>
        <div class="field-body">
          <div class="field is-expanded">
            <div class="field has-addons">
              <p class="control">
                <a class="button is-static">
                  +46
                </a>
              </p>
              <p class="control is-expanded has-icons-left">
                <input class="input" type="tel" placeholder="Phone number">
                <span class="icon is-small is-left">
                  <i class="fa fa-phone"></i>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">From</label>
        </div>
        <div class="field-body">
          <div class="field is-narrow">
            <p class="control has-icons-left">
              <span class="select">
                <select>
                  <option selected>Country</option>
                  <option>Sweden</option>
                  <option>Denmark</option>
                  <option>Norway</option>
                </select>
              </span>
              <span class="icon is-small is-left">
                <i class="fa fa-globe"></i>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Message</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="Message"></textarea>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label">
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</section>
</template>

<script>

</script>

<style scoped>
ul {
  list-style-type: disc;
  margin-left: 15px;
}

ul li {
  font-weight: bold;
  margin-top: 10px;
}

.columns {
  background-color: white;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, .1), 0 0 0 1px rgba(10, 10, 10, .1);
}

.button {
  color: white;
}

.button.is-static {
  color: #4a4a4a;
}
</style>
