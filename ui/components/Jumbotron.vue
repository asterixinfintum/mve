<template>
  <div>
    <div class="jumbotron">
      <div class="jumbotron__left">
        <h1 class="jumbotron__left--h1 flex-column">
          <span>Banking</span>
          <span>made easy</span>
        </h1>

        <h2 class="jumbotron__left--h2 flex-column">
          <span>Spend, save and manage your money, all in one place. Open</span>
          <span>a full UK bank account from your phone, for free.</span>
        </h2>

        <div class="flex-default">
          <button class="button jumbotron-btn" @click="$router.push('/auth/signup')">
            Open a IvcStandard account
          </button>

          <button class="button transparent margin-left-thirty orange" @click="$router.push('/auth/signin')">Login</button>
        </div>
      </div>
      <div class="jumbotron__right">
        <figure>
          <img src="@/assets/imgs/Credit.jpg" />
        </figure>
      </div>
    </div>
  </div>
</template>
