<?php

namespace App\Http\Controllers;

use App\Models\category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    private $rules = [
        'name' => 'required|max:255',
        'is_active' => 'boolean'
    ];

    public function index(Request $request)
    {
        if ($request->has('only_trashed')){

            return category::onlyTrashed()->get();
        }
        return category::all();
    }

    public function store(Request $request)
    {
        $this->validate($request, $this->rules);
        category::created($request->all());
    }

    public function show(category $category)
    {
        return $category;
    }

    public function update(Request $request, category $category)
    {
        $this->validate($request, $this->rules);
        category::updated($request->all());
        return $category;
    }

    public function destroy(category $category)
    {
        $category->delete();
        return response()->noContent();
    }
}
