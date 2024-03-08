// userView.js
import axios from 'axios'
// import { useToast } from 'vue-toastification'

export default function getCurrentUser() {
  // Creating reactive variables to store state
  // const toast = useToast()

  async function getCurrentUserData(data) {
    console.log(`about to run the function`, data)
    try {
      // Make POST request to get user data
      const response = await axios.post('https://api.farmci.com/db/users/farm/get/profile', data)
      console.log(`function running`)
      console.log(response)
      // If request is successful, update success state to true
      // let generatedUsername = response
      // if (response.data.success) {
      //   toast.success(`Registration Successful!! here is your username ${generatedUsername}`)
      //   toast.success(
      //     `Your Username and Password has been sent to your Email. Ensure you keep it safe`
      //   )
      // }
    } catch (err) {
      // If there's an error, update the error state
      err.value = 'An error occurred during registration.'
      console.log(err)
    }
  }
  // Expose the necessary variables and function to the component
  return {
    getCurrentUserData
  }
}
