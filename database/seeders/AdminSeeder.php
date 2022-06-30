<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create([
        	'name' => 'Administrator',
        	'email' => 'admin@sdn1-bedalisodo.sch.id',
        	'username' => 'admin',
        	'userid' => 'admin',
        	'level' => 'admin',
        	'password' => Hash::make('12345'),
        	'userable_id' => 1,
        	'userable_type' => 'App\Models\Guru'
        ]);
    }
}
