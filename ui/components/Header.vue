<template>
    <div>
        <div class="header">
            <div class="header__top">
                <div class="header__side">
                    <div class="header__name">
                        <h1>IvcStandard</h1>
                    </div>
                </div>
                <div class="header__side menu" :class="{ sidenavopen }">
                    <div class="header__menuitem">
                        <p>Accounts</p>
                    </div>
                    <div class="header__menuitem">
                        <p>Savings</p>
                    </div>
                    <div class="header__menuitem">
                        <p>Investments</p>
                    </div>
                    <div class="header__menuitem">
                        <p>Borrowing</p>
                    </div>
                    <div class="header__menuitem">
                        <p>Features</p>
                    </div>
                    <div class="header__menuitem">
                        <p>Help</p>
                    </div>
                    <div class="header__menuitem last-child">
                        <button class="button">Sign up</button>
                    </div>
                    

                    <div class="header__mobilemenu" @click="togglesidenav">
                        <div class="header__mobilemenu--logo">
                            <h1>IvcStandard</h1>
                        </div>
                        <div>
                            <img src="@/assets/imgs/close.svg" />
                        </div>
                    </div>
                </div>

                <div class="header__mobilemenubtn" @click="togglesidenav">
                    <p>Menu</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sidenavopen: false
        }
    },
    methods: {
        togglesidenav() {
            this.sidenavopen ? this.sidenavopen = false : this.sidenavopen = true;
        }
    }
}
</script>