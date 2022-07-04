<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use Illuminate\Http\Request;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $siswas = Siswa::orderBy('nisn', 'ASC')->get();
            return response()->json(['success' => true, 'siswas' => $siswas], 200);
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
        try {
            $foto = $request->foto;
            $input = json_decode($request->siswa);
            if($foto) {
                $foto->storeAS('public/uploads/img/siswa', $input->nisn.'.jpg');
            }
            Siswa::updateOrCreate(
                [
                    'id' => $input->id ?? null,
                ],[
                    'nisn' => $input->nisn,
                    'nis' => $input->nis,
                    'nik' => $input->nik ?? null,
                    'no_akta' => $input->no_akta ?? null,
                    'no_kip' => $input->no_kip ?? null,
                    'no_kk' => $input->no_kk ?? null,
                    'nama' => $input->nama,
                    'jk' => $input->jk,
                    'tempat_lahir' => $input->tempat_lahir,
                    'tanggal_lahir' => $input->tanggal_lahir,
                    'alamat' => $input->alamat,
                    'rt' => $input->rt,
                    'rw' => $input->rw,
                    'desa' => $input->desa,
                    'kecamatan' => $input->kecamatan,
                    'kode_pos' => $input->kode_pos,
                    'kabupaten' =>$input->kabupaten,
                    'provinsi' => $input->provinsi,
                    'hp' => $input->hp,
                    'email' => $input->email,
                ]
            );
            return response()->json(['success' => true, 'msg' => 'Simpan Siswa Sukses'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function show(Siswa $siswa)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function edit(Siswa $siswa)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Siswa $siswa)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Siswa  $siswa
     * @return \Illuminate\Http\Response
     */
    public function destroy(Siswa $siswa)
    {
        //
    }
}
