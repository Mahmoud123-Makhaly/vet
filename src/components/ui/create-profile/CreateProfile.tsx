'use client';
import { ModalBody, ModalFooter } from 'reactstrap';

import React, { useState } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';
import { useRouter } from '@navigation';

import * as Yup from 'yup';
import { Button } from 'reactstrap';
import { useTranslate } from '@app/hooks';
import { ModalMaker } from '@components';

const CreateProfile = () => {
  const t = useTranslate('COMP_Contact_us');
  const router = useRouter();

  const [openModal, setOpenModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(15, t('NAME_RGX')).required(t('REQUIRED_NAME')),
      message: Yup.string().max(20, t('MSG_RGX')).required(t('REQUIRED_MESSAGE')),
      email: Yup.string().email(t('EMAIL_RGX')).required(t('REQUIRED_EMAIL')),
    }),
    onSubmit: async (values, e) => {
      setOpenModal(true);

      const orderData = {
        name: values.name,
        email: values.email,
        message: values.message,
      };
      try {
        const response = await fetch('', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData),
        });
      } catch (error) {
        console.error('Error saving order:', error);
      }
      const servicesId = 'service_ashmdqd';
      const templateId = 'template_gxo0ivm';
      const publicKey = 'Y6d7EFtIjAlZi068q';
      const templateParams = {
        from_name: 'mahmoud makhaly',
        from_email: 'mahmoudmakhaly123@gmail.com',
        to_email: values.email,
        to_name: values.name,
        message: values.message,
      };
      emailjs.send(servicesId, templateId, templateParams, publicKey).then(response => {
        values.email = '';
        values.name = '';
        values.message = '';
      });
    },
  });
  return !openModal ? (
    <div className="py-5">
      <div className="signup-container">
        <form className="signup-form" onSubmit={formik.handleSubmit}>
          <h3 className="text-primary mb-3"> {t('CREATE_PROFILE')} </h3>

          <input
            id="name"
            name="name"
            type="text"
            placeholder={t('NAME')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className="form-control"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-secondary">{formik.errors.name}</div>
          ) : null}

          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className="form-control  my-3"
            placeholder={t('EMAIL')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-secondary">{formik.errors.email}</div>
          ) : null}
          <textarea
            id="message"
            name="message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}
            className="form-control "
            placeholder={t('ENTER_YOUR_MESSAGE')}
          />
          {formik.touched.message && formik.errors.message ? (
            <div className="text-secondary">{formik.errors.message}</div>
          ) : null}

          <Button type="submit" className="text-white px-5 mt-4">
            {t('SUBMIT')}
          </Button>
        </form>
      </div>
    </div>
  ) : (
    <>
      <ModalMaker isOpen={openModal} toggle={() => setOpenModal(false)}>
        <ModalBody>
          <h6 className="text-primary text-center"> {t('CREATED')}</h6>
        </ModalBody>
        <ModalFooter>
          <Button className="m-auto" color="secondary text-white" onClick={() => router.push('/')}>
            {t('BACK_TO_HOME')}
          </Button>
        </ModalFooter>
      </ModalMaker>
    </>
  );
};
export default CreateProfile;
