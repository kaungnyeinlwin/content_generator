<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class DashboardController extends Controller
{
    public function index(Request $request): Response
    {
        return Inertia::render('dashboard', [
            'user' => [
                'name' => $request->user()?->name,
                'credit_balance' => (int) ($request->user()?->credit_balance ?? 0),
            ],
        ]);
    }
}
