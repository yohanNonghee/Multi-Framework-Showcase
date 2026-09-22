import { useState } from 'react'
import './App.css'

const carsData = [
  { id: 1, name: 'Honda Civic Type R', img: '/assets/img/05.png', price: '$45,000', desc: 'The Honda Civic Type R is a high-performance version of the Civic featuring a turbocharged 2.0L engine.' },
  { id: 2, name: 'Mazzanti Evantra', img: '/assets/img/06.png', price: '$1,000,000', desc: 'The Mazzanti Evantra is a limited-production supercar handcrafted in Italy with over 700 HP.' },
  { id: 3, name: 'Porsche 911 GT3', img: '/assets/img/07.png', price: '$170,000', desc: 'Engineered for both road and track use with a naturally aspirated 4.0-liter flat-six engine.' },
  { id: 4, name: 'Ferrari 488 GTB', img: '/assets/img/08.png', price: '$300,000', desc: 'Twin-turbocharged 3.9-liter V8 engine producing 661 horsepower.' },
  { id: 5, name: 'Tesla Model 3', img: '/assets/img/09.png', price: '$60,000', desc: 'All-electric sedan with sleek aerodynamic design and minimalist interior.' },
  { id: 6, name: 'Kia Stinger GT', img: '/assets/img/10.png', price: '$50,000', desc: 'Premium performance segment offering a blend of power, handling, and luxury.' }
];

export default function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [activeFaq, setActiveFaq] = useState(null);

  const slides = [
    { title: 'Welcome to CarLoyal', img: '/assets/img/01.png', content: 'Your go-to destination for quality new and pre-owned vehicles with competitive pricing.' },
    { title: 'Enjoyable Car-Buying Experience', img: '/assets/img/02.png', content: 'Our friendly team is dedicated to providing a seamless experience.' },
    { title: 'Competitive Pricing & Financing', img: '/assets/img/03.png', content: 'Explore flexible financing options, trade-in deals, and top-notch customer support.' }
  ];

  const faqList = [
    { q: 'Do you have an online inventory search feature?', a: 'Yes, our website features a comprehensive inventory search by make, model, and year.' },
    { q: 'Can I schedule a test drive online?', a: 'Absolutely! You can schedule a test drive directly through our site.' },
    { q: 'Are your listed prices negotiable?', a: 'Our prices are competitive, but we are always open to discussion with customers.' }
  ];

  return (
    <div className="bg-light min-vh-100 d-flex flex-column justify-content-between">
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-white" href="#">CarLoyal <span className="badge bg-primary fs-6">React</span></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navMenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active fw-bold text-white" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#">Blog</a></li>
              <li className="nav-item"><a className="nav-link text-light" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero / Banner Slider */}
      <section className="bg-white py-5 border-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <span className="badge bg-dark mb-2">Slide {slideIndex + 1} / {slides.length}</span>
              <h1 className="display-5 fw-bold text-dark">{slides[slideIndex].title}</h1>
              <p className="lead text-secondary fw-normal">{slides[slideIndex].content}</p>
              <a href="#" className="btn btn-dark btn-lg">Learn More</a>
              <div className="mt-4">
                <button className="btn btn-outline-dark me-2" onClick={() => setSlideIndex((slideIndex - 1 + slides.length) % slides.length)}>
                  <i className="bi bi-chevron-left"></i> Previous
                </button>
                <button className="btn btn-outline-dark" onClick={() => setSlideIndex((slideIndex + 1) % slides.length)}>
                  Next <i className="bi bi-chevron-right"></i>
                </button>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <img src={slides[slideIndex].img} alt="Banner Car" className="img-fluid rounded shadow-sm" style={{ maxHeight: '350px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - แก้ไขข้อความสีเทาเข้มเดิมให้อ่านง่ายขึ้นบนพื้นเข้ม */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="text-center mb-5 fw-bold text-white">Why Choose Us?</h2>
          <div className="row g-4">
            <div className="col-md-4 text-center">
              <i className="bi bi-award fs-1 text-warning mb-3 d-block"></i>
              <h4 className="text-white">Unparalleled Quality</h4>
              <p className="text-light opacity-75">Extensive inventory of inspect-certified new and pre-owned vehicles.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-headset fs-1 text-warning mb-3 d-block"></i>
              <h4 className="text-white">Exceptional Service</h4>
              <p className="text-light opacity-75">Dedicated team delivering hassle-free buying experiences every step.</p>
            </div>
            <div className="col-md-4 text-center">
              <i className="bi bi-currency-dollar fs-1 text-warning mb-3 d-block"></i>
              <h4 className="text-white">Flexible Financing</h4>
              <p className="text-light opacity-75">Transparent pricing with tailored loans and special trade-in offers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cars Cards Grid */}
      <section className="py-5">
        <div className="container">
          <h2 className="fw-bold mb-4 text-dark">New Cars</h2>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {carsData.map((car) => (
              <div className="col" key={car.id}>
                <div className="card h-100 shadow-sm border-0">
                  <img 
                    src={car.img} 
                    className="card-img-top p-3 cursor-pointer" 
                    alt={car.name} 
                    style={{ height: '200px', objectFit: 'contain', cursor: 'pointer' }}
                    onClick={() => setModalImage(car.img)}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title fw-bold text-dark">{car.name}</h5>
                    <p className="card-text text-success fs-4 fw-bold mb-3">{car.price}</p>
                    <div className="mt-auto d-flex gap-2">
                      <button className="btn btn-outline-dark w-100" onClick={() => setSelectedCar(car)}>Car Info</button>
                      <a href="#" className="btn btn-success w-100">Buy Now</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion - แก้ไขข้อความในคำตอบ FAQ ให้เป็นสีเข้มชัดเจน */}
      <section className="bg-white py-5 border-top">
        <div className="container" style={{ maxWidth: '800px' }}>
          <h2 className="fw-bold mb-4 text-center text-dark">Frequently Asked Questions <i className="bi bi-question-circle"></i></h2>
          <div className="accordion">
            {faqList.map((faq, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button className={`accordion-button fw-bold ${activeFaq === index ? '' : 'collapsed'}`} type="button" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                    {faq.q}
                  </button>
                </h2>
                <div className={`accordion-collapse collapse ${activeFaq === index ? 'show' : ''}`}>
                  <div className="accordion-body text-dark fw-normal">{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal - Image Zoom */}
      {modalImage && (
        <div className="modal d-block bg-dark bg-opacity-75" tabIndex="-1" onClick={() => setModalImage(null)}>
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content bg-transparent border-0 text-center">
              <img src={modalImage} className="img-fluid rounded" alt="Enlarged Car" />
            </div>
          </div>
        </div>
      )}

      {/* Modal - Car Info Details - ปรับแก้สีข้อความในรายละเอียดรถ */}
      {selectedCar && (
        <div className="modal d-block bg-dark bg-opacity-50" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title fw-bold text-dark">{selectedCar.name}</h5>
                <button type="button" className="btn-close" onClick={() => setSelectedCar(null)}></button>
              </div>
              <div className="modal-body">
                <p className="text-dark fs-6">{selectedCar.desc}</p>
                <p className="fw-bold text-success fs-5">Price: {selectedCar.price}</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setSelectedCar(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0 text-light opacity-75">Copyright © 2024 CarLoyal (React + Bootstrap 5). All rights reserved.</p>
      </footer>
    </div>
  );
}