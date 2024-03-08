<template>
  <main class="main">
    <!-- Check Status -->
    <section class="section py-[4rem] md:py-[12rem]">
      <div class="section">
        <!-- search field -->
        <div class="flex flex-col max-w-full w-full">
          <h1 class="text-[2.4rem] md:text-[3.4rem]">FarmCI Status</h1>
          <div class="flex items-center border rounded-[1rem] p-4">
            <i class="bx bx-search text-[3rem] pr-4 text-[#3d3d3d]"></i>
            <input
              type="search"
              name="search"
              placeholder="Search for Farmers’ crop name, state or phone number"
              class="w-full outline-none text-[1.9rem]"
              v-model="searchQuery"
              @input="search"
            />
          </div>
        </div>

        <!-- make a search request -->
        <div v-if="waiting" class="px-[1rem] md:px-[3rem] py-[1.8rem] text-center">
          <img
            src="/assets/waiting_for_search.svg"
            class="w-[18rem] h-[18rem] md:w-[28rem] md:h-[28rem] lg:w-[32rem] lg:h-[32rem] mx-auto"
          />
          <p class="inline-block text-[1.5rem] md:text-[2rem] text-[#141b14] font-light">
            Waiting for your search input.....
          </p>
        </div>

        <!-- lasy load -->
        <div class="shadow-md px-[1rem] md:px-[6rem] py-[1.8rem] rounded" v-if="isLoading">
          <div class="flex justify-between items-center">
            <div class="flex justify-between items-center gap-8">
              <div class="loader rounded-full" style="height: 40px; width: 40px"></div>
              <div>
                <div class="loader" style="width: 80px"></div>
                <div class="loader mt-6" style="width: 100px"></div>
                <div class="loader mt-6" style="width: 100px"></div>
              </div>
            </div>
            <div class="loader" style="width: 60px"></div>
          </div>
          <div class="flex justify-between items-center mt-6">
            <div class="flex justify-between items-center gap-8">
              <div class="loader rounded-full" style="height: 40px; width: 40px"></div>
              <div>
                <div class="loader" style="width: 80px"></div>
                <div class="loader mt-6" style="width: 100px"></div>
                <div class="loader mt-6" style="width: 100px"></div>
              </div>
            </div>
            <div class="loader" style="width: 60px"></div>
          </div>
          <div class="flex justify-between items-center mt-6">
            <div class="flex justify-between items-center gap-8">
              <div class="loader rounded-full" style="height: 40px; width: 40px"></div>
              <div>
                <div class="loader" style="width: 80px"></div>
                <div class="loader mt-6" style="width: 100px"></div>
                <div class="loader mt-6" style="width: 100px"></div>
              </div>
            </div>
            <div class="loader" style="width: 60px"></div>
          </div>
          <div class="flex justify-between items-center mt-6">
            <div class="flex justify-between items-center gap-8">
              <div class="loader rounded-full" style="height: 40px; width: 40px"></div>
              <div>
                <div class="loader" style="width: 80px"></div>
                <div class="loader mt-6" style="width: 100px"></div>
                <div class="loader mt-6" style="width: 100px"></div>
              </div>
            </div>
            <div class="loader" style="width: 60px"></div>
          </div>
        </div>

        <!-- Result not found  -->
        <div v-if="noResult" class="px-[1rem] md:px-[3rem] py-[1.8rem] text-center">
          <img
            src="/assets/not_found.svg"
            class="w-[18rem] h-[18rem] md:w-[24rem] md:h-[24rem] lg:w-[32rem] lg:h-[32rem] mx-auto"
          />
          <p class="inline-block text-[1.5rem] md:text-[2rem] text-[#141b14] font-light">
            Sorry!! the inputted words doesn't exist
          </p>
        </div>

        <!-- Display Result  -->
        <h3 v-if="gotResult" class="font-medium text-[1.4rem] md:text-[2rem] mt-6 text-[#1c201c60]">
          Search results on your request
        </h3>
        <div class="shadow-md px-[1rem] md:px-[3rem] py-[1.8rem] rounded mt-4" v-if="gotResult">
          <ul>
            <li v-for="(item, index) in paginatedData" :key="index">
              <div class="mt-6">
                <li class="flex justify-between">
                  <div class="flex">
                    <img
                      src="/assets/uifaces-cartoon-image.jpg"
                      alt=""
                      class="w-[40px] h-[40px] rounded-full"
                    />

                    <div class="ml-10 md:ml-[4.5rem]">
                      <h1 class="text-[1.2rem] md:text-[1.5rem] font-normal">
                        {{ item.first_name }} {{ item.last_name }}
                      </h1>
                      <p class="text-[1rem] md:text-[1.3rem] font-light">
                        {{ item.state }} State. Nigeria.
                      </p>
                      <p class="text-[1rem] md:text-[1.3rem] font-light">{{ item.crop_type }}</p>
                      <p class="text-[1rem] md:text-[1.3rem] font-normal">{{ item.phone }}</p>
                    </div>
                  </div>
                  <p class="text-[1rem] md:text-[1.3rem] font-light text-secondary mt-6 pr-6">
                    Active
                  </p>
                </li>
              </div>
            </li>
          </ul>

          <div class="flex justify-between w-full mt-24" v-show="totalPages > 1">
            <button
              v-if="currentPage > 1"
              @click="prevPage"
              :disabled="currentPage === 1"
              class="px-12 py-4 text-[1.5rem] font-normal bg-primary text-white rounded-lg"
            >
              Previous
            </button>
            <button
              v-if="currentPage === 1"
              :disabled="currentPage === totalPages"
              class="px-12 py-4 text-[1.5rem] font-normal text-white rounded-lg pointer-events-none"
            >
              Next
            </button>
            <button
              v-if="currentPage < totalPages"
              @click="nextPage"
              :disabled="currentPage === totalPages"
              class="px-12 py-4 text-[1.5rem] font-normal bg-primary text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import axios from 'axios'

const searchQuery = ref('')
const searchResults = ref([])
const perPage = 5
const currentPage = ref(1)
const waiting = ref(true)
const isLoading = ref(false)
const gotResult = ref(false)
const noResult = ref(false)

const fetchResults = async () => {
  try {
    gotResult.value = false
    noResult.value = false
    waiting.value = false
    isLoading.value = true
    currentPage.value = 1
    const response = await axios.get(`https://api.farmci.com/db/search/${searchQuery.value}`)
    searchResults.value = response.data.responseBody.results
    gotResult.value = true
    noResult.value = false
    console.log(searchResults.value, currentPage)
  } catch (error) {
    noResult.value = true
    gotResult.value = false
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * perPage
  const end = start + perPage
  return searchResults.value.slice(start, end)
})

const search = async () => {
  await fetchResults()
}

const totalPages = computed(() => Math.ceil(searchResults.value.length / perPage))

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
  }
}
</script>

<!-- <style scoped>
.loader {
  width: fit-content;
  font-weight: normal;
  font-family: monospace;
  color: #141b14;
  font-size: 1.5rem;
  clip-path: inset(0 3ch 0 0);
  animation: l4 1s steps(4) infinite;
}
.loader:before {
  content: 'Loading...';
}
@keyframes l4 {
  to {
    clip-path: inset(0 -1ch 0 0);
  }
}
</style> -->

<style scoped>
.loader {
  width: 120px;
  height: 10px;
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
