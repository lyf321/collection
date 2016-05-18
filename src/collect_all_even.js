'use strict';

function collect_all_even(collection) {
    var evenElement = [];

    collection.forEach(function (collect) {
        if (!(collect % 2)) {
            evenElement.push(collect);
        }
    });

    return evenElement;
}

module.exports = collect_all_even;
