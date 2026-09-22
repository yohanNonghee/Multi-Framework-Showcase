import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Car {
  id: number;
  name: string;
  img: string;
  price: string;
  desc: string;
}

interface Slide {
  title: string;
  img: string;
  content: string;
}

interface Faq {
  q: string;
  a: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  slideIndex = 0;
  modalImage: string | null = null;
  selectedCar: Car | null = null;
  activeFaq: number | null = null;

  slides: Slide[] = [
    { title: 'Welcome to CarLoyal', img: '/assets/img/01.png', content: 'Your go-to destination for quality new and pre-owned vehicles with competitive pricing.' },
    { title: 'Enjoyable Car-Buying Experience', img: '/assets/img/02.png', content: 'Our friendly team is dedicated to providing a seamless experience.' },
    { title: 'Competitive Pricing & Financing', img: '/assets/img/03.png', content: 'Explore flexible financing options, trade-in deals, and top-notch customer support.' }
  ];

  carsData: Car[] = [
    { id: 1, name: 'Honda Civic Type R', img: '/assets/img/05.png', price: '$45,000', desc: 'The Honda Civic Type R is a high-performance version of the Civic featuring a turbocharged 2.0L engine.' },
    { id: 2, name: 'Mazzanti Evantra', img: '/assets/img/06.png', price: '$1,000,000', desc: 'The Mazzanti Evantra is a limited-production supercar handcrafted in Italy with over 700 HP.' },
    { id: 3, name: 'Porsche 911 GT3', img: '/assets/img/07.png', price: '$170,000', desc: 'Engineered for both road and track use with a naturally aspirated 4.0-liter flat-six engine.' },
    { id: 4, name: 'Ferrari 488 GTB', img: '/assets/img/08.png', price: '$300,000', desc: 'Twin-turbocharged 3.9-liter V8 engine producing 661 horsepower.' },
    { id: 5, name: 'Tesla Model 3', img: '/assets/img/09.png', price: '$60,000', desc: 'All-electric sedan with sleek aerodynamic design and minimalist interior.' },
    { id: 6, name: 'Kia Stinger GT', img: '/assets/img/10.png', price: '$50,000', desc: 'Premium performance segment offering a blend of power, handling, and luxury.' }
  ];

  faqList: Faq[] = [
    { q: 'Do you have an online inventory search feature?', a: 'Yes, our website features a comprehensive inventory search by make, model, and year.' },
    { q: 'Can I schedule a test drive online?', a: 'Absolutely! You can schedule a test drive directly through our site.' },
    { q: 'Are your listed prices negotiable?', a: 'Our prices are competitive, but we are always open to discussion with customers.' }
  ];

  prevSlide() {
    this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
  }

  nextSlide() {
    this.slideIndex = (this.slideIndex + 1) % this.slides.length;
  }

  toggleFaq(index: number) {
    this.activeFaq = this.activeFaq === index ? null : index;
  }

 // Prevent broken images by automatically switching to a backup image.
  handleImageError(event: any) {
    event.target.src = 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80';
  }
}