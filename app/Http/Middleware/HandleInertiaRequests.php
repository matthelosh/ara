<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Middleware;
use App\Models\User;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that's loaded on the first page visit.
     *
     * @see https://inertiajs.com/server-side-setup#root-template
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determines the current asset version.
     *
     * @see https://inertiajs.com/asset-versioning
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * Defines the props that are shared by default.
     *
     * @see https://inertiajs.com/shared-data
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            // 'periode' => session()->get('periode'),
            'user' => Auth::user() ? $this->detail(Auth::user()) : null,
            'sekolah' => 'App\Models\Sekolah'::with('kepsek')->first(),
        ]);
    }


    public function detail($user)
    {
        // if ( $user->level == 'admin' || $user->level == 'guru') {
        //     return User::where('id', $user->id)->with('userable')->first();
        // } else {
        //     return User::where('id', $user->id)->with('siswa')->first();
        // }
        return User::find($user->id)->with('userable')->first();
    }
}
