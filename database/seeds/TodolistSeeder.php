<?php

use Illuminate\Database\Seeder;
use App\Todolist;

class TodolistSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Todolist::create([
            'todo'  => 'Eat'
        ]);
        Todolist::create([
            'todo'  => 'Code'
        ]);
        Todolist::create([
            'todo'  => 'Not Sleep'
        ]);
    }
}
