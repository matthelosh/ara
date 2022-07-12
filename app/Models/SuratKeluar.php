<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuratKeluar extends Model
{
    use HasFactory;
    protected $fillable = [
    	'no_surat',
        'klasifikasi_id',
    	'tanggal_surat',
    	'jenis',
    	'tipe',
    	'sifat',
        'perihal',
    	'lingkup',
        'pengirim',
    	'penerima',
    	'ringkasan',
    	'alamat',
    	'file_surat'
    ];

    public function disposisis()
    {
        return $this->hasMany(Disposisi::class, 'surat_id', 'no_surat');
    }
}
