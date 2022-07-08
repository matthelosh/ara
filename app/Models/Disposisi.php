<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Disposisi extends Model
{
    use HasFactory;
    protected $fillable = [
    	'surat_id',
    	'kepada',
    	'kontent',
    	'batas_waktu',
    	'catatam',
    	'status'
    ];

    public function suratMasuk()
    {
    	return $this->belogsTo(Suratmasuk::class, 'surat_id', 'no-surat');
    }
}
