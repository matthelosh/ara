<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Video extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'description', 'url', 'user_id'];

    public function user()
    {
    	return $this->belongsTo(Guru::class, 'user_id', 'nip');
    }
}
