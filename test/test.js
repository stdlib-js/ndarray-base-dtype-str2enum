/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var enum2str = require( '@stdlib/ndarray-base-dtype-enum2str' );
var str2enum = require( './../lib' );


// VARIABLES //

// List of native C types which should be supported...
var DTYPES = [
	'int8',
	'uint8',
	'int16',
	'uint16',
	'int32',
	'uint32',
	'int64',
	'uint64',

	'float32',
	'float64',

	'complex64',
	'complex128'
];


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof str2enum, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function returns the enumeration constant associated with an ndarray data type string', function test( t ) {
	var i;
	for ( i = 0; i < DTYPES.length; i++ ) {
		t.strictEqual( enum2str( str2enum( DTYPES[ i ] ) ), DTYPES[ i ], 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `null` if unable to resolve an enumeration constant', function test( t ) {
	var values;
	var i;

	values = [
		'beep',
		'boop',
		'foo',
		'bar'
	];
	for ( i = 0; i < values.length; i++ ) {
		t.strictEqual( str2enum( values[ i ] ), null, 'returns expected value' );
	}
	t.end();
});
