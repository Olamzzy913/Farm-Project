<template>
  <main class="main">
    <!-- login -->
    <section class="section py-[4rem] md:py-[12rem]">
      <!-- To login -->
      <div class="login flex-col max-w-full w-full items-center justify-center flex">
        <h1 class="text-[2rem] md:text-6xl font-normal text-center">Login</h1>
        <div class="w-[32rem] md:w-[45rem] mt-8">
          <vee-form :validation-schema="schema" @submit="handleLogin">
            <div class="mb-8">
              <label for="userName" class="text-[1.6rem]">Username</label>
              <vee-field
                type="username"
                name="username"
                v-model="userData.username"
                class="w-full outline-none font-normal border text-[2rem] border-b p-4 rounded-[1rem]"
              />
              <ErrorMessage class="text-red-600" name="username" />
            </div>

            <div class="mb-8">
              <label for="password" class="text-[1.6rem]">Password</label>
              <vee-field name="password" :bails="false" v-slot="{ field, errors }">
                <div class="relative">
                  <input
                    v-if="showPassword"
                    type="text"
                    class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                    v-model="userData.password"
                    v-bind="field"
                  />
                  <input
                    v-else
                    type="password"
                    class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
                    v-model="userData.password"
                    v-bind="field"
                  />
                  <span class="button absolute right-8 top-[2.2rem]" @click="toggleShow">
                    <span class="icon is-small is-right">
                      <i
                        class="fas text-[1.5rem]"
                        :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                      ></i>
                    </span>
                  </span>
                </div>
                <div class="text-red-600" v-for="error in errors" :key="error">
                  {{ error }}
                </div>

                <router-link to="/forget" class="float-right mb-10 text-[1.6rem] underline"
                  >forget password</router-link
                >
              </vee-field>
            </div>

            <div class="flex flex-col w-full justify-center items-center">
              <button
                type="submit"
                class="w-full px-12 py-6 text-[1.5rem] font-normal bg-primary text-white rounded-lg"
              >
                <div class="loader mx-auto" v-if="isLoading"></div>
                <span v-else>Login</span>
              </button>
              <router-link to="/register" class="block mb-10 text-[1.6rem]"
                >Don't have an account? <span class="text-light">sign up</span></router-link
              >
            </div>
          </vee-form>
        </div>
      </div>
      <!-- forget password -->
      <div class="verifyEmail hidden flex-col max-w-full w-full items-center justify-center">
        <h1 class="text-6xl font-normal text-center">Verify Email</h1>
        <p class="mt-4 text-[1.2rem]">Enter the code sent to your mail below.</p>
        <div class="w-[45rem] mt-[4.7rem]">
          <form action="">
            <div class="grid grid-cols-6 gap-8 mb-8">
              <input
                type="text"
                name="otp"
                maxlength="1"
                class="w-full outline-none border text-[2.2rem] border-b p-4 pl-8 rounded-[1rem]"
              />
              <input
                type="text"
                name="otp"
                maxlength="1"
                class="w-full outline-none border text-[2.2rem] border-b p-4 pl-8 rounded-[1rem]"
              />
              <input
                type="text"
                name="otp"
                maxlength="1"
                class="w-full outline-none border text-[2.2rem] border-b p-4 pl-8 rounded-[1rem]"
              />
              <input
                type="text"
                name="otp"
                maxlength="1"
                class="w-full outline-none border text-[2.2rem] border-b p-4 pl-8 rounded-[1rem]"
              />
              <input
                type="text"
                name="otp"
                maxlength="1"
                class="w-full outline-none border text-[2.2rem] border-b p-4 pl-8 rounded-[1rem]"
              />
              <input
                type="text"
                name="otp"
                maxlength="1"
                class="w-full outline-none border text-[2.2rem] border-b p-4 pl-8 rounded-[1rem]"
              />
            </div>
            <div class="block text-center align-middle mb-[4.2rem]">
              <p class="text-[1.2rem] font-normal">
                Code expires in <span class="text-red-600">00:50</span>
              </p>
              <p class="w-1/2 m-auto text-base font-normal mb-10 text-red-600">
                Your code is incorrect, kindly check again or click resend code for new code.
              </p>
            </div>
            <div class="flex flex-col w-full justify-center items-center">
              <a
                href="user.html"
                id="btn"
                class="w-full cursor-pointer px-[2.5rem] py-[1.6rem] text-center text-white text-[2rem] bg-primary rounded-2xl"
                >Login</a
              >
              <a href="create.html" class="block mb-10 text-[1.6rem]"
                >Don't have an account? <span class="text-light">sign up</span></a
              >
            </div>
          </form>
        </div>
      </div>
      <!-- create new password -->
      <div class="hidden flex-col max-w-full w-full items-center justify-center">
        <h1 class="text-6xl font-normal text-center">Create New Password</h1>
        <div class="w-[45rem] mt-8">
          <form action="">
            <label for="New Password" class="text-[1.6rem]">New Password</label>
            <input
              type="password"
              name="New Password"
              class="w-full outline-none border text-[2.2rem] border-b mb-8 p-4 rounded-[1rem]"
            />
            <div class="mb-[1.6rem]">
              <label for="Confirm Password" class="text-[1.6rem]">Confirm Password</label>
              <input
                type="password"
                name="Confirm Password"
                class="w-full outline-none border text-[2.2rem] border-b p-4 rounded-[1rem]"
              />
            </div>
            <div class="flex flex-col w-full justify-center items-center">
              <input
                type="button"
                value="Login"
                class="w-full px-12 py-4 text-[1.5rem] font-normal bg-primary text-white rounded-lg"
              />
              <!-- <a href="" class="block mb-10 text-[1.6rem]">Don't have an account? <span class="text-light">sign up</span></a> -->
            </div>
          </form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export default {
  name: 'LoginView',
  data() {
    return {
      schema: {
        username: 'required|min:3|max:100|',
        password: 'required|min:9|max:100|excluded:password'
      }
    }
  },
  setup() {
    const userData = ref({
      username: '',
      password: ''
    })
    const errorMessage = ref('')
    const router = useRouter()
    const isLoading = ref(false)
    const toast = useToast()
    const data = {
      username: userData.value.username,
      password: userData.value.password
    }

    const showPassword = ref(false)
    const password = ref(null)

    function buttonLabel() {
      return this.showPassword ? 'Hide' : 'Show'
    }

    function toggleShow() {
      this.showPassword = !this.showPassword
    }

    function handleLogin(data) {
      logUserIn(data)
    }

    async function logUserIn(data) {
      console.log(data)
      try {
        isLoading.value = true
        const response = await axios.post('https://api.farmci.com/accounts/login', data)
        // Assuming the API returns a token upon successful login
        if (response.data.success) {
          toast.success(`Login Successful`)
          toast.success(`Welcome to FarmCI`)
        }
        const token = response.data.token
        console.log(token)
        // Store the token in localStorage or Vuex store for authentication
        localStorage.setItem('token', token)
        // Redirect to dashboard or any other page upon successful login
        router.push('/user')
      } catch (error) {
        // Handle login error
        const issue = error.response.data.responseMessage
        console.log(issue)
        toast.error(issue)
      } finally {
        isLoading.value = false
      }
    }

    return {
      userData,
      buttonLabel,
      password,
      showPassword,
      toggleShow,
      data,
      isLoading,
      errorMessage,
      logUserIn,
      handleLogin
    }
  }
}
</script>

<style scoped>
.loader {
  width: 32px;
  padding: 4px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: white;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}
</style>
