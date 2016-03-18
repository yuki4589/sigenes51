<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Employee extends Model
{
    use SoftDeletes;
    protected $dates = ['deleted_at'];

    protected $table='employees';

    protected $fillable=['no_employee'];

    public function Partner(){
        return $this->belongsTo('App\Partner');
    }
}
