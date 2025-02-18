<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SubscriptionPlanController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\Admin\MovieController as AdminMovieController;

Route::redirect('/', '/login');

Route::middleware(['auth', 'role:user'])->prefix('dashboard')->name('user.dashboard.')->group(function () {
    Route::get('/', [DashboardController::class, 'index'])->name('index');
    Route::get('movie/{movie:slug}', [MovieController::class, 'show'])->name('movie.show')->middleware('check.subscription:true');
    Route::get('subscriptionPlan', [SubscriptionPlanController::class, 'index'])->name('subscriptionplan.index')->middleware('check.subscription:false');
    Route::post('subscriptionPlan/{subscriptionPlan}/user-subscribe', [SubscriptionPlanController::class, 'userSubscribe'])->name('subscriptionplan.userSubscribe')->middleware('check.subscription:false');
});

Route::middleware(['auth', 'role:admin'])->prefix('admin')->name('admin.dashboard.')->group(function () {
    Route::put('movie/{movie}/restore', [AdminMovieController::class, 'restore'])->name('movie.restore');
    Route::resource('movie', AdminMovieController::class);
});

Route::prefix('prototype')->name('prototype.')->group(function () {
    route::get('/login', function () {
        return Inertia::render('Prototype/Login');
    })->name('login');

    route::get('/register', function () {
        return Inertia::render('Prototype/Register');
    })->name('register');

    route::get('/dashboard', function () {
        return Inertia::render('Prototype/Dashboard');
    })->name('dashboard');

    route::get('/subscriptionplan', function () {
        return Inertia::render('Prototype/SubscriptionPlan');
    })->name('subscriptionPlan');

    route::get('/movie/{slug}', function () {
        return Inertia::render('Prototype/Movie/Show');
    })->name('movie.show');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
