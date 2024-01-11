// Find a peak element (First peak )which is not smaller than its neighbours

function findPeakUtil(arr, low, high, n) {
    var mid = low + parseInt((high - low) / 2);
    if ((mid == 0 || arr[mid - 1] <= arr[mid]) &&
        (mid == n - 1 || arr[mid + 1] <= arr[mid]))
        return mid;
    else if (mid > 0 && arr[mid - 1] > arr[mid])
        return findPeakUtil(arr, low, (mid - 1), n);
    else
        return findPeakUtil(
            arr, (mid + 1), high, n);
}

function findPeak(arr, n) {
    return findPeakUtil(arr, 0, n - 1, n);
}

var arr = [5, 3, 100, 20, 4, 1, 0, 23, 7, 21, 40, 36, 41, 39];
var n1 = arr.length;
const index = findPeak(arr, n1)
const value = arr[index];
console.log("Index :", index)
console.log("Value :", value)