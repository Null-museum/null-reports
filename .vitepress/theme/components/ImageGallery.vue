<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface GalleryImage {
  src: string
  name: string
}

const images = ref<GalleryImage[]>([])
const currentImageIndex = ref(0)
const showLightbox = ref(false)
const loadedImages = ref<Set<string>>(new Set())

// Load images from public/gallery folder
onMounted(async () => {
  try {
    // Import all images from the gallery folder
    const galleryModules = import.meta.glob('/public/gallery/*.{jpg,jpeg,png,gif,webp,svg}', { 
      eager: false,
      query: '?url',
      import: 'default'
    })
    
    images.value = Object.keys(galleryModules).map(path => ({
      src: path.replace('/public', ''),
      name: path.split('/').pop()?.split('.')[0] || 'Image'
    }))
    
    // Lazy load images using Intersection Observer
    setupLazyLoading()
  } catch (error) {
    console.error('Error loading gallery images:', error)
  }
})

// Lazy loading setup
const setupLazyLoading = () => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement
            const src = img.dataset.src
            if (src && !loadedImages.value.has(src)) {
              img.src = src
              loadedImages.value.add(src)
              observer.unobserve(img)
            }
          }
        })
      },
      { rootMargin: '50px' }
    )
    
    setTimeout(() => {
      document.querySelectorAll('.gallery-item img[data-src]').forEach(img => {
        observer.observe(img)
      })
    }, 100)
  } else {
    // Fallback for browsers without IntersectionObserver
    images.value.forEach(img => loadedImages.value.add(img.src))
  }
}

// Open lightbox
const openLightbox = (index: number) => {
  currentImageIndex.value = index
  showLightbox.value = true
  document.body.style.overflow = 'hidden'
}

// Close lightbox
const closeLightbox = () => {
  showLightbox.value = false
  document.body.style.overflow = ''
}

// Navigate in lightbox
const navigate = (direction: number) => {
  currentImageIndex.value = (currentImageIndex.value + direction + images.value.length) % images.value.length
}

// Keyboard navigation
const handleKeydown = (e: KeyboardEvent) => {
  if (!showLightbox.value) return
  
  switch (e.key) {
    case 'Escape':
      closeLightbox()
      break
    case 'ArrowLeft':
      navigate(-1)
      break
    case 'ArrowRight':
      navigate(1)
      break
  }
}

// Touch support for mobile
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  handleSwipe()
}

const handleSwipe = () => {
  const swipeThreshold = 50
  const diff = touchStartX - touchEndX
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      navigate(1) // Swipe left
    } else {
      navigate(-1) // Swipe right
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<template>
  <div class="gallery-container">
    <!-- Empty state -->
    <div v-if="images.length === 0" class="gallery-empty">
      <div style="font-size: 4rem;">🖼️</div>
      <h3>No Images Yet</h3>
      <p>Be the first to contribute! Check out the contribution guide to add your images.</p>
    </div>
    
    <!-- Gallery Grid -->
    <div v-else class="gallery-grid">
      <div
        v-for="(image, index) in images"
        :key="image.src"
        class="gallery-item"
        :class="{ loading: !loadedImages.has(image.src) }"
        @click="openLightbox(index)"
      >
        <img
          :data-src="image.src"
          :alt="image.name"
          loading="lazy"
        />
      </div>
    </div>
    
    <!-- Lightbox -->
    <Teleport to="body">
      <div
        v-if="showLightbox"
        class="lightbox"
        @click="closeLightbox"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd"
      >
        <div class="lightbox-content" @click.stop>
          <img
            :src="images[currentImageIndex].src"
            :alt="images[currentImageIndex].name"
          />
        </div>
        
        <button class="lightbox-close" @click="closeLightbox" aria-label="Close">
          ✕
        </button>
        
        <button
          v-if="images.length > 1"
          class="lightbox-nav prev"
          @click.stop="navigate(-1)"
          aria-label="Previous image"
        >
          ‹
        </button>
        
        <button
          v-if="images.length > 1"
          class="lightbox-nav next"
          @click.stop="navigate(1)"
          aria-label="Next image"
        >
          ›
        </button>
        
        <div v-if="images.length > 1" class="lightbox-counter">
          {{ currentImageIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Teleport>
  </div>
</template>
