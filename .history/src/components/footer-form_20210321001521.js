import React from 'react';
import { Link } from "gatsby";
import { useFormik } from 'formik';

const FooterForm = () => {

    const formik = useFormik({
        initialValues: {
            phone: '',
            name: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
        <form className="footer-form order-lg-1 order-2" data-aos="fade-right" onSubmit={formik.handleSubmit}>
            {/* <input
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
            /> */}
            <Field name="phone" className="footer-form__input" placeholder="Телефон *" />
            <Field name="name" className="footer-form__input" placeholder="Имя *" />
            <Field name="message" as="textarea" className="footer-form__textarea" placeholder="Идея или вопрос" />
            <input className="footer-form-btn btn-orange-with-animation" type="submit" value="Связаться"/>
            <p className="footer-form__text">
                Нажимая на кнопку, Вы даете согласие на <Link to="#">обработку персональных данных.</Link>
            </p>
        </form>
        </>
    );
};

export default FooterForm