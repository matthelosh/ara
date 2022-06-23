<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $categories = [
            [
                'name' => 'Umum',
                'parent_id' => 0
            ],
            [
                'name' => 'Berita',
                'parent_id' => 0
            ],
            [
                'name' => 'Artikel',
                'parent_id' => 0
            ],
            [
                'name' => 'Pengumuman',
                'parent_id' => 0
            ],
        ];

        foreach($categories as $category) {
            Category::create($category);
        }
    }
}
