<?php

namespace Tests\Feature;

use App\Models\User;
use Database\Seeders\DatabaseSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class UserFoundationTest extends TestCase
{
    use RefreshDatabase;

    public function test_new_users_default_to_zero_credit_balance(): void
    {
        $user = User::factory()->create();

        $this->assertSame(0, $user->credit_balance);
    }

    public function test_database_seeder_creates_an_admin_user(): void
    {
        $this->seed(DatabaseSeeder::class);

        $this->assertDatabaseHas('users', [
            'email' => 'admin@example.com',
            'is_admin' => true,
        ]);
    }
}
