<template>
  <main class="main">
    <!-- login -->
    <section class="section py-[4rem] md:py-[12rem]">
      <!-- To login -->
      <div class="login flex-col max-w-full w-full items-center justify-center flex">
        <h1 class="text-[1.7rem] md:text-[3rem] font-medium text-center">Login</h1>
        <div class="w-[24rem] md:w-[32rem] mt-8">
          <vee-form :validation-schema="schema" @submit="handleLogin">
            <div class="mb-8">
              <label for="userName" class="text-[1.3rem]">Username</label>
              <vee-field
                type="username"
                name="username"
                v-model="userData.username"
                class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
              />
              <ErrorMessage class="text-red-600 text-[0.85rem]" name="username" />
            </div>

            <div class="mb-8">
              <label for="password" class="text-[1.3rem]">Password</label>
              <vee-field name="password" :bails="false" v-slot="{ field, errors }">
                <div class="relative">
                  <input
                    v-if="showPassword"
                    type="text"
                    class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
                    v-model="userData.password"
                    v-bind="field"
                  />
                  <input
                    v-else
                    type="password"
                    class="w-full outline-none font-light border text-[1.5rem] border-b p-3 rounded-[1rem]"
                    v-model="userData.password"
                    v-bind="field"
                  />
                  <span class="button absolute right-[1.8rem] top-[1.3rem]" @click="toggleShow">
                    <span class="icon is-small is-right">
                      <i
                        class="fas text-[1.2rem]"
                        :class="{ 'fa-eye-slash': showPassword, 'fa-eye': !showPassword }"
                      ></i>
                    </span>
                  </span>
                </div>
                <div class="text-red-600 text-[0.85rem]" v-for="error in errors" :key="error">
                  {{ error }}
                </div>

                <router-link to="/forget" class="float-right mb-10 text-[1.2rem] underline"
                  >Forget password</router-link
                >
              </vee-field>
            </div>

            <div class="flex flex-col w-full justify-center items-center">
              <button
                type="submit"
                class="w-full px-6 py-3 text-[1.4rem] font-light bg-primary text-white rounded-lg"
              >
                <div class="loader mx-auto" v-if="isLoading"></div>
                <span v-else>Login</span>
              </button>
              <router-link to="/register" class="block mb-10 text-[1.2rem]"
                >Don't have an account? <span class="text-light">Sign up</span></router-link
              >
            </div>
          </vee-form>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { ref, onMounted } from 'vue'
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
    onMounted(() => {
      document.title = 'FarmCI | Login'
    })
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
