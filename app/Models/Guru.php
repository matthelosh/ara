<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guru extends Model
{
    use HasFactory;
    protected $fillable = [
    	'nip','name','email','jk','tempat_lahir','tanggal_lahir','alamat','hp','jabatan','is_active'
    ];

    public function user()
    {
    	return $this->morphOne('App\Models\User','userable');
    }

    public function rombel()
    {
    	return $this->hasMany(Rombel::class, 'guru_id','nip');
    }

    public function sekolah()
    {
    	return $this->hasOne(Sekolah::class, 'ks','nip');
    }
}
