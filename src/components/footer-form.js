import React from 'react';
import { Link } from "gatsby";
import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik';


const FooterForm = () => {

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    return (
        <>
        <Formik
            initialValues={{
            name: '',
            phone: '',
            message: '',
            }}
            onSubmit={(values, actions) => {
                fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": "contact", ...values })
                })
                .then(() => {
                alert('Success');
                actions.resetForm()
                })
                .catch(() => {
                alert('Error');
                })
                .finally(() => actions.setSubmitting(false))
            }}
            validate={values => {
                const errors = {};
                if (!values.phone) {
                    errors.phone = 'Введите ваш телефон';
                  }
                
                if (!values.name) {
                    errors.name = 'Введите ваше имя';
                }
                return errors;
              }}
        >
        {() => (
            <Form name="contact" data-netlify="true" className="footer-form order-lg-1 order-2" data-aos="fade-right">
                <div className="footer-form-field-wrapper">
                    <label htmlFor="phone" className="footer-form__label">Телефон</label>
                    <Field 
                    name="phone"
                    className="footer-form__input"
                    placeholder="Телефон *" />
                    <div className="footer-form__error">
                        <ErrorMessage name="phone" />
                    </div>
                </div>
                <div className="footer-form-field-wrapper">
                    <label htmlFor="name" className="footer-form__label">Имя</label>
                    <Field 
                    name="name"
                    className="footer-form__input"
                    placeholder="Имя *" />
                    <div className="footer-form__error">
                        <ErrorMessage name="name" />
                    </div>
                </div>
                <div className="footer-form-field-wrapper">
                    <label htmlFor="message" className="footer-form__label">Идея или вопрос</label>
                    <Field 
                    name="message"
                    className="footer-form__textarea"
                    placeholder="Идея или вопрос"
                    component="textarea"/>
                </div>
                <button className="footer-form-btn btn-orange-with-animation" type="submit">Связаться</button>
                <p className="footer-form__text">
                    Нажимая на кнопку, Вы даете согласие на <Link to="#">обработку персональных данных.</Link>
                </p>
            </Form>
        )}
        </Formik>
        </>
    );
};

export default FooterForm