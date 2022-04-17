<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class DashController extends Controller
{
    public function admin(Request $request)
    {
        $routeName = $request->route()->getName();
        $endPoint=explode('.', $routeName);
        $page = count($endPoint) > 1 ?ucfirst( $endPoint[0]) . '/' . ucfirst($endPoint[1]) : ucfirst($endPoint[0]);
        return Inertia::render($page);
    }
}
