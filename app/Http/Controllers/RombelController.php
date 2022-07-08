<?php

namespace App\Http\Controllers;

use App\Models\Rombel;
use Illuminate\Http\Request;

class RombelController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        try {
            if (!isset($request->periode)) {
                $periode = 'App\Models\Periode'::where('is_active', 1)->first();
            } else {
                $periode = 'App\Models\Periode'::where('kode_periode', $request->periode)->first();
            }
            $rombels = Rombel::where('periode_id', $periode->kode_periode)->with('guru','siswas')->orderBy('tingkat', 'ASC')->get();
            return response()->json(['success' => true, 'rombels' => $rombels], 200);
        } catch (\Exception $e) {
            return response()->json(['sucess' => false, 'msg' => $e->getMessage()], 500);
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
            $input = $request->all();
            Rombel::updateOrCreate(
                [
                    'id' => $input['id'] ?? null,

                ],[
                    'kode_rombel' => $input['kode_rombel'],
                    'name' => $input['name'],
                    'periode_id' => $request['periode_id'],
                    'guru_id' => $request['guru_id'],
                    'tingkat' => $request['tingkat']
                ]
            );

            return response()->json(['success' => true, 'msg' => 'Rombel Disimpan'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Rombel  $rombel
     * @return \Illuminate\Http\Response
     */
    public function show(Rombel $rombel)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Rombel  $rombel
     * @return \Illuminate\Http\Response
     */
    public function edit(Rombel $rombel)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Rombel  $rombel
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rombel $rombel)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Rombel  $rombel
     * @return \Illuminate\Http\Response
     */
    public function destroy(Rombel $rombel, $id)
    {
        try {
            $rombel = $rombel->find($id);
            $rombel->siswas()->detach();
            $rombel->delete();
            return response()->json(['success' => true, 'msg' => 'Rombel Dihapus.'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }
}
