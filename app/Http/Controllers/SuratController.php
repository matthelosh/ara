<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\SuratMasuk;
use App\Models\SuratKeluar;

class SuratController extends Controller
{

	public function inbox(Request $request)
	{
		try {
			$surats = SuratMasuk::orderBy('tanggal_diterima', 'DESC')->get();
			return response()->json(['success' => true, 'surats' => $surats], 200);
		} catch (\Exception $e) {
			return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
		}
	}

    public function storeSuratMasuk(Request $request)
    {
    	try {
    		$file = $request->file('file') ?? null;
    		$surat = json_decode($request->surat);
    		// dd($surat);
    		$file_name = null;
    		if ( $file ) {
    			$ext = $file->getClientOriginalExtension();
    			$file_name = Str::random(16).'.'.$ext;
    			$file->storeAs('public/uploads/surat/masuk', $file_name);
    		}

    		SuratMasuk::updateOrCreate(
    			[
    				'id' => $surat->id ?? null,
    				'no_surat' => $surat->no_surat
    			],[
    				'tanggal_diterima' => $surat->tanggal_diterima,
			    	'pengirim' => $surat->pengirim,
			    	'tanggal_surat' => $surat->tanggal_surat,
			    	'perihal' => $surat->perihal,
			    	'sifat' => $surat->sifat,
			    	'ringkasan' => $surat->ringkasan,
			    	'file_surat' => $file_name ? '/storage/uploads/surat/masuk/'.$file_name : null
    			]
    		);

    		return response()->json(['success' => true, 'msg' => 'Surat Masuk Disimpan'], 200);
    	} catch (\Exception $e) {
    		return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
    	}
    }
}
