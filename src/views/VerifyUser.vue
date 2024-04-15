<template>
  <main class="main">
    <section class="section py-[4rem] md:py-[12rem]">
      <!-- create new password -->
      <div class="flex-col max-w-full w-full items-center justify-center flex">
        <h1 class="text-[1.7rem] md:text-[3rem] font-medium text-center">Verify OTP</h1>
        <p class="mt-4 text-[1.2rem]">Enter the code sent to your mail below.</p>
        <div class="w-[24rem] md:w-[32rem] mt-8">
          <form @submit.prevent="handleVerify">
            <div class="grid grid-cols-6 gap-2 smi:gap-4 mb-8">
              <input
                v-for="(input, index) in inputs"
                maxlength="1"
                :key="index"
                v-model="input.value"
                class="w-full outline-none font-light border text-[1.5rem] border-b p-3 pl-[1.2rem] md:pl-[1.8rem] rounded-[1rem]"
                @input="handleInput(index)"
              />
            </div>
            <div class="block text-center align-middle mb-[4.2rem]">
              <p class="text-[1.2rem] font-normal">
                Code expires in <span class="text-red-600" id="timer_label"></span>
              </p>
              <p class="w-1/2 m-auto text-base font-normal mb-10 text-red-600">
                If the code expire you won't be able to make use of it anymore so please fill in the
                range of 2min
              </p>
            </div>
            <div class="flex flex-col w-full justify-center items-center">
              <button
                type="submit"
                class="w-full px-6 py-3 text-[1.4rem] font-light bg-primary text-white rounded-lg"
              >
                <div class="loader mx-auto" v-if="isLoading"></div>
                <span v-else>Confirm</span>
              </button>
              <router-link to="/register" class="block mb-10 text-[1.2rem]"
                >Don't have an account? <span class="text-light">Sign up</span></router-link
              >
            </div>
          </form>
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
  name: 'VerifyUser',
  data() {
    return {
      schema: {
        otp: 'required|min:1|max:1|numeric'
      }
    }
  },
  setup() {
    const inputs = ref([
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' }
    ])

    const handleInput = (index) => {
      const lastIndex = inputs.value.length - 1
      if (index < lastIndex) {
        const nextInput = document.querySelectorAll('input')[index + 1]
        nextInput.focus()
      }
    }

    onMounted(() => {
      document.title = 'FarmCI | Verification'
    })

    const errorMessage = ref('')
    const router = useRouter()
    const isLoading = ref(false)
    const toast = useToast()

    const countdown = ref(20)

    const timer = function () {
      const tick = function () {
        const min = String(Math.trunc(time / 60)).padStart(2, 0)
        const sec = String(time % 60).padStart(2, 0)
        const labelTimer = document.getElementById('timer_label')
        // In each call, print the remaining time to UI
        labelTimer.textContent = `${min}:${sec}`

        // When 0 seconds, stop timer and log out user
        if (time === 0) {
          clearInterval(timer)
          router.push('/forget')
        }

        // Decrease 1s
        time--
      }

      // Set time to 2 minutes
      let time = 120

      // Call the timer every second
      tick()
      const timer = setInterval(tick, 1000)

      return timer
    }

    function handleVerify() {
      const data = inputs.value.map((input) => input.value).join('')
      console.log('Values of all inputs:', data)
      verifyUser(+data)
    }

    const moveToNext = (event, nextInputRef) => {
      if (event.target.value && nextInputRef.value) {
        nextInputRef.value.focus()
      }
    }

    onMounted(timer)

    async function verifyUser(data) {
      if (!data) {
        return toast.error('Please Provide OTP sent to your mail')
      }

      console.log(data)
      try {
        isLoading.value = true
        const response = await axios.post(
          'https://api.farmci.com/accounts/reset/password/verify',
          data
        )
        // Assuming the API returns a token upon successful login
        if (response.data.success) {
          console.log(response, data)
          toast.success(`Password Changed Successfully`)
          // Redirect to dashboard or any other page upon successful login
          router.push('/login')
        }
      } catch (error) {
        // Handle login error
        const issue = 'OTP has expired, Please try again!'
        console.log(error)
        toast.error(issue)
        if (issue) {
          router.push('/forget')
        }
      } finally {
        isLoading.value = false
      }
    }

    return {
      inputs,
      handleInput,
      moveToNext,
      isLoading,
      timer,
      countdown,
      errorMessage,
      verifyUser,
      handleVerify
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
