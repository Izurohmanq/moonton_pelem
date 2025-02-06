<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movies = [
            [
                'name' => 'Jigsaw 2017',
                'slug' => 'jigsaw-2017',
                'category' => 'Gore',
                'video_url' => "https://www.youtube.com/watch?v=vPP6aIw1vgY&pp=ygUOamlnc2F3IHRyYWlsZXI%3D",
                'thumbnail' => "https://i.ytimg.com/vi/vPP6aIw1vgY/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCnZScl5U92T5R7n-zWie_lWvhNtA",
                'rating' => 9.2,
                'is_featured' => true
            ],
        ];

        Movie::insert($movies);
    }
}
