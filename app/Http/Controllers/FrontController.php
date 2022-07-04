<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Theme;

class FrontController extends Controller
{
    public function index(Request $request)
    {
    	$theme = Theme::where('is_active',1)->first();
        $routeName = $request->route()->getName();
        $endPoint=explode('.', $routeName);
        $page = count($endPoint) > 1 ? ucfirst( $endPoint[0]) . '/' . ucfirst($endPoint[1]) : ucfirst($endPoint[0]);
        return Inertia::render('Front/'.$theme->name.'/'.$page, ['page' => $page]);
        // return $theme->name.'/'.$page;
    }
}
