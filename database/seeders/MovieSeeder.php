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
                'rating' => 4.2,
                'is_featured' => true
            ],
            [
                'name' => 'Saw X',
                'slug' => 'saw-x',
                'category' => 'Gore',
                'video_url' => "https://www.youtube.com/watch?v=jHt-2jYdNQs",
                'thumbnail' => "https://i.ytimg.com/vi/t3PzUo4P21c/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD-6i2nN3TK_JKCJQoBMKDIIpnzYA",
                'rating' => 4.5,
                'is_featured' => true
            ],
            [
                'name' => 'Hostel',
                'slug' => 'hostel',
                'category' => 'Gore',
                'video_url' => "https://www.youtube.com/watch?v=4dGOfFbzvq4",
                'thumbnail' => "https://i.ytimg.com/vi/4dGOfFbzvq4/hq720.jpg",
                'rating' => 4.0,
                'is_featured' => true
            ],
            [
                'name' => 'The Texas Chainsaw Massacre',
                'slug' => 'the-texas-chainsaw-massacre',
                'category' => 'Gore',
                'video_url' => "https://www.youtube.com/watch?v=Vs3981DoINw",
                'thumbnail' => "https://upload.wikimedia.org/wikipedia/en/thumb/a/a0/The_Texas_Chain_Saw_Massacre_%281974%29_theatrical_poster.jpg/220px-The_Texas_Chain_Saw_Massacre_%281974%29_theatrical_poster.jpg",
                'rating' => 4.3,
                'is_featured' => true
            ],
            [
                'name' => 'Evil Dead Rise',
                'slug' => 'evil-dead-rise',
                'category' => 'Gore',
                'video_url' => "https://www.youtube.com/watch?v=BqYj3dnIP_w",
                'thumbnail' => "https://upload.wikimedia.org/wikipedia/en/thumb/9/98/EvilDeadRiseTeaser.jpg/220px-EvilDeadRiseTeaser.jpg",
                'rating' => 4.6,
                'is_featured' => true
            ],
            [
                'name' => 'Terrifier 2',
                'slug' => 'terrifier-2',
                'category' => 'Gore',
                'video_url' => "https://www.youtube.com/watch?v=6KkONLf_ZKU",
                'thumbnail' => "https://upload.wikimedia.org/wikipedia/en/thumb/c/cd/Terrifier_2_Poster.jpg/220px-Terrifier_2_Poster.jpg",
                'rating' => 4.7,
                'is_featured' => true
            ]
            
        ];

        Movie::insert($movies);
    }
}
