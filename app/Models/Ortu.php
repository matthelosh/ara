<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ortu extends Model
{
    use HasFactory;
    protected $fillable = [
    	'no_kk','nama_ayah','nik_ayah','profesi_ayah','status_ayah','nama_ibu','nik_ibu','profesi_ibu','status_ibu','nama_wali','nik_wali','profesi_wali','status_wali'
    ];
}
