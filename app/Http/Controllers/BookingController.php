<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Mail\BookingNotification;
use App\Models\Booking;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;


class BookingController extends Controller
{
    public function index(){
        return Inertia::render('Booking/LandingPage');
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'service_type' => 'required|string',
            'date' => 'required|date',
        ]);

        $booking = Booking::create($validated);

        // Send Gmail notification
        Mail::to('rodztechitsolutions@gmail.com')->send(new BookingNotification($booking));

        return redirect()->back()->with('success', 'Dental booking saved & notification sent!');
    }

}
