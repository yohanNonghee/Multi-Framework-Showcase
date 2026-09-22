<template>
  <div class="bg-light min-vh-100 d-flex flex-column justify-content-between">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
      <div class="container">
        <a class="navbar-brand fw-bold text-white" href="#">CarLoyal <span class="badge bg-success fs-6">Vue</span></a>
        <div class="collapse navbar-collapse show">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item"><a class="nav-link active fw-bold text-white" href="#">Home</a></li>
            <li class="nav-item"><a class="nav-link text-light" href="#">About</a></li>
            <li class="nav-item"><a class="nav-link text-light" href="#">Blog</a></li>
            <li class="nav-item"><a class="nav-link text-light" href="#">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Banner -->
    <section class="bg-white py-5 border-bottom">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 mb-4 mb-md-0">
            <span class="badge bg-dark mb-2">Slide {{ slideIndex + 1 }} / {{ slides.length }}</span>
            <h1 class="display-5 fw-bold text-dark">{{ slides[slideIndex].title }}</h1>
            <p class="lead text-secondary fw-normal">{{ slides[slideIndex].content }}</p>
            <div class="mt-4">
              <button class="btn btn-outline-dark me-2" @click="slideIndex = (slideIndex - 1 + slides.length) % slides.length">
                <i class="bi bi-chevron-left"></i> Previous
              </button>
              <button class="btn btn-outline-dark" @click="slideIndex = (slideIndex + 1) % slides.length">
                Next <i class="bi bi-chevron-right"></i>
              </button>
            </div>
          </div>
          <div class="col-md-6 text-center">
            <img 
              :src="slides[slideIndex].img" 
              class="img-fluid rounded shadow-sm" 
              style="max-height: 350px;" 
              @error="$event.target.src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80'"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Cars Grid -->
    <section class="py-5">
      <div class="container">
        <h2 class="fw-bold mb-4 text-dark">New Cars</h2>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          <div v-for="car in carsData" :key="car.id" class="col">
            <div class="card h-100 shadow-sm border-0">
              <div class="bg-white p-3 text-center" style="height: 200px; display: flex; align-items: center; justify-content: center;">
                <img 
                  :src="car.img" 
                  class="card-img-top" 
                  style="max-height: 100%; object-fit: contain; cursor: pointer;" 
                  @click="modalImage = car.img"
                  @error="$event.target.src='https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80'"
                />
              </div>
              <div class="card-body d-flex flex-column">
                <h5 class="card-title fw-bold text-dark">{{ car.name }}</h5>
                <p class="card-text text-success fs-4 fw-bold mb-3">{{ car.price }}</p>
                <div class="mt-auto d-flex gap-2">
                  <button class="btn btn-outline-dark w-100" @click="selectedCar = car">Car Info</button>
                  <a href="#" class="btn btn-success w-100">Buy Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Image Zoom Modal -->
    <div v-if="modalImage" class="modal d-block bg-dark bg-opacity-75" tabindex="-1" @click="modalImage = null">
      <div class="modal-dialog modal-dialog-centered modal-lg">
        <div class="modal-content bg-transparent border-0 text-center">
          <img :src="modalImage" class="img-fluid rounded" alt="Enlarged Car" />
        </div>
      </div>
    </div>

    <!-- Info Modal -->
    <div v-if="selectedCar" class="modal d-block bg-dark bg-opacity-50" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title fw-bold text-dark">{{ selectedCar.name }}</h5>
            <button type="button" class="btn-close" @click="selectedCar = null"></button>
          </div>
          <div class="modal-body">
            <p class="text-dark fs-6">{{ selectedCar.desc }}</p>
            <p class="fw-bold text-success fs-5 mb-0">Price: {{ selectedCar.price }}</p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="selectedCar = null">Close</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
      <p class="mb-0 text-light opacity-75">Copyright © 2026 CarLoyal (Vue + Bootstrap 5). All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const slideIndex = ref(0);
const modalImage = ref(null);
const selectedCar = ref(null);

const slides = [
  { title: 'Welcome to CarLoyal', img: '/assets/img/01.png', content: 'Your go-to destination for quality new and pre-owned vehicles.' },
  { title: 'Enjoyable Car-Buying Experience', img: '/assets/img/02.png', content: 'Providing a seamless experience.' },
  { title: 'Luxury & Performance', img: '/assets/img/03.png', content: 'Explore our top-tier selection of world-class supercars.' }
];

const carsData = [
  { id: 1, name: 'Honda Civic Type R', img: '/assets/img/05.png', price: '$45,000', desc: 'Turbocharged 2.0-liter inline-4 engine with exceptional performance.' },
  { id: 2, name: 'Mazzanti Evantra', img: '/assets/img/06.png', price: '$1,000,000', desc: 'Italian luxury handmade supercar with extreme aerodynamics.' },
  { id: 3, name: 'Porsche 911 GT3', img: '/assets/img/07.png', price: '$170,000', desc: 'High-performance track-focused sports car with naturally aspirated engine.' },
  { id: 4, name: 'Ferrari 488 GTB', img: '/assets/img/08.png', price: '$300,000', desc: 'Mid-engine sports car delivering thrilling V8 twin-turbo power.' },
  { id: 5, name: 'Tesla Model 3', img: '/assets/img/09.png', price: '$60,000', desc: 'All-electric fast sedan with cutting-edge autopilot technology.' },
  { id: 6, name: 'Kia Stinger GT', img: '/assets/img/10.png', price: '$50,000', desc: 'Fastback sports sedan featuring twin-turbo V6 agility and comfort.' }
];
</script>