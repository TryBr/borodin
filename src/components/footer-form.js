import React, { useState } from "react";
import { Link } from "gatsby";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Modal } from 'react-bootstrap';
import HtmlParser from 'html-react-parser';
import SuccessIcon from "../images/popup-success-icon.svg";
import ErrorIcon from "../images/popup-error-icon.svg";

const FooterForm = () => {

    const [statusModal, setStatusModal] = useState(false);
    const handleCloseModal = () => setStatusModal(false);
    const handleShowModal = () => setStatusModal(true);

    const [modalTitle, setModalTitle] = useState('');
    const [modalText, setModalText] = useState('');
    const [modalBtn, setModalBtn] = useState('');
    const [modalStatus, setModalStatus] = useState('');

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
                    console.log('then');
                })
                .catch(() => {
                    console.log('Error');
                    setModalTitle('Упс, что-то пошло не так...');
                    setModalText(`Ваше письмо не удалось отправить. <br />Попробуйте еще раз.`);
                    setModalBtn('Сейчас попробую');
                    setModalStatus(false);
                    handleShowModal();
                })
                .finally(() => {
                    console.log('Success');
                    setModalTitle('Ваша заявка отправлена');
                    setModalText(`Cпасибо за ваше обращение. <br />Скоро я с вами свяжусь.`);
                    setModalBtn('Хорошо');
                    setModalStatus(true);
                    handleShowModal();
                    actions.setSubmitting(false);
                    actions.resetForm();
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
                    type="tel"
                    name="phone"
                    className="footer-form__input has-error"
                    placeholder="Телефон *" 
                    />

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
        <Modal className="popup popup-success" show={statusModal} onHide={handleCloseModal}>
            <div className="popup-close" onClick={handleCloseModal} onKeyDown={handleCloseModal} role="button" tabIndex={0} aria-label="closeBtn"></div>
            <div className={`popup-icon ${modalStatus}`}>
                <img src={modalStatus ? SuccessIcon : ErrorIcon} alt={modalStatus} />
            </div>
            <h4 className="popup-title title-h3">
                {modalTitle}
            </h4>
            <p className="popup-text">
                {HtmlParser(modalText)}
            </p>
            <div className="popup-btn btn-orange" onClick={handleCloseModal} onKeyDown={handleCloseModal} role="button" tabIndex={0} aria-label="okBtn">
                {modalBtn}
            </div>
        </Modal>
        </>
    );
};

export default FooterForm