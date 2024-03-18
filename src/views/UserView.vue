<template>
  <main class="main">
    <!-- Check Status -->
    <section class="section py-[4rem] md:py-[12rem] relative">
      <div class="section">
        <div class="flex flex-col max-w-full w-full relative">
          <!-- lasy load -->
          <div class="shadow-md px-[1rem] md:px-[6rem] py-[1.8rem] rounded" v-if="!gotData">
            <div class="flex justify-start items-center gap-8">
              <div class="loader rounded-full" style="height: 120px; border-radius: 100%"></div>
              <div>
                <div class="loader"></div>
                <div class="loader mt-6" style="width: 140px"></div>
              </div>
            </div>
            <div class="flex justify-between mt-8">
              <div class="loader" style="width: 80px"></div>
              <div class="loader" style="width: 80px"></div>
            </div>
            <div class="flex justify-between mt-8">
              <div class="loader" style="width: 80px"></div>
              <div class="loader" style="width: 80px"></div>
            </div>
            <div class="flex justify-between mt-8">
              <div class="loader" style="width: 80px"></div>
              <div class="loader" style="width: 80px"></div>
            </div>
            <div class="flex justify-between mt-8">
              <div class="loader" style="width: 80px"></div>
              <div class="loader" style="width: 80px"></div>
            </div>
            <div class="flex justify-between mt-8">
              <div class="loader" style="width: 80px"></div>
              <div class="loader" style="width: 80px"></div>
            </div>
            <div class="flex justify-between mt-8">
              <div class="" style="width: 80px"></div>
              <div class="loader rounded-md" style="width: 80px; height: 40px"></div>
            </div>
          </div>

          <div class="shadow-md px-[1rem] md:px-[6rem] py-[1.8rem] rounded" v-else>
            <div class="flex justify-start items-center gap-8">
              <div>
                <!-- Profile picture, clickable to trigger file input -->
                <label for="profile-pic-input">
                  <img
                    :src="profilePicture || defaultPicture"
                    alt="Profile Picture"
                    class="w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] cursor-pointer rounded-full mb-10"
                  />
                </label>

                <!-- Hidden input for file upload -->
                <input
                  id="profile-pic-input"
                  type="file"
                  style="display: none"
                  @change="handleImageUpload"
                />
              </div>

              <div class="flex flex-col">
                <h1 class="text-[1.9rem] md:text-[2.5rem] font-medium text-[#1a2219d7]">
                  {{ item.first_name }} {{ item.last_name }}
                </h1>
                <!-- <p class="text-[1.6rem] font-normal text-[#1a2219d7]">lovevueui@gmail.com</p> -->
                <p class="text-[1.2rem] md:text-[1.6rem] font-normal text-[#1a2219d7]">
                  <i class="bx bx-map"></i>{{ item.state }}, Nigeria
                </p>
              </div>
            </div>

            <!-- Profile details -->
            <div>
              <div class="flex justify-between my-4">
                <h3 class="text-[1.4rem] md:text-[1.9rem] font-bold text-[#1a2219d7]">
                  user Details
                </h3>
                <p class="text-[1.4rem] md:text-[1.9rem] font-normal text-[#1a2219d7]">
                  <i @click="edit = true" class="fa-solid fa-pen-to-square cursor-pointer"></i>
                </p>
              </div>

              <div class="flex justify-between mt-8">
                <p class="text-[1.4rem] md:text-[1.9rem] font-medium text-[#1a2219d7]">Username</p>
                <h3 class="text-[1.4rem] md:text-[1.9rem] font-normal text-[#1a2219d7]">
                  {{ item.first_name }}
                </h3>
              </div>

              <div class="flex justify-between mt-8">
                <p class="text-[1.4rem] md:text-[1.9rem] font-medium text-[#1a2219d7]">Email</p>
                <h3 class="text-[1.4rem] md:text-[1.9rem] font-normal text-[#1a2219d7]">
                  {{ item.email }}
                </h3>
              </div>

              <div class="flex justify-between mt-8">
                <p class="text-[1.4rem] md:text-[1.9rem] font-medium text-[#1a2219d7]">Phone</p>
                <h3 class="text-[1.4rem] md:text-[1.9rem] font-normal text-[#1a2219d7]">
                  {{ item.phone }}
                </h3>
              </div>

              <div class="flex justify-between mt-8">
                <p class="text-[1.4rem] md:text-[1.9rem] font-medium text-[#1a2219d7]">Gender</p>
                <h3 class="text-[1.4rem] md:text-[1.9rem] font-normal text-[#1a2219d7]">
                  {{ item.gender }}
                </h3>
              </div>

              <div class="flex justify-between mt-8">
                <p class="text-[1.4rem] md:text-[1.9rem] font-medium text-[#1a2219d7]">
                  Local Government Area
                </p>
                <h3 class="text-[1.4rem] md:text-[1.9rem] font-normal text-[#1a2219d7]">
                  {{ item.lga }}
                </h3>
              </div>
              <div class="flex justify-between mt-10">
                <h3 class="text-[1.4rem] md:text-[1.9rem] font-normal text-[#1a2219d7]">
                  <!-- {{ item.lga }} -->
                </h3>
                <button
                  @click="logUserOut"
                  class="text-[1.4rem] md:text-[1.9rem] bg-red-600 px-4 py-2 rounded-md font-medium text-white"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div v-if="edit" class="blur-background">
      <!-- The form popup -->
      <div
        class="bg-white p-6 md:p-12 lg:p-20 rounded-md w-[32rem] smi:w-[38rem] md:w-[50rem] lg:w-[70rem]"
      >
        <div class="flex justify-between">
          <h2 class="text-[1.5rem] font-medium">Edit User Profile</h2>
          <i @click="closeForm" class="fa-solid fa-close text-[1.8rem] cursor-pointer"></i>
        </div>
        <form @submit.prevent="updateUser">
          <div class="flex-col max-w-full w-full items-center justify-center flex mt-8">
            <div class="max-w-full w-full gap-4 grid grid-cols-2 mt-8">
              <div class="">
                <label for="first_name" class="text-[1rem]">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                  v-model="item.first_name"
                />
              </div>

              <div class="">
                <label for="last_name" class="text-[1rem]">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                  v-model="item.last_name"
                />
              </div>
            </div>

            <div class="max-w-full w-full gap-4 grid grid-cols-2 mt-8">
              <div class="">
                <label for="email" class="text-[1rem]">Email</label>
                <input
                  type="text"
                  name="email"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                  v-model="item.email"
                />
              </div>

              <div class="">
                <label for="phone" class="text-[1rem]">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                  v-model="item.phone"
                />
              </div>
            </div>

            <div class="max-w-full w-full gap-4 grid grid-cols-2 mt-8">
              <div class="">
                <label for="crop_type" class="text-[1rem]">Crop Type</label>
                <input
                  type="text"
                  name="crop_type"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                  v-model="item.crop_type"
                />
              </div>

              <div class="">
                <label for="state" class="text-[1rem]">State</label>
                <select
                  name="state"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                  v-model="item.state"
                >
                  <option value="Abia ">Abia</option>
                  <option value="Adamawa">Adamawa</option>
                  <option value="Akwa Ibom">Akwa Ibom</option>
                  <option value="Anambra">Anambra</option>
                  <option value="Bauchi">Bauchi</option>
                  <option value="Bayelsa">Bayelsa</option>
                  <option value="Benue">Benue</option>
                  <option value="Borno">Borno</option>
                  <option value="Cross River">Cross River</option>
                  <option value="Delta">Delta</option>
                  <option value="Ebonyi">Ebonyi</option>
                  <option value="Edo">Edo</option>
                  <option value="Ekiti">Ekiti</option>
                  <option value="Enugu">Enugu</option>
                  <option value="Gombe">Gombe</option>
                  <option value="Imo">Imo</option>
                  <option value="Jigawa">Jigawa</option>
                  <option value="Kaduna">Kaduna</option>
                  <option value="Kano">Kano</option>
                  <option value="Katsina">Katsina</option>
                  <option value="Kebbi">Kebbi</option>
                  <option value="Kogi">Kogi</option>
                  <option value="Kwara">Kwara</option>
                  <option value="Lagos">Lagos</option>
                  <option value="Nasarawa">Nasarawa</option>
                  <option value="Niger">Niger</option>
                  <option value="Ogun">Ogun</option>
                  <option value="Ondo">Ondo</option>
                  <option value="Osun">Osun</option>
                  <option value="Oyo">Oyo</option>
                  <option value="Plateau">Plateau</option>
                  <option value="Rivers">Rivers</option>
                  <option value="Sokoto">Sokoto</option>
                  <option value="Taraba">Taraba</option>
                  <option value="Yobe">Yobe</option>
                  <option value="Zamfara">Zamfara</option>
                </select>
              </div>
            </div>

            <div class="max-w-full w-full gap-4 grid grid-cols-2 mt-8">
              <div class="">
                <label for="gender" class="text-[1rem]">Gender</label>
                <select
                  name="gender"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                  v-model="item.gender"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div class="">
                <label for="crop_type" class="text-[1rem]">Address</label>
                <input
                  type="text"
                  name="crop_type"
                  v-model="item.street_address"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                />
              </div>
            </div>

            <div class="max-w-full w-full gap-4 grid grid-cols-2 mt-8">
              <div class="">
                <label for="lga" class="text-[1rem]">Local Government Area</label>
                <input
                  type="text"
                  name="lga"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                  v-model="item.lga"
                />
              </div>

              <div class="">
                <label for="bvn" class="text-[1rem]">BVN</label>
                <input
                  type="text"
                  name="bvn"
                  class="w-full outline-none border text-[1.2rem] border-b p-2 rounded-[.5rem]"
                  v-model="item.bvn"
                />
              </div>
            </div>
            <button
              type="submit"
              class="w-full cursor-pointer mt-8 px-[1.6rem] py-[.8rem] text-center text-white text-[1.5rem] bg-primary rounded-xl"
            >
              <div class="spinner mx-auto" v-if="storing"></div>
              <span v-else>Submit</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const edit = ref(false)
    const gotData = ref(false)
    const storing = ref(false)
    const router = useRouter()
    let item = reactive({})
    const token = localStorage.getItem('token')
    const toast = useToast()
    const profilePicture = ref(null) // Store the profile picture
    const defaultPicture = 'assets/upload_profile.jpg' // Path to your default profile picture

    console.log(defaultPicture)

    const closeForm = () => {
      edit.value = false
    }

    // Function to handle image upload
    const handleImageUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        // Convert the image file to a URL
        const imageUrl = URL.createObjectURL(file)
        profilePicture.value = imageUrl
        console.log(profilePicture.value)
        updateUserPro()
        // Here you can add logic to send the image to your backend for storage
        // and update the user's profile picture
      }
    }

    const updateUserPro = async () => {
      const token = localStorage.getItem('token')
      const data = { profile_img: profilePicture.value }
      const url = 'https://api.farmci.com/db/users/farm/profile/update'
      try {
        storing.value = true
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
          },
          body: JSON.stringify(data)
        })
        console.log(response)
        if (response.ok) {
          console.log(data.value)
          toast.success(`User Profile Image has been updated`)
          edit.value = false
          console.log(response)
        }
      } catch (error) {
        console.error('Error updating user data:', error)
        console.log(error)
        edit.value = false
        storing.value = false
      }
    }

    const updateUser = async () => {
      const token = localStorage.getItem('token')
      const userData = ref({
        firstName: item.first_name,
        lastName: item.last_name,
        email: item.email,
        phone: item.phone,
        userstate: item.state,
        street_address: item.street_address,
        crop_type: item.crop_type,
        lga: item.lga,
        usercountry: item.country,
        usergender: item.gender
      })
      const url = 'https://api.farmci.com/db/users/farm/profile/update'
      try {
        storing.value = true
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token ${token}`
          },
          body: JSON.stringify(userData)
        })
        console.log(response)
        if (response.ok) {
          console.log(userData.value)
          toast.success(`User data updated`)
          edit.value = false
          console.log(response)
        }
      } catch (error) {
        console.error('Error updating user data:', error)
        console.log(error)
        edit.value = false
        storing.value = false
      }
    }

    const userDataCall = async (token) => {
      const url = 'https://api.farmci.com/db/users/farm/profile/get'
      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Token  ${token}`
          },
          body: JSON.stringify({})
        })

        if (response.ok) {
          const data = await response.json()
          console.log(data)
          profilePicture.value = data.profile_img
          const items = data.responseBody.profile
          for (const key in items) {
            item[key] = items[key]
          }

          console.log('Welcome', gotData.value)
          toast.success(`welcome ${item.first_name}`)
          console.log(items)
        } else {
          console.error('Error fetching data:', response.status)
          router.push('/login')
          toast.error('Not Authorized')
        }
      } catch (error) {
        console.error(error)
        localStorage.removeItem('token', token)
        router.push('/login')
        toast.error('Not Authorized')
      } finally {
        gotData.value = true
      }
    }

    const logUserOut = () => {
      localStorage.removeItem('token', token)
      router.push('/login')
      toast.success('Logout successful')
    }
    const userDetails = reactive({
      gender: 'female',
      crop_type: 'maize',
      street_address: '12, PO BOX, Angeles Avenue',
      lga: 'Alimosho Local Govt',
      state: 'Plateau'
    })

    console.log(userDetails)

    const testData = async () => {
      fetchData()
    }

    const fetchData = async () => {
      await userDataCall(token)
    }
    // const userApiData = items.value.first_name

    onMounted(fetchData)

    return {
      handleImageUpload,
      updateUserPro,
      gotData,
      edit,
      defaultPicture,
      profilePicture,
      updateUser,
      storing,
      closeForm,
      userDataCall,
      fetchData,
      userDetails,
      testData,
      logUserOut,
      item
    }
  }
}
</script>

<style scoped>
.loader {
  width: 120px;
  height: 15px;
  border-radius: 4px;
  background: linear-gradient(90deg, #0001 33%, #0005 50%, #0001 66%) #f2f2f2;
  background-size: 300% 100%;
  animation: l1 1s infinite linear;
}
@keyframes l1 {
  0% {
    background-position: right;
  }
}

.spinner {
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

.blur-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
  backdrop-filter: blur(10px); /* Adjust the blur amount as needed */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
