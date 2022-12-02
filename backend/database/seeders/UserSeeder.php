<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'first_name' => 'Mikasa',
                'last_name' => 'Ackerman',
                'username' => 'mikasaackerman',
                'email' => 'mikasaackerman@gmail.com',
                'password' => bcrypt('password'),
                'created_at' => now(),
                'updated_at' => now()
            ],
            [
                'first_name' => 'Eren',
                'last_name' => 'Yaeger',
                'username' => 'erenyaeger',
                'email' => 'erenyaeger@gmail.com',
                'password' => bcrypt('password'),
                'created_at' => now(),
                'updated_at' => now()
            ]
        ])->each(function($user){
            DB::table('users')->insert($user);
        });
    }
}
