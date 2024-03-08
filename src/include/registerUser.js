// registerUser.js
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'

export default function useRegisterUser() {
  // Creating reactive variables to store state
  const registering = ref(false)
  const error = ref(null)
  const success = ref(false)
  const router = useRouter()
  const toast = useToast()

  async function registerUser(data) {
    try {
      // Set registering state to true to show loading spinner or similar UI
      registering.value = true
      // Make POST request to register user
      const response = await axios.post('https://api.farmci.com/db/accounts/register', data)
      // If request is successful, update success state to true
      success.value = true
      let generatedUsername = response.data.responseBody.login.username
      if (response.data.success) {
        toast.success(`Registration Successful!! here is your username ${generatedUsername}`)
        toast.success(
          `Your Username and Password has been sent to your Email. Ensure you keep it safe`
        )
        // Redirect to login page
        router.push('/login')
      }
      console.log(generatedUsername)
    } catch (err) {
      // If there's an error, update the error state
      error.value = 'An error occurred during registration an input has been used before.'
      // err.response.data.message ||
      // console.log(err.response.responseBody, err.response)
      toast.error(error.value)
    } finally {
      // Reset registering state after request is complete
      registering.value = false
    }
  }
  // Expose the necessary variables and function to the component
  return {
    registering,
    error,
    success,
    registerUser
  }
}
