import React from 'react';

class Lateral extends React.Component {
  render() {
    return (
      <div>     
       <nav id="sidebar">
        <div classNameName="p-4 pt-5">
            <a href="" className="img logo rounded-circle mb-5" ></a>
            <ul className="list-unstyled components mb-5">
                <li className="active">
                    <a href="#homeSubmenu" dataToggle="collapse" ariaExpanded="false" className="dropdown-toggle">Eventos</a>
                    <ul className="collapse list-unstyled" id="homeSubmenu">
                        <li>
                            <a>Abertos <span className="badge badge-light">9</span></a>
                        </li>
                        <li>
                            <a>Fechados</a>
                        </li>
                        <li>
                            <a>Próximos</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a>Agendados <span className="badge bg-secondary">9</span></a>
                </li>
                <li>
                    <a>Contato <span className="badge bg-secondary">9</span></a>
                </li>
                <li>
                    <a href="htpp://">SOBRE A PLATAFORMA <span className="badge bg-secondary">9</span></a>
                </li>
            </ul>
            <div className="footer">
                <p>
                    Copyright 
                    All rights reserved | This template is made with <i className="icon-heart" aria-hidden="true"></i> by <a
                            href="https://colorlib.com" rel="_blank">Colorlib.com</a>
                    </p>
            </div>
        </div>
    </nav>
    </div>
   );
  }
}

export default Lateral;