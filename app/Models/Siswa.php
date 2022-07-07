<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Siswa extends Model
{
    use HasFactory;
    protected $fillable = [
    	'nisn','nis','nik','no_akta','no_kip','no_kk','nama','jk','tempat_lahir','tanggal_lahir','alamat','rt','rw','desa','kecamatan','kode_pos','kabupaten','provinsi','hp','email','is_active','agama'
    ];

    public function rombel()
    {
    	return $this->belongsToMany(Rombel::class, 'rombel_siswa');
    }

    public function user()
    {
    	return $this->morphOne(User::class, 'userable');
    }

    public function ortu()
    {
    	return $this->belongsTo(Ortu::class, 'no_kk', 'no_kk');
    }
}
