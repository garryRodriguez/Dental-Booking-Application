import React from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function LandingPage() {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        phone: '',
        service_type: '',
        date: '',
    });

    // not necessary
    const { flash } = usePage().props;

    const dentalServices = [
        "Dental Cleaning",
        "Tooth Extraction",
        "Dental Consultation",
        "Orthodontic Check-up",
        "Root Canal Treatment",
        "Dental Filling",
        "Teeth Whitening",
        "Gum Treatment",
        "Braces Adjustment",
        "Dental X-Ray",
        "Crown / Bridge",
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        /**
         * post comes from useForm
         * The laravel controller will received the data from the form
         */
        post('/bookings');
    };

    return (
        <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
            {/* LEFT — Booking Form */}
            <div className="bg-gray-100 flex items-center justify-center p-10">
                <div className="w-full max-w-md">
                    {/* ✅ Success alert */}
                    {flash?.success && (
                        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                            {flash.success}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-lg w-full">
                        <h2 className="text-2xl font-bold mb-6 text-center">Dental Booking</h2>

                        <label className="block mb-2 font-semibold">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={data.name}
                            onChange={e => setData('name', e.target.value)}
                            className="w-full border rounded p-2 mb-4"
                            required
                        />
                        {errors.name && <div className="text-red-600 mb-2">{errors.name}</div>}

                        <label className="block mb-2 font-semibold">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={data.email}
                            onChange={e => setData('email', e.target.value)}
                            className="w-full border rounded p-2 mb-4"
                            required
                        />
                        {errors.email && <div className="text-red-600 mb-2">{errors.email}</div>}

                        <label className="block mb-2 font-semibold">Mobile Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={data.phone}
                            onChange={e => setData('phone', e.target.value)}
                            className="w-full border rounded p-2 mb-4"
                            required
                        />
                        {errors.phone && <div className="text-red-600 mb-2">{errors.phone}</div>}

                        <label className="block mb-2 font-semibold">Dental Service</label>
                        <select
                            name="service_type"
                            value={data.service_type}
                            onChange={e => setData('service_type', e.target.value)}
                            className="w-full border rounded p-2 mb-4"
                            required
                        >
                            <option value="">Select service</option>
                            {dentalServices.map((service, idx) => (
                                <option key={idx} value={service}>{service}</option>
                            ))}
                        </select>
                        {errors.service_type && <div className="text-red-600 mb-2">{errors.service_type}</div>}

                        <label className="block mb-2 font-semibold">Date</label>
                        <input
                            type="date"
                            name="date"
                            value={data.date}
                            onChange={e => setData('date', e.target.value)}
                            className="w-full border rounded p-2 mb-6"
                            required
                        />
                        {errors.date && <div className="text-red-600 mb-2">{errors.date}</div>}

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-600 w-full py-2 rounded text-white font-semibold hover:bg-blue-700"
                        >
                            {processing ? 'Submitting...' : 'Submit Booking'}
                        </button>
                    </form>
                </div>
            </div>

            {/* RIGHT — Welcome */}
            <div className="flex flex-col items-center justify-center bg-blue-600 text-white p-10">
                <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Our Dental Clinic</h1>
                <p className="text-lg opacity-90 text-center max-w-md">
                    Book your dental appointment easily. You will receive an instant confirmation email.
                </p>
            </div>
        </div>
    );
}
