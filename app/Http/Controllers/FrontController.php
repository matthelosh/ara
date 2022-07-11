<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\Theme;
use Illuminate\Support\Facades\Hash;

class FrontController extends Controller
{
    public function index(Request $request)
    {
    	$theme = Theme::where('is_active',1)->first();
        $routeName = $request->route()->getName();
        $endPoint=explode('.', $routeName);
        $page = count($endPoint) > 1 ? ucfirst( $endPoint[0]) . '/' . ucfirst($endPoint[1]) : ucfirst($endPoint[0]);
        if($request->user()) {
        	return redirect('/admin');
        }
        $active_theme_name = $theme ? $theme->name : 'default';
        return Inertia::render('Front/'.$active_theme_name.'/'.$page, ['page' => $page]);
        // return $theme->name.'/'.$page;
    }

    public function addAdmin()
    {
        try {
            // Cek jika sudah ada User Admin
            $admin = 'App\Models\Guru'::where('jabatan', 'admin')->first();
            if($admin) {
                // Cek jika sudah ada user Admin
                $userAdmin = 'App\Models\User'::where('level', 'admin')->first();
                if($userAdmin) {
                    return '<h1>Admin Sudah Ada</h1><p><a href="/login">Login</a> untuk masuk</p>';
                } else {
                    $this->createAdmin($admin);
                }
            } else {
                $guru = 'App\Models\Guru'::create([
                    'nip' => 'admin',
                    'name' => 'Administrator',
                    'email' => 'admin@sekolah.sch.id3',
                    'jk' => 'Laki-laki',
                    'tempat_lahir' => 'Malang',
                    'tanggal_lahir' => date('Y-m-d'),
                    'alamat' => 'Malang',
                    'hp' => '0000000000',
                    'jabatan' => 'admin',
                    'is_active' => 1
                ]);

                $this->createAdmin($guru);
            }

            return redirect('/login');
        } catch (\Exception $e) {
            return $e->getMEssage();
        }
    }

    public function createAdmin($admin)
    {
        $email = explode('@', $admin->email);
        $admin = 'App\Models\User'::create(
            [
                'userid' => $admin->nip,
                'level' => 'admin',
                'userable_id' => $admin->id,
                'userable_type' => 'App\Models\Guru',
                'username' => $email[0],
                'password' => Hash::make('12345'),
                'email' => $admin->email
            ]
        );
    }
}
