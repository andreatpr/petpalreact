/*este es el js de perfil del usuario*/
import React, { useState, useEffect } from 'react';
import './styles/index.css'; 
import UserProfile from './apihandler/controller/userpp';
import DefaultLayout from './dlayout';
import mascotaImg from './assets/mascota.png';
import faceImg from './assets/face.png';
import calendarImg from './assets/calendar.png';
import peopleImg from './assets/people.png';
import commentImg from './assets/comment.png';
import viewImg from './assets/view.png';
import tortaImg from './assets/torta.png';

function App() {
  const userId = 1;
  const [userDetails, setUserDetails] = useState({
    nombre: "",
    fotoperfil:"",
    raza: "",
    genero: "",
    edad: "",
    fechaIngreso: "",
    foro: [],
    reminders: []
  });
  const [loading, setLoading] = useState(true);

  const handleDataLoaded = (userData) => {
    setUserDetails({
      fotoperfil: userData?.fotoperfil || "",
      nombre: userData?.nombre || "",
      raza: userData?.raza || "",
      genero: userData?.genero || "",
      edad: userData?.edad || "",
      fechaIngreso: userData?.fechaIngreso || "",
      foro: userData?.foros || [],
      reminders: userData?.recordatorios || []
    });
    if (loading) {
      setLoading(false); 
    }
  };
  const [mostrarComentarios, setMostrarComentarios] = useState(false);
  const toggleComentarios = (postId) => {
    setMostrarComentarios((prevMostrarComentarios) => ({
      ...prevMostrarComentarios,
      [postId]: !prevMostrarComentarios[postId]
    }));
  };

  return (
    <DefaultLayout>
    <div className="App" style={{ backgroundColor: '#5B586E' }}>
      <UserProfile userId={userId} onDataLoaded={handleDataLoaded}/>
      <div className="contenido">
      <br></br>
      <br></br>
        <div className="info-perfil">
        <img src={process.env.PUBLIC_URL + userDetails?.fotoperfil} alt="miimagen" className="imagen-perfil" />
          <div className="info-mascota">
            <p className="nombre-mascota">{userDetails?.nombre}</p>
            <p className="raza-mascota">Raza: {userDetails?.raza}</p>
            <p className="genero-mascota">Género: {userDetails?.genero}</p>
            <p className="anios-mascota">{userDetails?.edad}</p>
            <p className="torta-gen">
              <img src={tortaImg} alt="torta" className="torta" /> 05 Dic,2022
            </p>
          </div>
        </div>
        <div className="reminders">
          <h3>Recodatorios!</h3>
            <div className="rcards">
              {userDetails.reminders.slice(0, 2).map((reminders) => (
                <div className="reminders-card" key={reminders.id}>
                  <div className="r-content">
                      <h2>{reminders.titulo}</h2>
                      <p>{reminders.descripcion}</p>
                  </div>
                  <div className="r-act">
                      <button>Editar</button>
                      <button>Borrar</button>
                  </div>
            </div>))}
            </div>
        </div>
        <div className="mis-foros">
          <div className="bmforo-container">
            <button className="bmforo">Mis Foros</button>
          </div>
          <div className="cards">
          {userDetails.foro.slice(0, 2).map((post) => (
            <div className="card" key={post.id}>
              <h4>{post.titulo}</h4>
              <p>{post.contenido}</p>
              <div className="info-foro">
                <img src={faceImg} className="icono-foro" alt="icono-foro"/><p className="icono-foro-t">{post.autor}</p>
                <img src={calendarImg}className="fecha-foro" alt="calendario-icono"/><p className="fecha-foro-t">{post.fechaPublicacion}</p>
              </div>
              <div className="interacciones-foro">
                  <p className="likes-foro"><img src={peopleImg} alt="likes-icono"/>{post.likes}</p>
                  <div
                    className={`comentarios-contenedor popup-container ${mostrarComentarios[post.id] ? 'active' : ''}`}
                    onClick={() => toggleComentarios(post.id)}
                  >
                  <p className="comentarios-foro">
                  <img src={commentImg} alt="comentarios-icono" />0</p>
                  <div className={`comentarios-popup ${mostrarComentarios[post.id] ? 'active' : ''}`}>
                  {post.comentarios.map((comentario) => (
                    <div key={comentario.id}>
                      <p className='coment-autor'>{comentario.autor}</p>
                      <p className='coment-conte'>{comentario.contenido}</p>
                    </div>
                  ))}
                  </div>
                  </div>
                    <p className="views-foro"><img src={viewImg} alt="views-icono"/>{post.vistas}</p>
              </div>
            </div>
          ))}
          </div>
        </div>

        <div className="botones-inf">
          <button className="biforo">Mi Historial Médico</button>
          <a href="../pages/veterinarios.html">
            <button className="biforo">Números de veterinarias</button>
          </a>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
    </DefaultLayout>
  );
}

export default App;
