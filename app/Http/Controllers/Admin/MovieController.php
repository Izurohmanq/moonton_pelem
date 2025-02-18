<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\Movie\Store;
use App\Http\Requests\Admin\Movie\Update;
use App\Models\Movie;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Storage;
use Str;

class MovieController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $movies = Movie::withTrashed()->orderBy('deleted_at')->get();
        return Inertia::render('Admin/Dashboard/Index', [
            'movies' => $movies
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Admin/Dashboard/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Store $request)
    {
        $data = $request->validated();
        $data['thumbnail'] = Storage::disk('public')->put('movies', $request->file('thumbnail'));

        $data['slug'] = Str::slug($data['name']);
        
        Movie::create($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Movie inserted succesfully",
            'type' => "success"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Movie $movie)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Movie $movie)
    {
        return Inertia::render('Admin/Dashboard/Edit', [
            'movie' => $movie
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Update $request, Movie $movie)
    {
        $data = $request->validated();

        if ($request->hasFile('thumbnail')) {
            // Hapus file thumbnail lama jika ada
            if ($movie->thumbnail) {
                Storage::disk('public')->delete($movie->thumbnail);
            }

            // Simpan file baru dan update data thumbnail
            $data['thumbnail'] = $request->file('thumbnail')->store('movies', 'public');
        }

        $movie->update($data);

        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Movie updated successfully",
            'type' => "success"
        ]);
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Movie $movie)
    {
        $movie->delete();
        
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Movie deleted successfully",
            'type' => "success"
        ]);
    }
    public function restore($movie)
    {
        Movie::withTrashed()->find($movie)->restore();
        return redirect(route('admin.dashboard.movie.index'))->with([
            'message' => "Movie Restored successfully",
            'type' => "success"
        ]);
    }
}
