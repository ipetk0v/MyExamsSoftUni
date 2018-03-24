class PaymentProcessor {
    constructor(options){
        this.setOptions = options
        this.store = []
    }

    registerPayment(id, name, type, value){
        if(typeof id === 'string' && typeof name === 'string' && typeof value === 'number'){
            let obj = {'id': id,'name': name,'type': type, 'value': value}
            let containse = false
            this.store.forEach(element => {
                if (element['id'] === id){
                    containse = true
                }
            });
            if(!containse){
                this.store.push(obj)
            }
        } else {
            throw new Error('Invalid type')
        }
    }

    deletePayment(id){
        this.checkIdIsExist(id)

        let index = this.store.findIndex(a => a.id === id);
        if (index !== -1){
            this.store.splice(index, 1);
        } 
    }

    get(id){
        this.checkIdIsExist(id)
        let currentObj
        this.store.forEach(el => {
            if(el['id'] === id){
                currentObj = el
            }
        })
        let output = `Details about payment ID: ${currentObj.id}\n` +
        `- Name: ${currentObj.name}\n` +
        `- Type: ${currentObj.type}\n` +
        `- Value: ${currentObj.value.toFixed(2)}\n`
        
        return output
    }

    setOptions(options){
        
    }

    toString(){
        let balance = 0
        this.store.forEach(el => {
            balance += Number(el['value'])
        })
        let toString = `Summary:\n` +
        `- Payments: ${this.store.length}\n` +
        `- Balance: ${balance.toFixed(2)}\n`

        return toString;
    }

    checkIdIsExist(id){
        let containse = false
        this.store.forEach(element => {
            if (element['id'] === id){
                containse = true
            }
        });
        if(!containse){
            throw new Error('ID not found')
        }
    }
}

const generalPayments = new PaymentProcessor();

// generalPayments.setOptions({types: ['product', 'material']});

// // Initialize processor with custom precision
const transactionLog = new PaymentProcessor({precision: 5});
transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
console.log(transactionLog.toString());
