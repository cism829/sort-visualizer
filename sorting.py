

myArray = [9, 3, 5, 10, 8, 7, 6, 1, 4, 2]
otherArray = [10, 5, 7, 9, 8, 6]


def bubbleSort(array):
    print('Bubble sort start')
    count = 0

    for _ in range(len(array)-1):
        hasSwap = False
        for i in range(len(array)-1):
            count += 1
            # print('\ncurrently on:', array[i])
            # print(array[i], array)
            if array[i] > array[i+1] :
                print(array[i], '>', array[i+1], '\t', array)
                array[i], array[i+1] = swap(array[i], array[i+1])
                hasSwap=True
            else:
                print(array[i], '<', array[i+1],'\t' ,array )
        if not hasSwap:
            break

    print('Iterations', count)

def mergeSort(array):
    # print('Merge Sort Start')
    print(array)
    if len(array) <= 1:
        print('return\n')
        return array

    partition = int(len(array)/2)
    print('split')
    tempArr1 = array[:partition]
    tempArr2 = array[partition:]
    print(tempArr1)
    print(tempArr2)

    print('recursion')
    print('splitting temp1')
    tempArr1 = mergeSort(tempArr1)
    print('splitting temp2')
    tempArr2 = mergeSort(tempArr2)

    print('return\n')
    return merge(tempArr1, tempArr2)

def merge(left, right):
    print('left', left, 'right:', right)
    newArray = []
    i=0
    j=0

    while i < len(left) and j < len(right):
        
        if left[i] < right[j]:
            newArray.append(left[i])
            print('sorted array:' ,newArray)
            i +=1
        else:
            newArray.append(right[j])
            print('sorted array:' ,newArray)
            j+=1
    newArray.extend(left[i:])
    newArray.extend(right[j:])
    print(newArray)
    
    print('return\n')
    return newArray

def quickSort(array):
    print('Quick Sort Start')


def swap(x, y):
    return y, x
            
def main():
    print('hello main')
    # bubbleSort(myArray)
    # bubbleSort(otherArray)
    # print(mergeSort(otherArray))
    quickSort(otherArray)


main()