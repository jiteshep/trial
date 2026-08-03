# Namma Grama Nayaka Website

A complete, modern, responsive public website for the "Namma Grama Nayaka" initiative.

## Setup Instructions

1. **Upload Logos**: The application references three logo files. You must upload the attached logos to the `public/` directory and name them exactly as follows:
  , `public/logo-ngn.png` (Namma Grama Nayaka Logo)
  , `public/logo-ep.png` (Empower Panchayat Logo)
  , `public/logo-ts.png` (Tejasvi Surya Logo)

2. **Configure Links and Data**: Open `src/config.ts` to configure the following placeholder values:
  , `WARD_MEMBER_GOOGLE_FORM_URL`: Paste the actual Google Form embed/link URL here.
  , `PARTNER_INTEREST_FORM_URL`: Paste the volunteer/partner Google Form URL here.
  , `GENERAL_CONTACT_EMAIL` & `GENERAL_CONTACT_PHONE`: Update contact details.
  , You can also verify or update the `STATS` object in this file before final publication.

3. **Translations**: Open `src/translations.ts` to edit the English text or add accurate Kannada translations. The Kannada keys are currently structured but need a native speaker to provide the precise text for some sections.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Critical Terminology Rule Enforced

This project strictly enforces the use of the word **"Grama"** instead of "Gram" across all headings, paragraphs, descriptions, and meta tags as requested.
