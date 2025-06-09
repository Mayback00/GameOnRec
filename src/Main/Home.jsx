import React, { useState } from 'react';
import './Home.css'; // Import the CSS file
import logo from './gameonrecords.png'; // Replace with your logo image
import { IoMdArrowDropdown } from "react-icons/io";

function Home() {
  const [selectedClub, setSelectedClub] = useState('');
  const [selectedPitch, setSelectedPitch] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleClubChange = (event) => {
    setSelectedClub(event.target.value);
  };

  const handlePitchChange = (event) => {
    setSelectedPitch(event.target.value);
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleViewVideo = () => {
    // In a real application, this would trigger the video retrieval logic
    console.log('View Video clicked with:', selectedClub, selectedPitch, selectedDate, selectedTime);
    alert('Simulating video view...');
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div className="logo-container">
          <img src={logo} alt="GameOn Logo" className="logo" />
        </div>
        <div className="header-actions">
          <span className="language">🇦🇷</span> {/* Replace with your language selector */}
          <div className="menu-icon">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </header>
      

      <section className="hero-section">
        <video autoPlay loop muted playsInline poster="/images/futbol-poster.jpg"> {/* Asegúrate de tener una imagen poster en /public/images/ */}
          <source src="/Fondo_Gor_2.mp4" type="video/mp4" />
          {/* Puedes añadir una fuente WebM para mejor compatibilidad */}
          {/* <source src="/Fondo_Gor_2.webm" type="video/webm" /> */}
          Tu navegador no soporta la reproducción de video.
        </video>
        <h1 className="hero-title">REVIVÍ TU PARTIDO</h1>
        <p className="hero-subtitle">Encontrá tus mejores jugadas y compartilas con tus amigxs</p>
        <div className="filter-bar">
          <div className="filter-dropdown">
            <select value={selectedClub} onChange={handleClubChange}>
              <option value="">Elegí el club</option>
              {/* Add club options dynamically or statically */}
              <option value="club1">Club 1</option>
              <option value="club2">Club 2</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <select value={selectedPitch} onChange={handlePitchChange}>
              <option value="">Elegí la cancha</option>
              {/* Add pitch options dynamically or statically */}
              <option value="pitch1">Cancha Principal</option>
              <option value="pitch2">Cancha Secundaria</option>
            </select>
          </div>
          <div className="filter-dropdown">
            <input type="date" value={selectedDate} onChange={handleDateChange} />
          </div>
          <div className="filter-dropdown">
            <select value={selectedTime} onChange={handleTimeChange}>
              <option value="">Elegí el horario</option>
              {/* Add time options dynamically or statically */}
              <option value="10:00">10:00</option>
              <option value="12:00">12:00</option>
              <option value="14:00">14:00</option>
            </select>
          </div>
          <button className="view-video-button" onClick={handleViewVideo}>VER VIDEO</button>
        </div>
      </section>

      {/* You can add more sections below the hero section */}
    </div>
  );
}

export default Home;