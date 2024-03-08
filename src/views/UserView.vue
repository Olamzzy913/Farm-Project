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
              <img
                src="/assets/farm_flower.png"
                alt=""
                class="w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem] rounded-full mb-10"
              />

              <div class="flex flex-col">
                >
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
                  <i class="fa-solid fa-pen-to-square cursor-pointer"></i>
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
  </main>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useToast } from 'vue-toastification'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const gotData = ref(false)
    const router = useRouter()
    let item = reactive({})
    const token = localStorage.getItem('token')
    const toast = useToast()

    const userDataCall = async (token) => {
      const url = 'https://api.farmci.com/db/users/farm/get/profile'
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
      gotData,
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
</style>
