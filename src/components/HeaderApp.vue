<template>
  <div :class="{ sticky: isScrolled }" class="bg-white w-full" v-if="nav">
    <div class="flex justify-between items-center px-8">
      <router-link to="/"
        ><img src="/assets/header_logo.png" alt="Farm CI logo" class="w-[12rem]"
      /></router-link>
      <i @click="toggleNav" class="fas fa-x text-[1.4rem] cursor-pointer"></i>
    </div>
    <ul class="items-center just flex flex-col">
      <li class="">
        <router-link to="/" class="nav_linkW nav-link" @click="toggleNav">Home</router-link>
      </li>
      <li class="mt-16">
        <router-link
          :to="{ path: '/', hash: '#section2' }"
          @click="toggleNav"
          class="nav_linkW nav-link"
          >About</router-link
        >
      </li>
      <li class="mt-16">
        <router-link
          :to="{ path: '/', hash: '#section1' }"
          @click="toggleNav"
          class="nav_linkW nav-link"
          >Service</router-link
        >
      </li>
      <li class="mt-16"><a href="" class="nav_linkW nav-link">Pay CI</a></li>
      <li class="mt-16">
        <router-link to="/status" @click="toggleNav" class="nav_linkW nav-link"
          >Check Status</router-link
        >
      </li>
      <li class="mt-16">
        <router-link to="/login" @click="toggleNav" class="nav_linkW nav-link">Login</router-link>
      </li>
      <li class="my-16">
        <router-link to="/register" @click="toggleNav" class="nav_linkW nav-link"
          >Create Account</router-link
        >
      </li>
    </ul>
  </div>

  <div :class="{ sticky: isScrolled }" v-if="!nav">
    <nav class="nav_items nav">
      <router-link to="/"
        ><img src="/assets/header_logo.png" alt="Farm CI logo" class="w-[11rem]"
      /></router-link>
      <ul class="hidden items-center lg:flex">
        <li class="mr-16">
          <router-link to="/" class="nav_linkW" :class="{ 'text-white': isHomePage }"
            >Home</router-link
          >
        </li>
        <li class="mr-16">
          <router-link
            :to="{ path: '/', hash: '#section2' }"
            class="nav_linkW"
            :class="{ 'text-white': isHomePage }"
            >About</router-link
          >
        </li>
        <li class="mr-16">
          <router-link
            :to="{ path: '/', hash: '#section1' }"
            class="nav_linkW"
            :class="{ 'text-white': isHomePage }"
            >Service</router-link
          >
        </li>
        <li class="mr-16">
          <a href="" class="nav_linkW" :class="{ 'text-white': isHomePage }">Pay CI</a>
        </li>
        <li class="mr-16">
          <router-link to="/status" class="nav_linkW" :class="{ 'text-white': isHomePage }"
            >Check Status</router-link
          >
        </li>
        <li class="mr-16">
          <router-link to="/login" class="nav_linkW" :class="{ 'text-white': isHomePage }"
            >Login</router-link
          >
        </li>
        <li class="mr-16">
          <router-link to="/register" class="nav_link--btn">Create Account</router-link>
        </li>
      </ul>

      <div id="menu" class="block lg:hidden">
        <i id="navMenu" class="fas fa-bars text-[2rem] cursor-pointer" @click="toggleNav"></i>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { sharedNavState, sharedMainContentState } from '@/stores/counter.js'

// navigation toggle
const toggleNav = () => {
  sharedNavState.value = !sharedNavState.value
  sharedMainContentState.value = !sharedMainContentState.value
  window.scrollTo(0, 0)
  if (sharedNavState.value) {
    //when menu is clicked remove sticky
    isScrolled.value = false
  }
  return toggleNav || isScrolled
}
const nav = sharedNavState
nav

// navigation link text color
const route = useRoute()
const isHomePage = computed(() => route.path === '/')

isHomePage

//Sticky Nav
const isScrolled = ref(false)

onMounted(() => {
  const heroSection = document.querySelector('#hero-section')
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isScrolled.value = !entry.isIntersecting
      })
    },
    { threshold: 0.5 }
  )

  if (heroSection) {
    observer.observe(heroSection)
  }
})

isScrolled
</script>
