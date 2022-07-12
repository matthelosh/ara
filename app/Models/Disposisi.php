<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disposisi extends Model
{
    use HasFactory;
    protected $fillable = [
    	'surat_id',
        'reply_to',
        'guru_id',
    	'kepada',
    	'konten',
    	'status'
    ];

    public function suratMasuk()
    {
    	return $this->belongsTo(Suratmasuk::class, 'surat_id', 'no_surat');
    }
    public function SuratKeluar()
    {
        return $this->belongsTo(SuratKeluar::class, 'surat_id', 'no_surat');
    }
    public function guru()
    {
        return $this->belongsTo(Guru::class, 'guru_id', 'nip');
    }


}
