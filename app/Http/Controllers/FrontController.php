<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class FrontController extends Controller
{
    public function index(Request $request)
    {
        $routeName = $request->route()->getName();
        $endPoint=explode('.', $routeName);
        $page = count($endPoint) > 1 ? ucfirst( $endPoint[0]) . '/' . ucfirst($endPoint[1]) : ucfirst($endPoint[0]);
        return Inertia::render('Front/Pages/'.$page);
        // return $page;
    }
}
