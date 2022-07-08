<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuratMasuk extends Model
{
    use HasFactory;

    protected $fillable = [
    	'no_surat',
    	'tanggal_diterima',
    	'pengirim',
    	'tanggal_surat',
    	'perihal',
    	'sifat',
    	'ringkasan',
    	'file_surat'
    ];

    public function disposisi()
    {
    	return $this->HasOne(Disposisi::class, 'surat_id','no_surat');
    }
}
