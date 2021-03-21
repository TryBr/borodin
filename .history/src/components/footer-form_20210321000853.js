import React from 'react';
import { Link } from "gatsby";
import { useFormik } from 'formik';

const FooterForm = () => {

    const formik = useFormik({
        initialValues: {
            phone: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
        <form className="footer-form order-lg-1 order-2" data-aos="fade-right">
            <input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
            className="footer-form__input"
            placeholder="Телефон *"
            />
            {/* <input type="text" className="footer-form__input" placeholder="Телефон *" />
            <input type="text" className="footer-form__input" placeholder="Имя *" />
            <textarea className="footer-form__textarea" placeholder="Идея или вопрос" ></textarea> */}
            <input className="footer-form-btn btn-orange-with-animation" type="submit" value="Связаться"/>
            <p className="footer-form__text">
                Нажимая на кнопку, Вы даете согласие на <Link to="#">обработку персональных данных.</Link>
            </p>
        </form>
        </>
    );
};

export default FooterForm