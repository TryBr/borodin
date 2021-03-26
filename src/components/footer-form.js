import React, { useState } from "react";
import { Link } from "gatsby";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal } from 'react-bootstrap';
import SuccessIcon from "../images/popup-success-icon.svg";
import ErrorIcon from "../images/popup-error-icon.svg";

const FooterForm = () => {

    const [showSuccess, setShowSuccess] = useState(false);
    const handleCloseSuccess = () => setShowSuccess(false);
    const handleShowSuccess = () => setShowSuccess(true);

    const [showError, setShowError] = useState(false);
    const handleCloseError = () => setShowError(false);
    const handleShowError = () => setShowError(true);

    function encode(data) {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&")
    }

    

    return (
        <>
        <Modal className="popup popup-success" show={showSuccess} onHide={handleCloseSuccess}>
            <div className="popup-close" onClick={handleCloseSuccess} onKeyDown={handleCloseSuccess} role="button" tabIndex={0} aria-label="closeBtn"></div>
            <div className="popup-icon">
                <img src={SuccessIcon} alt="Успех"/>
            </div>
            <h4 className="popup-title title-h3">
            Ваша заявка отправлена
            </h4>
            <p className="popup-text">
            Cпасибо за ваше обращение. <br />
            Скоро я с вами свяжусь.
            </p>
            <div className="popup-btn btn-orange" onClick={handleCloseSuccess} onKeyDown={handleCloseSuccess} role="button" tabIndex={0} aria-label="okBtn">
            Хорошо
            </div>
        </Modal>
        <Modal className="popup popup-error" show={showError} onHide={handleCloseError}>
            <div className="popup-close" onClick={handleCloseError} onKeyDown={handleCloseError} role="button" tabIndex={0} aria-label="closeBtn"></div>
            <div className="popup-icon">
                <img src={ErrorIcon} alt="Ошибка"/> 
            </div>
            <h4 className="popup-title title-h3">
                Упс, что-то пошло не так...
            </h4>
            <p className="popup-text">
                Ваше письмо не удалось отправить. <br />
                Попробуйте еще раз.
            </p>
            <div className="popup-btn btn-orange" onClick={handleCloseError} onKeyDown={handleCloseError} role="button" tabIndex={0} aria-label="okBtn">
                Сейчас попробую
            </div>
        </Modal>
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
                    console.log('Success');
                    actions.resetForm();
                })
                .catch(() => {
                    console.log('Error');
                    handleShowError();
                })
                .finally(() => {
                    handleShowSuccess();
                    actions.setSubmitting(false);
                })
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
            
            <Form name="contact" data-netlify="true" netlify-honeypot="bot-field" className="footer-form order-lg-1 order-2" data-aos="fade-right">
                <div className="footer-form-field-wrapper hidden">
                    <label htmlFor="phone" className="footer-form__label">Don’t fill this out if you’re human:</label>
                    <Field 
                    name="bot-field"
                    className="footer-form__input"
                    />
                </div>
                <div className="footer-form-field-wrapper">
                    <label htmlFor="phone" className="footer-form__label">Телефон</label>
                    <Field 
                    name="phone"
                    className="footer-form__input has-error"
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
                    Нажимая на кнопку, Вы даете согласие на <Link to="/policy">обработку персональных данных.</Link>
                </p>
            </Form>
        )}
        </Formik>
        </>
    );
};

export default FooterForm