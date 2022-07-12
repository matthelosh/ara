<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Klasifikasisurat;
use App\Models\SuratMasuk;
use App\Models\SuratKeluar;
use App\Models\Disposisi;

class SuratController extends Controller
{

	public function inbox(Request $request)
	{
		try {
			$surats = SuratMasuk::orderBy('tanggal_diterima', 'DESC')->with('disposisis.guru')->get();
			return response()->json(['success' => true, 'surats' => $surats], 200);
		} catch (\Exception $e) {
			return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
		}
	}
    public function outbox(Request $request)
    {
        try {
            $surats = SuratKeluar::orderBy('created_at', 'DESC')->with('disposisis.guru')->get();
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
    public function storeSuratKeluar(Request $request)
    {
        try {
            $file = $request->file('file') ?? null;
            $surat = json_decode($request->surat);
            // dd($surat);
            $file_name = null;
            if ( $file ) {
                $ext = $file->getClientOriginalExtension();
                $file_name = Str::random(16).'.'.$ext;
                $file->storeAs('public/uploads/surat/keluar', $file_name);
            }

            SuratKeluar::updateOrCreate(
                [
                    'id' => $surat->id ?? null,
                    'no_surat' => $surat->no_surat
                ],[
                    'klasifikasi_id' => $surat->klasifikasi_id,
                    'pengirim' => $surat->pengirim->name.'('.$surat->pengirim->jabatan.')',
                    'tanggal_surat' => $surat->tanggal_surat,
                    'perihal' => $surat->perihal ?? null,
                    'sifat' => $surat->sifat,
                    'jenis' => $surat->jenis,
                    'tipe' => $surat->tipe,
                    'lingkup' => $surat->lingkup,
                    'penerima' => $surat->penerima->name.'('.$surat->penerima->jabatan.')',
                    'alamat' => $surat->alamat,
                    'ringkasan' => $surat->ringkasan,
                    'file_surat' => $file_name ? '/storage/uploads/surat/masuk/'.$file_name : null
                ]
            );

            return response()->json(['success' => true, 'msg' => 'Surat Keluar Disimpan'], 200);
        } catch (\Exception $e) {
            return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
        }
    }

    public function storeDisposisiMasuk(Request $request)
    {
    	try {
    		$input = $request->all();
    		foreach ($input['kepada'] as $kepada) {
    			$kepadas = $kepada['name'].' ('.$kepada['jabatan'].'),';
    		}
    		$disposisi = Disposisi::updateOrCreate(
    			[
    				'id' => $input['id'] ?? null,
    				'surat_id' => $input['surat_id'],
    				'guru_id' => $request->user()->userid,
    			],[

			    	'kepada' => $kepadas,
			    	'konten' => $input['konten'],
			    	'status' => $input['status'] ?? 'Dibaca'
    			]
    		);
    		// dd($disposisi->id);
    		return response()->json(['success' => true, 'msg' => 'Disposisi Surat Masuk Disimpan'], 200);
    	} catch (\Exception $e) {
    		return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
    	}
    }

	public function indexKlasifikasi(Request $request)
	{
		try {
			$klasifikasis = Klasifikasisurat::get();
			return response()->json(['success' => true, 'klasifikasis' => $klasifikasis], 200);
		} catch (\Exception $e) {
			return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
		}
	}
	
	public function storeKlasifikasi(Request $request)
	{
		try {
			Klasifikasisurat::updateOrCreate([
                'id' => $request['id'] ?? null
            ],[
				'kode' => $request['kode'],
				'keterangan' => $request['keterangan']
			]);
			return response()->json(['success' => true, 'msg' => 'Klasifikasi Surat Disimpan'], 200);
		} catch (\Exception $e) {
			return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
		}
	}
    public function destroySuratMasuk(Request $request, $id)
    {
    	try {
    		SuratMasuk::find($id)->delete();
    		return response()->json(['success' => true, 'msg' => 'Data Surat Masuk Dihapus'], 200);
    	} catch (\Exception $e) {
    		return response()->json(['success' => false, 'msg' => $e->getMessage()], 500);
    	}
    }
}
