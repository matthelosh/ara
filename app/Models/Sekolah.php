<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sekolah extends Model
{
    use HasFactory;
    protected $fillable = [
        'ks','nama','nss','npsn','status_sekolat_str','alamat_jalan','rt','rw','kode_pos','nomor_telepon','email','webiste','dusun','desa_kelurahan','kecamatan','kabupaten_kota','provinsi'
    ];

    public function ks()
    {
    	return $this->belongsTo(Guru::class, 'ks', 'nip');
    }
}
