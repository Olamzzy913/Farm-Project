<template>
  <main class="main">
    <section class="section py-[4rem] md:py-[12rem]">
      <!-- create new password -->
      <div class="flex-col max-w-full w-full items-center justify-center flex">
        <h1 class="text-[2rem] md:text-6xl font-normal text-center">Reset Password</h1>
        <div class="w-[32rem] md:w-[45rem] mt-8">
          <vee-form :validation-schema="schema" @submit="handlePassword">
            <div class="mb-8">
              <label for="email" class="text-[1.6rem]">Email</label>
              <vee-field
                type="email"
                name="email"
                v-model="userData.email"
                class="w-full outline-none font-normal border text-[2rem] border-b p-4 rounded-[1rem]"
              />
              <ErrorMessage class="text-red-600" name="email" />
            </div>
            <div class="mb-8">
              <label for="password" class="text-[1.6rem]">New Password</label>
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
              </vee-field>
            </div>
            <div class="mb-8">
              <label for="password" class="text-[1.6rem]">Confirm Password</label>
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
              </vee-field>
            </div>
            <div class="flex flex-col w-full justify-center items-center">
              <button
                type="submit"
                class="w-full cursor-pointer px-[2.5rem] py-[1.6rem] text-center text-white text-[2rem] bg-primary rounded-2xl"
              >
                <div class="loader mx-auto" v-if="isLoading"></div>
                <span v-else>Confirm</span>
              </button>
              <router-link to="/register" class="block mb-10 text-[1.6rem]"
                >Don't have an account? <span class="text-light">sign up</span></router-link
              >
            </div>
          </vee-form>
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
  name: 'ForgetPassword',
  data() {
    return {
      schema: {
        email: 'required|min:3|max:100|',
        password: 'required|min:9|max:100|excluded:password'
      }
    }
  },
  setup() {
    const showPassword = ref(false)
    const password = ref(null)

    function buttonLabel() {
      return this.showPassword ? 'Hide' : 'Show'
    }

    function toggleShow() {
      this.showPassword = !this.showPassword
    }

    const userData = ref({
      email: '',
      password: ''
    })
    const errorMessage = ref('')
    const router = useRouter()
    const isLoading = ref(false)
    const toast = useToast()

    function handlePassword() {
      const data = {
        email: userData.value.email,
        password: userData.value.password
      }
      authUser(data)
    }

    async function authUser(data) {
      console.log(data)
      try {
        isLoading.value = true
        const response = await axios.post('https://api.farmci.com/accounts/reset/password', data)
        // Assuming the API returns a token upon successful login
        if (response.data.success) {
          const msg = response.data.responseMessage
          toast.success(msg)
          console.log(response, data)
          // Redirect to dashboard or any other page upon successful login
          router.push('/verify')
        }
      } catch (error) {
        // Handle login error
        const issue = 'Valid Email and New Password is required'
        console.log(error)
        toast.error(issue)
      } finally {
        isLoading.value = false
      }
    }

    return {
      userData,
      isLoading,
      errorMessage,
      authUser,
      toggleShow,
      handlePassword,
      buttonLabel,
      showPassword,
      password
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
