<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DashController extends Controller
{
    public function admin(Request $request)
    {
        $routeName = $request->route()->getName();
        return Inertia::render(ucfirst($routeName));
    }
}
