import React from 'react';
import './About.css';

import author from '../../images/author.jpg';

function About() {
  return (
    <section className="about">
      <div className="about__content">

        <img className="about__photo" src={author} alt="Фото автора проекта" />

        <div className="about__text-wrapper">
          <h2 className="about__heading">Об авторе</h2>
          <p className="about__text">
            Это блок с описанием автора проекта.
            Здесь следует указать, как вас зовут,
            чем вы занимаетесь, какими технологиями разработки владеете.
          </p>
          <p className="about__text">
            Также можно рассказать о процессе обучения в Практикуме,
            чему вы тут научились, и чем можете помочь потенциальным заказчикам.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
