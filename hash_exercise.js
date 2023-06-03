class HashTable {
    constructor(size) {
        this.data = new Array(size);
        ['grapes', 10000]

    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) %
                this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
            this.data[address].push([key, value])
        }
        this.data[address].push([key, value])
        return this.data
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket.length) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1]
                }

            }
        }
        return undefined
    }

}

const myHashTable = new HashTable(51);
myHashTable.set('mango', 50000);
myHashTable.get('mangoes')