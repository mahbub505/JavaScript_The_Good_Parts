//A common error in JavaScript programs is to use an object when an array is required
//or an array when an object is required. The rule is simple: when the property names
//are small sequential integers, you should use an array. Otherwise, use an object
//
//
var is_array = function (value) {
    return value &&
            typeof value === 'object' &&
            value.constructor === Array;
};
//Unfortunately, it fails to identify arrays that were constructed in a different window
//  or frame
var is_array = function (value) {
    return value &&
            typeof value === 'object' &&
            typeof value.length === 'number' &&
            typeof value.splice === 'function' &&
            !(value.propertyIsEnumerable('length'));
};