import nodemailer from 'nodemailer';
import type { TransportOptions } from 'nodemailer';
import type { Locals } from '$lib/types';

export const DEFAULT_EMAIL_OPTIONS = {
  from: 'SOS Recruitment <no-reply@sosrecruitment.com>',
  replyTo: 'info@sosrecruitment.com'
};

export function getTransporter(locals: Locals) {
  if (!locals.email?.user || !locals.email?.password) {
    throw new Error('Email configuration is missing');
  }

  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: locals.email.user,
      pass: locals.email.password
    },
    tls: {
      rejectUnauthorized: false
    }
  } as TransportOptions);
}
