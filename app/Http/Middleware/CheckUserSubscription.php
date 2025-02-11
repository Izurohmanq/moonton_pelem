<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class CheckUserSubscription
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, string $status): Response
    {
        $user = Auth::user();

        if ($status === 'true' && !$user->isActive) {
            return redirect()->route('user.dashboard.subscriptionplan.index');
        }

        if ($status === 'false' && $user->isActive) {
            return redirect()->route('user.dashboard.index');
        }

        return $next($request);
    }
}
