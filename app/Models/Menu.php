<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{
    use HasFactory;

    protected $fillable = ['label', 'url','icon','roles','parent_id'];

    public function parent()
    {
        $this->belongsTo(Menu::class);
    }

    public function children()
    {
        $this->hasMany(Menu::class);
    }
}
