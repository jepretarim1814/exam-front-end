<template>
    <div class="col-md-12">
        <div class="card card-container">
            <img
                    id="profile-img"
                    src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                    class="profile-img-card"
            />
            <form name="form" @submit.prevent="handleRegister">
                <div v-if="!successful">
                    <div class="form-group">
                        <label for="username">Username</label>
                        <input
                                v-model="user.username"
                                type="text"
                                class="form-control"
                                name="username"
                        />
                        <div
                                v-if="submitted && typeof message.error.username !== 'undefined'"
                                class="alert-danger"
                        >{{message.error.username[0]}}</div>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input
                                v-model="user.password"
                                type="password"
                                class="form-control"
                                name="password"
                        />
                        <div
                                v-if="submitted && typeof message.error.password !== 'undefined'"
                                class="alert-danger"
                        >{{ message.error.password[0] }}</div>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary btn-block">Sign Up</button>
                    </div>
                </div>
            </form>

            <div
                    v-if="message && successful"
                    class="alert alert-success"
            >{{message}}</div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { mapGetters, mapActions } from "vuex";
    import User from "../models/user";
    export default {
        name: "Register",
        data() {
            return {
                user: new User('', ''),
                submitted: false,
                successful: false,
                message: '',
                captcha: null
            };
        },
        computed: {
            ...mapGetters("auth", [
                'checkIfLoggedIn'
            ]),
            loggedIn() {
                return this.checkIfLoggedIn;
            },
        },
        mounted() {
            if (this.loggedIn) {
                this.$router.push('/profile');
            }
            this.generateCaptcha();
        },
        methods: {
            ...mapActions("auth", [
                'register'
            ]),
            handleRegister() {
                this.message = '';
                this.submitted = true;

                this.register(this.user).then(
                    data => {
                        const _this = this;
                        this.message = data.message;
                        this.successful = true;
                        setTimeout(function () {
                            _this.resetForm();
                        },3000);
                    },
                    error => {
                        this.message =
                            (error.response && error.response.data) ||
                            error.message;
                        this.successful = false;
                    }
                );
            },
            resetForm() {
                this.submitted = false;
                this.successful = false;
                this.message = '';
                this.user = new User('', '');
            },
            generateCaptcha() {
                const res = axios.get('/api/token/generate_captcha');
                this.captcha = res.data;
            }
        }
    }
</script>

<style scoped>
    label {
        display: block;
        margin-top: 10px;
    }

    .card-container.card {
        max-width: 350px !important;
        padding: 40px 40px;
    }

    .card {
        background-color: #f7f7f7;
        padding: 20px 25px 30px;
        margin: 0 auto 25px;
        margin-top: 50px;
        -moz-border-radius: 2px;
        -webkit-border-radius: 2px;
        border-radius: 2px;
        -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }

    .profile-img-card {
        width: 96px;
        height: 96px;
        margin: 0 auto 10px;
        display: block;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
        border-radius: 50%;
    }
</style>