<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class QRCodeController extends Controller
{
    public function bookingFormQR(){
        $url = url('/'); # the url of the landing page

        # Generate a PNG image ouput
        $qr = QrCode::format('png')->size(800)->generate($url);
        return response($qr)->header('Content-Type', 'image/png');

    }
}
