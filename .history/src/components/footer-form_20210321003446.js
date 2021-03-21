import React from 'react';
import { Link } from "gatsby";
import { useFormik, Field, Form, Textarea } from 'formik';


const validate = values => {
    const errors = {};

    if (!values.phone) {
      errors.phone = 'Введите ваш телефон.';
    }
  
    if (!values.name) {
      errors.name = 'Введите ваше имя.';
    }
  
    return errors;
};

const FooterForm = () => {

    const formik = useFormik({
        initialValues: {
            phone: '',
            name: '',
            message: ''
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 3));
        },
    });

    return (
        <>
        <form className="footer-form order-lg-1 order-2" data-aos="fade-right" onSubmit={formik.handleSubmit}>
            <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="footer-form__input"
            placeholder="Телефон *"
            />
            <input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            className="footer-form__input"
            placeholder="Имя *"
            />
            <textarea
            id="message"
            name="message"
            type="message"
            onChange={formik.handleChange}
            value={formik.values.message}
            className="footer-form__textarea"
            placeholder="Идея или вопрос"
            />
            {formik.errors.phone ? <div className="footer-form__error">{formik.errors.phone}</div> : null}
            {formik.errors.name ? <div className="footer-form__error">{formik.errors.name}</div> : null}
            <button className="footer-form-btn btn-orange-with-animation" type="submit">Связаться</button>
            <p className="footer-form__text">
                Нажимая на кнопку, Вы даете согласие на <Link to="#">обработку персональных данных.</Link>
            </p>
        </form>
        </>
    );
};

export default FooterForm