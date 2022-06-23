<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Post>
 */
class PostFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        
        return [
            'user_id' => '1',
            'title' => $this->faker->sentence(),
            'slug' => str_replace(" ","-", $this->faker->sentence()),
            'category_id' => rand(1,4),
            'tags' => $this->faker->word(),
            'content' => $this->faker->text($maxNbChar = 1000),
            'views' => $this->faker->randomDigit(),
            'shared' => $this->faker->randomDigit(),
            'liked' => $this->faker->randomDigit(),
            'featuredImage' => null
        ];
    }
}
