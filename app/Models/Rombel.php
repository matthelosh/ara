<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rombel extends Model
{
    use HasFactory;
    protected $fillable = ['periode_id','guru_id','kode_rombel','name','tingkat'];

    public function periode()
    {
    	return $this->belongsTo(Periode::class, 'periode', 'kode_periode');
    }

    public function guru()
    {
    	return $this->belongsTo(Guru::class, 'guru_id', 'nip');
    }

    
}
