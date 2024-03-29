import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
// import { send } from 'emailjs-com'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function SwirlyDoodle({ className }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 281 40"
      className={className}
      preserveAspectRatio="none"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M240.172 22.994c-8.007 1.246-15.477 2.23-31.26 4.114-18.506 2.21-26.323 2.977-34.487 3.386-2.971.149-3.727.324-6.566 1.523-15.124 6.388-43.775 9.404-69.425 7.31-26.207-2.14-50.986-7.103-78-15.624C10.912 20.7.988 16.143.734 14.657c-.066-.381.043-.344 1.324.456 10.423 6.506 49.649 16.322 77.8 19.468 23.708 2.65 38.249 2.95 55.821 1.156 9.407-.962 24.451-3.773 25.101-4.692.074-.104.053-.155-.058-.135-1.062.195-13.863-.271-18.848-.687-16.681-1.389-28.722-4.345-38.142-9.364-15.294-8.15-7.298-19.232 14.802-20.514 16.095-.934 32.793 1.517 47.423 6.96 13.524 5.033 17.942 12.326 11.463 18.922l-.859.874.697-.006c2.681-.026 15.304-1.302 29.208-2.953 25.845-3.07 35.659-4.519 54.027-7.978 9.863-1.858 11.021-2.048 13.055-2.145a61.901 61.901 0 0 0 4.506-.417c1.891-.259 2.151-.267 1.543-.047-.402.145-2.33.913-4.285 1.707-4.635 1.882-5.202 2.07-8.736 2.903-3.414.805-19.773 3.797-26.404 4.829Zm40.321-9.93c.1-.066.231-.085.29-.041.059.043-.024.096-.183.119-.177.024-.219-.007-.107-.079ZM172.299 26.22c9.364-6.058 5.161-12.039-12.304-17.51-11.656-3.653-23.145-5.47-35.243-5.576-22.552-.198-33.577 7.462-21.321 14.814 12.012 7.205 32.994 10.557 61.531 9.831 4.563-.116 5.372-.288 7.337-1.559Z"
      />
    </svg>
  )
}

export function Rfq() {
  const form = useRef()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    company_name: '',
    email: '',
    message: '',
  })

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_rfq',
        'template_rfq',
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_KEY
      )
      .then(
        (result) => {
          setFormValues({
            name: '',
            company_name: '',
            email: '',
            message: '',
          })
          setIsSubmitted(true)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  const handleChange = (e, prop) => {
    e.preventDefault()

    setFormValues({ ...formValues, [prop]: e.target.value })
  }
  return (
    <section id="rfq" aria-label="Rfq" className="bg-slate-900 py-20 sm:py-32">
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <SwirlyDoodle className="absolute top-1/2 left-0 h-[1em] w-full fill-blue-400" />
              <span className="relative">Fair pricing,</span>
            </span>{' '}
            for everyone.
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Let us know your needs, and we will get them shipped immediately.
          </p>
        </div>
        <form
          className="mx-auto flex max-w-[600px] flex-col"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="mt-6">
            <label
              for="full-name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="name"
              value={formValues.name}
              onChange={(e) => handleChange(e, 'name')}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Johny Depp"
              required
            />
          </div>
          <div class="mt-3">
            <label
              for="Company-Name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Company Name
            </label>
            <input
              type="text"
              id="Company-name"
              name="company_name"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="Sky Air Supply Ltd"
              value={formValues.company_name}
              onChange={(e) => handleChange(e, 'company_name')}
              required
            />
          </div>
          <div className="mt-3">
            <label
              for="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formValues.email}
              onChange={(e) => handleChange(e, 'email')}
              aria-describedby="helper-text-explanation"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="user@email.com"
              required
            />
          </div>
          <div class="mt-3">
            <label
              for="Part-Number"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Part Number
            </label>
            <input
              type="text"
              id="Part-Number"
              name="part_number"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="e.g. MS12345"
              value={formValues.part_number}
              onChange={(e) => handleChange(e, 'part_number')}
              required
            />
          </div>
          <div className="mt-3">
            <label
              for="message"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Other Comments
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formValues.message}
              onChange={(e) => handleChange(e, 'message')}
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              placeholder="How can we help you?"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mx-auto mt-6 w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          >
            Submit
          </button>
          {isSubmitted && (
            <div className="mt-10 text-green-500">
              Thank you for your inquiry! We have received your request and will
              get back to you soon.
            </div>
          )}
        </form>
      </Container>
    </section>
  )
}
