<?php

namespace App\Http\Controllers;

use App\Models\Guru;
use Illuminate\Http\Request;

class GuruController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $gurus = Guru::where('jabatan','!=', 'admin')->orderBy('created_at', 'DESC')->with('user')->get();
            return response()->json(['success' => true, 'gurus' => $gurus], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    
    public function import(Request $request)
    {
        $gurus = $request->gurus;
        try {
            foreach($gurus as $guru) {
                Guru::updateOrCreate(
                    [
                        'nip' => $guru['nip']
                    ],[
                        'name' => $guru['name'],
                        'email' => $guru['email'],
                        'jk' => $guru['jk'],
                        'tempat_lahir' => $guru['tempat_lahir'],
                        'tanggal_lahir' => $guru['tanggal_lahir'],
                        'alamat' => $guru['alamat'],
                        'hp' => $guru['hp'],
                        'jabatan' => $guru['jabatan'],
                        'is_active' => $guru['is_active']
                    ]
                );
            }
            return response()->json(['success' => true, 'msg' => 'Impor Guru Sukses'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // dd($request->all());
        $foto = $request->foto;
        $input = json_decode($request->guru);
        // dd($input);
        try {
            if($foto) {
                $foto->storeAs('public/uploads/img/guru', $input->nip.'.jpg');
            }
            Guru::updateOrCreate(
                [
                    'id' => $input->id ?? null,
                ],[
                    'nip' => $input->nip,
                    'name' => $input->name,
                    'email' => $input->email,
                    'jk' => $input->jk,
                    'tempat_lahir' => $input->tempat_lahir,
                    'tanggal_lahir' => $input->tanggal_lahir,
                    'alamat' => $input->alamat,
                    'hp' => $input->hp,
                    'jabatan' => $input->jabatan,
                    'is_active' => $input->is_active ?? 1
                ]
            );
            return response()->json(['success' => true, 'msg' => 'Simpan Guru Sukses'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Guru  $guru
     * @return \Illuminate\Http\Response
     */
    public function destroy(Guru $guru, $id)
    {
        try {
            // $guru->user->delete();
            $guru = $guru->find($id);
            $guru->user->delete();
            $guru->delete();

            return response()->json(['success' => true, 'msg' => 'Hapus Guru Sukses'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }
}
