<?php

namespace App\Http\Controllers;

use App\Models\Sekolah;
use Illuminate\Http\Request;

class SekolahController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Sekolah  $sekolah
     * @return \Illuminate\Http\Response
     */
    public function show(Sekolah $sekolah)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Sekolah  $sekolah
     * @return \Illuminate\Http\Response
     */
    public function edit(Sekolah $sekolah)
    {
        //
    }

    public function storeLogo(Request $request)
    {
        try {
            $request->file('fileLogo')->storeAs('public/uploads/img', 'logo.png');
            return response()->json(['success' => true, 'msg' => 'Logo Disimpan'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    public function changeKepsek(Request $request, $id)
    {
        try {
            Sekolah::findOrFail($id)->update(['ks' => $request->kepsek]);
            return response()->json(['success' => true, 'msg' => 'Data Sekolah Diperbarui'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Sekolah  $sekolah
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Sekolah $sekolah)
    {
        $id = $request->id;
        $input = (Object) $request->all();
        try {
            $sekolah->find($id)->update([
                'ks' => $input->ks,
                'nama' => $input->nama,
                'nss' => $input->nss,
                'npsn' => $input->npsn,
                'status_sekolah_str' => $input->status_sekolah_str,
                'alamat_jalan' => $input->alamat_jalan,
                'rt' => $input->rt,
                'rw' => $input->rw,
                'kode_pos' => $input->kode_pos,
                'nomor_telepon' => $input->nomor_telepon,
                'email' => $input->email,
                'website' => $input->website,
                'dusun' => $input->dusun,
                'desa_kelurahan' =>$input->desa_kelurahan,
                'kecamatan' => $input->kecamatan,
                'kabupaten_kota' => $input->kabupaten_kota,
                'provinsi' => $input->provinsi, 
                'visi' => $input->visi,
                'misi' => $input->misi,
                'tujuan' => $input->tujuan
            ]);
            return response()->json(['success' => true, 'msg' => 'Data Sekolah Diperbarui'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Sekolah  $sekolah
     * @return \Illuminate\Http\Response
     */
    public function destroy(Sekolah $sekolah)
    {
        //
    }
}
