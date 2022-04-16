<?php

namespace App\Http\Controllers;

use App\Models\genre;
use Illuminate\Http\Request;

class GenreController extends Controller
{
    private $rules = [
        'name' => 'required|max:255',
        'is_active' => 'boolean'
    ];

    public function index(Request $request)
    {
        if ($request->has('only_trashed')){

            return genre::onlyTrashed()->get();
        }
        return genre::all();
    }

    public function store(Request $request)
    {
        $this->validate($request, $this->rules);
        genre::created($request->all());
    }

    public function show(genre $genre)
    {
        return $genre;
    }

    public function update(Request $request, genre $genre)
    {
        $this->validate($request, $this->rules);
        genre::updated($request->all());
        return $genre;
    }

    public function destroy(genre $genre)
    {
        $genre->delete();
        return response()->noContent();
    }
}
