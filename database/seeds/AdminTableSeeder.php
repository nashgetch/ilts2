<?php

use Illuminate\Database\Seeder;

class AdminTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        App\User::create([
            'name' => 'Nahom Getu',
            'email' => 'nash@nash.com',
            'password' => '1234',
            'role' => 'admin'
        ]);
    }
}
