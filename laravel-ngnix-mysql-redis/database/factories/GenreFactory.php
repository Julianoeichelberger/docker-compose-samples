<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\genre;
use Faker\Generator as Faker;

$factory->define(genre::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName
    ];
});
