let data = { sum1: 5, sum2: 20} 
let target = null;

class Dep {
    constructor() {
        this.subscribers = [];
    }

    depend() {
        if(target && !this.subscribers.includes(target)) {
            this.subscribers.push(target);
        }
    }
    notify() {
        this.subscribers.forEach(sub => sub());
    }
}

Object.keys(data).forEach(key => {
    let internalValue = data[key];

    const dep = new Dep();

    Object.defineProperty(data, key, {
        get() {
            dep.depend();
            return internalValue;
        },
        set(newVal) {
            internalValue = newVal;
            dep.notify();
        }
    })
})

function watcher(myFunction) {
    target = myFunction;
    target();
    target = null;
}

watcher(() => {
    data.total = data.sum1 * data.sum2
})