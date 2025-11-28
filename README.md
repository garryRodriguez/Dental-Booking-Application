**************************************************
Project Name: Online Dental Booking App
Author: Garry Rodriguez
Website: https://quesoftwaregrp.com/
Email1: rodz@quesoftwaregrp.com
Email2: rodztechitsolutions@gmail.com
**************************************************


BrightSmile Dental Care – README

A simple Dental Booking Web Application built with Laravel 12, React (no TypeScript), Inertia.js, and TailwindCSS.
Users can book dental appointments by filling out a form, and the system sends a Gmail notification. The right side of the landing page displays a QR code linking to the same booking page.

Features

* Two-column landing page:
* Left: Dental booking form (React + Tailwind)
* Right: Welcome text + auto-generated QR code
* Fully reactive form using @inertiajs/react and useForm
* Flash success message after booking submission
* Stores bookings into the database
* Sends email notifications using Gmail SMTP
* Clean TailwindCSS UI
* QR Code generation using googlchart API

Packages Used

Laravel Backend
* laravel/framework
* inertiajs/inertia-laravel
* fruitcake/laravel-cors
* guzzlehttp/guzzle
* npm & Vite (bundling)
* composer require simplesoftwareio/simple-qrcode
Frontend
* @inertiajs/react
* tailwindcss
* autoprefixer
* postcss
* @vitejs/plugin-react


Requirements

* PHP 8.2+
* Composer latest
* Node.js 18+
* MySQL or MariaDB
* Laravel 12.x
* Gmail account for email notifications

Installation/Setup

Fork/Clone the project: https://github.com/garryRodriguez/Dental-Booking-Application.git

Run the following:
* cp .env.example .env  -- to create .env
* php artisan key:enerate -- to create unique key
* composer install
* npm install

Configure database in .env
DB_DATABASE=dental_booking
DB_USERNAME=root
DB_PASSWORD=

Create Model + Migration:
php artisan make:model Booking -m

Follow the schema for the migration:
Schema::create('bookings', function (Blueprint $table) {
    $table->id();
    $table->string('name');
    $table->string('email');
    $table->string('phone');
    $table->string('service_type');
    $table->date('date');
    $table->timestamps();
});

Run the migration:

php artisan migrate


****
Enable Gmail SMTP Notifications

In .env:

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=yourgmail@gmail.com
MAIL_PASSWORD=your-gmail-app-password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=yourgmail@gmail.com
MAIL_FROM_NAME="BrightSmile Dental Care"


