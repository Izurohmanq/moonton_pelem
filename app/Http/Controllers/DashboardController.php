<?php

namespace App\Http\Controllers;

use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index() {

        $featuredMovies = Movie::whereIsFeatured(true)->get();
        $movies = Movie::all();

        return Inertia::render('User/Dashboard/index', [
            'featuredMovies' => $featuredMovies,
            'movies' => $movies
        ]);
    }
}
